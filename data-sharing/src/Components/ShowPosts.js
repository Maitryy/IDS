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
      setData(data);
    }
    fetchData();
  }, []);

  function showText(toggleText) {
    toggleText.classList.toggle("active");
  }

  return (
    <div>
      <br />
      <br />
      <div className="one container">
        <h1>Posts Available..</h1>
      </div>
      <div className="row row-cols-3">
        {data.map((post, i) => {
          var options = post.col_title.split(",");
          const options_idx = new Map();

          for (var i = 0; i < options.length; i++) {
            options_idx.set(options[i], i);
          }

          var selected_idx = [];
          var selected_options = [];
          var selected_rows;

          return (
            <div className="col-lg-4 col-md-6 col-sm-12 col-12">
              <div className="category-name"></div>
              <div className="card-category-1">
                <div className="basic-card basic-card-aqua">
                  <div className="card-content">
                    <strong>
                      <span className="card-title">{post.title}</span>
                    </strong>
                    <p className="card-text">
                      Description : {post.description}
                    </p>
                    <a href="#" title="Read Full">
                      <span>Keywords: {post.keywords}</span>
                    </a>
                  </div>

                  <div className="card-link">
                    <table>
                      <tr>
                        <th>
                          <label for="colss" style={{ color: "white" }}>
                            Columns available :{post.row}
                          </label>
                          <br />

                          <select
                            name="cars"
                            id="cars"
                            multiple
                            onChange={(e) => {
                              selected_options = [...e.target.selectedOptions];
                            }}
                          >
                              {options.map((name) => {
                                return <option name={name}>{name}</option>;
                              })}
                          </select>
                        </th>
                        <th>
                          <label for="rowss" style={{ color: "white" }}>
                            Rows available :{post.row}
                          </label>
                          <br />
                          <input
                            type="number"
                            id="rows-selected"
                            onChange={(e) => {
                              selected_rows = e.target.value;
                            }}
                          />
                        </th>
                      </tr>
                    </table>
                  </div>

                  <div className="btn-center">
                    <button
                      className="button"
                      onClick={() => {
                        if (selected_rows > post.row) {
                          alert("enter rows again");
                          return;
                        } else if (selected_options.length == 0) {
                          alert("click columns again");
                          return;
                        } else {
                          // buyFile(post._id, post.row, post.col);
                          for (var i = 0; i < selected_options.length; i++) {
                            var s1 = selected_options[i].text;
                            var x = options_idx.get(s1);
                            selected_idx.push(x);
                          }

                          for (var i = 0; i < selected_idx.length; i++) {}
                        }
                      }}
                    >
                      {" "}
                      Buy Now!
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default ShowPosts;
