/*
import { useEffect } from 'react';
import {client} from "./Library/pocketbase";

export function App() {
  useEffect(() => client
    .collection("users").getFullList()
    .then(res), console.log(res));
},[]);

return
<div>HELLO</div>;

*/

import React, { useEffect, useState } from 'react';
import { client } from "./Library/pocketbase";

export default function App() {
  useEffect(() => {
    // Use the useEffect callback function to fetch data and handle the response
    client.collection("users").getFullList()
      .then(res => {
        console.log(res); // Log the response data
        // You can set the data in state if you want to render it in your component
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }, []); // The empty dependency array means this effect runs only once when the component mounts.

  return (
    <div>
      <p>HELLO</p>
      {/* You can render data fetched from Pocketbase here */}
    </div>
  );
}
