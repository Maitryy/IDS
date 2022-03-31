import axios from "axios";
import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import "./ShowPosts.css";
import "./form.css";
const ShowPosts = ({ account, buyFile }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("http://localhost:5000/route/getAllPosts");
      var data = await response.json();
      console.log(data);
      setData(data);
    }
    fetchData();
  }, []);

  function showText(toggleText) {
    toggleText.classList.toggle("active");
  }
  return (
    <div >
      <br />
      <br />
      <div className="one container">
        <h1 >Posts Available..</h1>
      </div>
      <div className="row row-cols-3">
        {data.map((post, i) => {
          return (
            <div className="col-lg-4 col-md-6 col-sm-12 col-12">
              <div className="category-name"></div>
              <div className="card-category-1">
                <div className="basic-card basic-card-aqua">
                  <div className="card-content">
                    <strong>
                      <span className="card-title">{post.title}</span>
                    </strong>
                    <p className="card-text">{post.description}</p>
                  </div>
                  <div className="card-link">
                    <a href="#" title="Read Full"><span>{post.keywords}</span></a>
                  </div>
                  <div className="btn-center">
                    <button className="button" onClick={() => {
                      buyFile(post._id, post.row, post.col);
                    }}> Buy Now!</button>
                  </div>
                </div>
<<<<<<< Updated upstream
              </div>
=======

                <div className="card-link">
                    <a href="#" title="Read Full"><span>{post.keyword}</span></a>
                </div>
                
                <div className="btn-center">
                <form action="#">
      <label for="rows">Rows</label>
      const k = parseInt({post.row});
     
      <input type="submit" value="Submit" />
</form>
         
        </div>
            </div>
            </div>
>>>>>>> Stashed changes
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default ShowPosts;
