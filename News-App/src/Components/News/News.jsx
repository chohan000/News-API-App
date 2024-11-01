import React, { useEffect, useState } from "react";

const News = () => {
  const [myNews, setMyNews] = useState([]);

  const fetchData = async () => {
    let response = await fetch(
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=55828845b5e64ab58b7b5932ef7d8160"
    );
    let data = await response.json();
    setMyNews(data.articles);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="mt-5 container d-flex flex-wrap justify-content-evenly align-items-center">
        {myNews.map((show) => {
          return (
            <>
              <div>
                <div className="card m-3" style={{ width: "18rem" }}>
                  <img
                    src={show.urlToImage}
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">C{show.author}</h5>
                    <p className="card-text">{show.title}</p>
                    <a
                      href={show.url}
                      target="_blank"
                      className="btn btn-primary"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default News;
