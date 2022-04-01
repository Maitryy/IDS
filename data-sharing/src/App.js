import React, { Component } from 'react'
import Web3 from 'web3'
import './App.css'
import LandingPage from './Components/LandingPage';
import ShowPosts from './Components/ShowPosts.js';
import DataShare from "./abis/DataShare.json";
import detectEthereumProvider from '@metamask/detect-provider';


class App extends Component {
 async componentWillMount() {
    // await this.loadWeb3()
    await this.loadBlockchainData()

  
  }
  // async loadWeb3() {
  //   if (window.ethereum) {
  //     window.web3 = new Web3(window.ethereum)
  //     await window.ethereum.enable()
  //   }
  //   else if (window.web3) {
  //     window.web3 = new Web3(window.web3.currentProvider)
  //   }
  //   else {
  //     window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!')
  //   }
  // }

  createFile(_id, _file, row, col) {
    const rowCost = 10, colCost = 10;
    this.state.dataShare.methods.addFile(_id, _file, row, col, rowCost, colCost).send({ from: this.state.account });
  }

  async buyFile(_id, row, col) {
    console.log(_id);
    var fromRow = 0, toRow = row;
    var columnNo = [];
    for (var i = 0; i < col; ++i)  columnNo.push(i);
    var receipt = await this.state.dataShare.methods.buyFile(_id, fromRow, toRow, columnNo).send({ from: this.state.account, value: 2000000000000000000 });
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
 
  // async loadBlockchainData() {
  //   const provider = await detectEthereumProvider()
    
  //   if (provider) {
  //     console.log('Ethereum successfully detected!')
  //     const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
  //     this.setState({ account: accounts[0] });
  //     // From now on, this should always be true:
  //     // provider === window.ethereum
    
  //     // Access the decentralized web!
    
  //     // Legacy providers may only have ethereum.sendAsync
  //     // const networkId = await provider.request({
  //     //   method: 'eth_chainId'
  //     // })
  //     const networkId = await provider.eth.net.getId();
  //     const networkData = DataShare.networks[networkId];
  //     if (networkData) {
  //           const dataShare = new provider.eth.Contract(DataShare.abi, networkData.address);
  //           this.setState({ dataShare });
  //         } else {
  //           window.alert(" contract not deployed!");
  //         }
  //   } else {
  //     // if the provider is not detected, detectEthereumProvider resolves to null
  //     console.error('Please install MetaMask!' )
  //   }
  //   }

  // async loadBlockchainData() {
  //   const web3 = window.web3
  //   // Load account
  //   const accounts = await web3.eth.getAccounts()
  //   this.setState({ account: accounts[0] })
  //   const networkId = await web3.eth.net.getId()
  //   const networkData = DataShare.networks[networkId];
  //   if (networkData) 
  //   {
  //               const dataShare = new web3.eth.Contract(DataShare.abi, networkData.address);
  //               this.setState({ dataShare });
  //   }
  //    else 
  //    {
  //               window.alert(" contract not deployed!");
  //    }

  //   // else 
  //   // {
  //   //   window.alert('Marketplace contract not deployed to detected network.')
  //   // }
  // }
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