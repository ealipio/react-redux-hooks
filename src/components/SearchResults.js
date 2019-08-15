import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './style.css';

const SearchResults = () => {
  const [data, setData] = useState({ hits: [] });
  const [query, setQuery] = useState('hooks');

  useEffect(() => {
    let ignore = false;

    async function fetchData() {
      const result = await axios(
        `https://hn.algolia.com/api/v1/search?query=${query}`
      );
      if (!ignore) setData(result.data);
    }

    fetchData();
    return () => {
      ignore = true;
    };
  }, [query]);

  return (
    <React.Fragment>
      <input value={query} onChange={e => setQuery(e.target.value)} />
      <ul>
        {data.hits.map(item => (
          <li key={item.objectID}>
            <a href={item.url}>{item.title}</a>
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
};

export default SearchResults;
