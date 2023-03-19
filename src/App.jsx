import { useEffect } from 'react';
import './index.scss'

function App() {

  useEffect();
  return (
    useEffect(() => {
      const fetchData = async () => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
        const newData = await response.json();

        console.log(newData.title);
      };
      fetchData();
    }, [])
  );
}

export default App;
