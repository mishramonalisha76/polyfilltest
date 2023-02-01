import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { WagmiConfig, createClient } from 'wagmi'
import { getDefaultProvider } from 'ethers'
import reportWebVitals from './reportWebVitals';

const client = createClient({
  autoConnect: true,
  provider: getDefaultProvider(),
})
ReactDOM.render(
  <WagmiConfig client={client}>
  <App />
  </WagmiConfig>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
