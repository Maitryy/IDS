import React, { Component, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./form.css";
import CSVReader from "react-csv-reader";
// class Form extends Component {
// render(){
const Form = () => {
  const [description, getDescription] = useState("");
  const [title, gettitle] = useState("");
  const [keyword, getkeyword] = useState("");
  const [row, getrow] = useState("");
  const [col, getcol] = useState("");

  const history = useNavigate();

  async function takeInfo(e) {
    e.preventDefault();

    try {
      const Post = {
        title,
        description,
        keyword,
        row,
        col,
      };

      const y = await axios.post("http://localhost:5000/route/posts", Post);
    
      if (y) {
        //history.push("/");

      }
    } catch (err) {
      console.error(err);
    }
  }
  return (
    <div className="form-item">
      <form onSubmit={takeInfo}>
        <div className="form-item">
          <label for="title">Title:</label>
          <input
            type="text"
            className="form-control"
            id="title"
            aria-describedby="emailHelp"
            onChange={(e) => gettitle(e.target.value)}
            value={title}
          />
        </div>
        <div className="form-item">
          <label for="description">Description</label>
          <textarea
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            onChange={(e) => getDescription(e.target.value)}
            value={description}
          />
        </div>
        <div className="form-item">
          <label for="keyword">Keyword</label>
          <textarea
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            onChange={(e) => getkeyword(e.target.value)}
            value={keyword}
          />
        </div>
        <div className="form-item">
          <label for="row">row</label>
          <textarea
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            onChange={(e) => getrow(e.target.value)}
            value={row}
          />
        </div>
        <div className="form-item">
          <label for="col">col</label>
          <textarea
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            onChange={(e) => getcol(e.target.value)}
            value={col}
          />
        </div>
        <div
          className="home__button add-csv-button"
        >
          <CSVReader
            onFileLoaded={(data, fileInfo, originalFile) =>
              console.dir(data.toString())
            }
          />
        </div>
        <div className="btn-center">
          <button type="submit" className="col-12 button">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
  // }
};
export default Form;
