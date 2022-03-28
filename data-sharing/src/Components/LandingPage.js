import React, { useState } from "react";
import "./LandingPage.css";
import CSVReader from "react-csv-reader";
import img from "./img.svg";
import Form from "./Form.js";
// import "./form.css";
import ShowPosts from "./ShowPosts.js";

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

      <main className="l-main">
        <section className="home" id="home">
          <div className="home__container bd-grid">
            <div className="home__img">
              <img src={img} alt="" data-speed="-2" className="move" />
            </div>

            <div className="home__data">
              <h1 className="home__title">
                Incentivised <br />
                Data Sharing <br />
              </h1>
              <div className="home__button">
                <CSVReader
                  onFileLoaded={(data, fileInfo, originalFile) =>
                    console.dir(data.toString())
                  }
                />
              </div>

              <Form />
            </div>
          </div>
          <ShowPosts />
        </section>
        
      </main>

      <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/gsap.min.js"></script>

      <script src="assets/js/main.js"></script>
    </div>
  );
};

export default LandingPage;
