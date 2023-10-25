import React from 'react';
import {client} from './Library/pocketbase'

export default function User() {
    useEffect(() => {
        // Use the useEffect callback function to fetch data and handle the response
        client.collection("users").getFullList()
          .then(res => {
            console.log(res); 
          })
          .catch(error => {
            console.error("Error fetching data:", error);
          });
      }, []); // 
    
  return (
    <div>
      <h2>User</h2>
    </div>
  );
}
