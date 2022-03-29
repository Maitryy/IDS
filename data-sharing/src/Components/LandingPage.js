import React, { useState } from "react";
import "./LandingPage.css";

import img from "./img.svg";
import Form from "./Form.js";
import ShowPosts from "./ShowPosts.js";
import "./ShowPosts.css";

const LandingPage = ({ account }) => {
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
            <Form />
          </div>
        </div>
      </section>

      <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/gsap.min.js"></script>

      <script src="assets/js/main.js"></script>
    </div>
  );
};

export default LandingPage;
