import React, { useState, useEffect } from 'react'
import './App.css';
import Header from './components/ui/Header';
import axios from 'axios';
import Chargrid from './components/ui/Chargrid'
import Search from './components/ui/Search'




function App() {
  const [items, setItems] = useState([]);
  const [loading, setLoading]  = useState(true);
  const [query, setQuery] = useState('');

  useEffect( () => {
    const fetchItems = async () => {
      const results = await axios.get(`https://www.breakingbadapi.com/api/characters?name=${query}`);
      setItems(results.data);
      // console.log(results.data);
      setLoading(false);
    }
    
    fetchItems();
  }, [query])


    return (
        <div className="App">
            <Header />
            <Search getQuery={(query) => setQuery(query)} />
            <Chargrid isLoading={loading} items={items} />

        </div>
  );
}

export default App;
