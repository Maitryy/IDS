import React, { useState } from "react";
import "./LandingPage.css";
import axios from "axios";
import { useNavigate, useHistory } from "react-router-dom";
import Form from "./Form.js";
import ShowPosts from "./ShowPosts.js";
import "./ShowPosts.css";
import "./form.css";
import CSVReader from "react-csv-reader";

const LandingPage = ({ account }) => {
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
        history.push("/");

      }
    } catch (err) {
      console.error(err);
    }
  }
  return (
    <div className="landingPage">
      {/* <h4> {"Connection to MetaMask using window.ethereum methods"} </h4>
			<button onClick={connectWalletHandler}>{connButtonText}</button>
			<div className='accountDisplay'>
				<h3>Address: {defaultAccount}</h3>
			</div>
			<div className='balanceDisplay'>
				<h3>Balance: {userBalance}</h3>
			</div>
			{errorMessage} */}
      <div id="root"></div>

      <header className="l-header">
        <nav className="nav bd-grid">
          <div className="nav__toggle" id="nav-toggle">
            <i className="bx bx-menu"></i>
          </div>

          <div className="nav__menu" id="nav-menu">
            <div className="nav__close" id="nav-close">
              <i className="bx bx-x"></i>
            </div>

            <ul className="nav__list">
              {/* <button  className='home__button' onClick={connectWalletHandler}>{connButtonText}</button> */}
              {/* <button className='home__button' >{account}</button> */}
            </ul>
            <div>
              <a href="#" className="nav__logo">
                Account No: {account}{" "}
              </a>
            </div>
          </div>
        </nav>
      </header>

      <section id="contact">
        <div class="contact-box">
          <div class="contact-links">
            <h2>INCENTIVISED DATA SHARING </h2>
            <br />
            <br />
            
            <div className="links">
              <div className="link">
                <a>
                  <img
                    src="https://i.postimg.cc/m2mg2Hjm/linkedin.png"
                    alt="linkedin"
                  />
                </a>
              </div>
              <div className="link">
                <a>
                  <img
                    src="https://i.postimg.cc/YCV2QBJg/github.png"
                    alt="github"
                  />
                </a>
              </div>
              <div className="link">
                <a>
                  <img
                    src="https://i.postimg.cc/W4Znvrry/codepen.png"
                    alt="codepen"
                  />
                </a>
              </div>
              <div className="link">
                <a>
                  <img
                    src="https://i.postimg.cc/NjLfyjPB/email.png"
                    alt="email"
                  />
                </a>
              </div>
            </div>
          </div>

          <div className="contact-form-wrapper">
            {/* <Form /> */}
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

          </div>
        </div>
      </section>

      <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/gsap.min.js"></script>

      <script src="assets/js/main.js"></script>
    </div>
  );
};

export default LandingPage;
