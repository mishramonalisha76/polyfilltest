import React, { useEffect } from 'react';
import logo from './logo.svg';
import { Chat } from '@pushprotocol/uiweb';
import * as PushApi from '@pushprotocol/restapi';

import { useAccount, useConnect, useDisconnect } from 'wagmi'
import { InjectedConnector } from 'wagmi/connectors/injected'
import './App.css';


function App() {
  
  const { address, isConnected } = useAccount()
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  })
  const getUser = async() =>{
    // const response = await PushApi.user.get({
    //   account: address!,
    //   env:'staging',
    // });
    // console.log(response)
  }
  // useEffect(() => {
  //   getUser();
  // });
  return (
   
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={() => getUser()}>Get user</button>
        <button onClick={() => connect()}>Connect Wallet</button>
      </header>
     
      <Chat
      account = {address!}
      supportAddress = "0x1aA3127b831a33830Ac0fE3ee4B0741d1A4a4E04"
      env = 'staging'
      apiKey="tAWEnggQ9Z.UaDBNjrvlJZx3giBTIQDcT8bKQo1O1518uF1Tea7rPwfzXv2ouV5rX9ViwgJUrXm"

      />
    </div>
  );
}

export default App;
