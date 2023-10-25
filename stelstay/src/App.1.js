import { useEffect } from 'react';

export function App() {
  useEffect(() => client
    .collection("users").getFullList()
    .then(res), console.log(res));
}
