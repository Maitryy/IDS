import React, { Component } from 'react'
import Web3 from 'web3'
import './App.css'
import LandingPage from './Components/LandingPage';
import ShowPosts from './Components/ShowPosts.js';
import DataShare from "./abis/DataShare.json";

class App extends Component {
  componentWillMount() {
    this.loadBlockchainData()
  }

  createFile(_id, _file, row, col) {
    const rowCost = 10, colCost = 10;
    this.state.dataShare.methods.addFile(_id, _file, row, col, rowCost, colCost).send({ from: this.state.account });
  }

  async buyFile(_id, row, col) {
    console.log(_id);
    var fromRow = 0, toRow = row;
    var columnNo = [];
    for (var i = 0; i < col; ++i)  columnNo.push(i);
    var receipt = await this.state.dataShare.methods.buyFile(_id, fromRow, toRow, columnNo).send({ from: this.state.account, value: 1000000000000000000 });
    console.log(JSON.stringify(receipt.events.purchase.returnValues, undefined, 4));
    var result = receipt.events.purchase.returnValues[0].join(",");
    var hiddenElement = document.createElement('a');
    hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(result);
    hiddenElement.target = '_blank';

    //provide the name for the CSV file to be downloaded  
    hiddenElement.download = 'chalo hogya.csv';
    hiddenElement.click();
  }

  async loadBlockchainData() {
    const web3 = new Web3(Web3.givenProvider || "http://localhost:8545");
    const accounts = await web3.eth.getAccounts();
    this.setState({ account: accounts[0] });
    const networkId = await web3.eth.net.getId();
    const networkData = DataShare.networks[networkId];
    if (networkData) {
      const dataShare = new web3.eth.Contract(DataShare.abi, networkData.address);
      this.setState({ dataShare });
    } else {
      window.alert("Marketplace contract not deployed!");
    }
  }

  constructor(props) {
    super(props);
    this.state = { account: '', files: [] };
    this.createFile = this.createFile.bind(this);
    this.buyFile = this.buyFile.bind(this);
  }

  render() {
    return (
      <div className="container">
        <LandingPage account={this.state.account} createFile={this.createFile} />
        <ShowPosts account={this.state.account} buyFile={this.buyFile} />
      </div>
    );
  }
}

export default App;