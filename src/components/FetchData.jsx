import React ,{ useEffect, useState }  from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import moment from "moment";
import './FetchData.css';
const FetchData = ({cat}) => {
  const [Data, setData] = useState("")
  const [nextPage, setNextPage] = useState("null");
   const handleClick = () => {
     Data.nextPage ? setNextPage(Data.nextPage) : setNextPage(null);
   };
    
    const fetchData = async () =>{
    await axios
      .get(
        cat
          ? `https://newsdata.io/api/1/news?apikey=pub_18122eba97267e9e8e50bb5282a9911d37391&language=en&category=${cat}&country=in&page=${nextPage}`
          : `https://newsdata.io/api/1/news?apikey=pub_18122eba97267e9e8e50bb5282a9911d37391&language=en&&category=top&country=in&page=${nextPage}`
      )
      .then((res) => setData(res.data));
  };

  useEffect(() => {
    fetchData();
    window.scrollTo(0, 0);
  }, [cat, nextPage]);
  
  return (
    <div className="container my-4">
      <h3>
        <u>{cat ? `TOP ${cat.toUpperCase()} HEADLINES` : "TOP HEADLINES"}</u>
      </h3>
      <div className="my-2 row">
        {Data
          ? Data.results.map((items, index) => (
              <>
                <div
                  className="container my-4 p-4 col-md-10"
                  style={{
                    width: "800px",
                    boxShadow: "3px 3px 10px silver",
                    borderRadius: "20px",
                  }}
                >
                  <h5 className="my-1 col-md-10"> {items.title}</h5>
                  <div>
                    <img
                      src={
                        items.image_url
                          ? items.image_url
                          : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOoiis2FsTZo0uN6q5mUd9nODAcpX8dUTfTpladKkp-mmipH_7kX--R-rIKJXD-gCm58g&usqp=CAU"
                      }
                      className="img-fluid col-md-10"
                      style={{
                        width: "100%",
                        height: "300px",
                        objectFit: "cover",
                      }}
                    />
                  </div>

                  <p className="my-1 col-md-10">
                    {items.content
                      ? items.content.substring(
                          0,
                          Math.min(items.content.length, 500)
                        )
                      : "We apologize, the full article description is currently unavailable. Please click on the View More button to see the full article."}
                  </p>
                  <a href={items.link} target="blank">
                    Read More
                  </a>
                </div>
              </>
            ))
          : "Loading..."}
      </div>
      <div className="d-flex justify-content-center mt-5">
        <button
          onClick={handleClick}
          className="btn-custom"
        >
          Show More
        </button>
      </div>
    </div>
  );
}

export default FetchData