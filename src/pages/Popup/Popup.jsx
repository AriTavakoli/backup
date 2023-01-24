import React from 'react';
import logo from '../../assets/img/logo.svg';
import Greetings from '../../containers/Greetings/Greetings';
import './Popup.css';
import { useEffect, useState } from 'react';


const Popup = () => {

  const [data, setData] = useState({});

  useEffect(() => {
    const port = chrome.runtime.connect({ name: "myConnectionName" });
    port.postMessage({ message: "Hello from the popup!" });

    port.onMessage.addListener(function (msg) {
      console.log("Message received from background script: ", msg);
      setData(msg);
    }
    );


  }, []);



  return (
    <div>
      <p>Data received from the background script: {data.message}</p>
    </div>
  );
}

export default Popup;
