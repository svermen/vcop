import React, { Component } from 'react'
import vcop from '../vcop.png'
import detectEthereumProvider from '@metamask/detect-provider'

class Navbar extends Component {

  render() {
    const configurePolygon = async () => {
      const provider = await detectEthereumProvider({
        mustBeMetaMask: true
      })
      if (provider) {
        try {
          await provider.request({ method: 'eth_requestAccounts'})
          await provider.request({
            method: 'wallet_addEthereumChain',
            params: [{
              chainId: '0x89', // Moonbase Alpha's chainId is 1287, which is 0x507 in hex
              chainName: 'Polygon Mainnet',
              nativeCurrency: {
                name: 'MATIC',
                symbol: 'MATIC',
                decimals: 18
               },
              rpcUrls: ['https://rpc-mainnet.maticvigil.com/'],
              blockExplorerUrls: ['https://explorer.matic.network/']
            }]
          })
        } catch(e) {
          console.error(e);
        }  
      } else {
        console.error('Please install MetaMask');
      }
    
    }
    return (
      <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
        <a
          className="navbar-brand col-sm-3 col-md-2 mr-0"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={vcop} width="60" height="30" className="d-inline-block align-top" alt="" />
         
          
            <a className="block py-2 pl-3 pr-4 text-2xl font-bold text-base border-b border-gray-100 hover:bg-gray-50 cursor-pointer md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">
              Staking
            </a>
          
            <a className="block py-2 pl-3 pr-4 text-2xl font-bold text-base border-b border-gray-100 hover:bg-gray-50 cursor-pointer md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">
              Docs
            </a>

            <a className="block py-2 pl-3 pr-4 text-2xl font-bold text-base border-b border-gray-100 hover:bg-gray-50 cursor-pointer md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">
              Govern
            </a>
       
        </a>

        {/* <ul className="navbar-nav px-3">
          <li className="nav-item text-nowrap d-none d-sm-none d-sm-block">
            <small className="text-secondary">
              <small id="account">{this.props.account}</small>
            </small>
          </li>
        </ul> */}
        <button onClick={configurePolygon()}>Connect to Polygon</button>
      </nav>
    );
  }
}

export default Navbar;
