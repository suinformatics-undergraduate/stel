import { useEffect } from 'react';
import {client} from "./Library/pocketbase";

export function App() {
  useEffect(() => client
    .collection("users").getFullList()
    .then(res), console.log(res));
},[]);
return
<div>HELLO</div>;

