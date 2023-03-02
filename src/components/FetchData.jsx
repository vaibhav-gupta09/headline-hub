import React ,{ useEffect, useState }  from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import moment from "moment";
const FetchData = ({cat}) => {
  const [Data, setData] = useState("")

  const twoWeeksAgo = new Date();
  twoWeeksAgo.setDate(twoWeeksAgo.getDate()-7);
  const formattedDate = moment(twoWeeksAgo).format("MMM D, YYYY");
  
  const fetchData = async () =>{
    await axios
      .get(
        // cat
        //   ? `https://newsapi.org/v2/everything?q=${cat}&from=${formattedDate}&apiKey=0a7d305660b04bab8280625c56414261`
        //   : "https://newsapi.org/v2/everything?q=general&apiKey=0a7d305660b04bab8280625c56414261"
        cat
          ? `https://newsdata.io/api/1/news?apikey=pub_18122eba97267e9e8e50bb5282a9911d37391&language=en&category=${cat}&country=in`
          : "https://newsdata.io/api/1/news?apikey=pub_18122eba97267e9e8e50bb5282a9911d37391&language=en&&category=top&country=in"
      )
      // .then((res) => console.log(res));
      .then((res) => setData(res.data.results));
  };

  useEffect(() => {
    fetchData();
  }, [cat]);
  
  return (
    <div className="container my-4">
      <h3>
        <u>{cat ? `TOP ${cat.toUpperCase()} HEADLINES` : "TOP HEADLINES"}</u>
      </h3>
      <div className="my-2 row">
        {Data
          ? Data.map((items, index) => (
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
                      // alt="image not found"
                      // onError={(e) => {
                      //   e.target.onerror = null; // to prevent an infinite loop of fallbacks
                      //   e.target.src =
                      //     "https://englishtribuneimages.blob.core.windows.net/gallary-content/2023/3/2023_3$largeimg_1889805422.jpg"; // replace the image with the alternate one
                      // }}
                      className="img-fluid col-md-10"
                      style={{
                        width: "100%",
                        height: "300px",
                        objectFit: "cover",
                      }}
                    />
                  </div>

                  <p className="my-1 col-md-10">
                    {items.description.substring(0, 500)}
                  </p>
                  <a href={items.link} target="blank">
                    view more
                  </a>
                </div>
              </>
            ))
          : "Loading..."}
      </div>
      
    </div>
    // <div>news</div>
  );
}

export default FetchData