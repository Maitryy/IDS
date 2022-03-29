import React, { Component } from 'react'
import Web3 from 'web3'
import './App.css'
import Form from './Components/Form.js';
import LandingPage from './Components/LandingPage';
import ShowPosts from './Components/ShowPosts.js';
const web3 = new Web3(Web3.givenProvider || "http://localhost:8545");

class App extends Component {
  componentWillMount() {
    this.loadBlockchainData()
  }

  createFile(_file) {
    var id = 0;
    var file = _file;
    var row = 17, col = 3;
    var rowCost = 1, colCost = 1;
    this.state.dataShare.methods.addFile(id, file, row, col, rowCost, colCost).send({ from: this.state.account });
  }

  buyFile() {
    
    var id = 0;
    var fromRow = 0, toRow = 1;
    var columnNo = [0, 1];
    this.state.dataShare.methods.buyFile(id, fromRow, toRow, columnNo).send({ from: this.state.account, value: web3.utils.toWei('1', 'eth') });
  }

  async loadBlockchainData() {
    
    const accounts = await web3.eth.getAccounts()
    this.setState({ account: accounts[0] })
  }

  constructor(props) {
    super(props)
    this.state = { account: '' }
  }

  render() {
    return (
      <div className="container">
        <h1>Hello, World!</h1>  
        {/* <p>Your account: {this.state.account}</p> */}
        <LandingPage account = {this.state.account}/>
        <ShowPosts/>
      </div>
    );
  }
}

export default App;