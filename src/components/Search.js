import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('programming');
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState(searchTerm);
  const [results, setResults] = useState([]);

  // debounce action
  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 1000);

    return () => {
      clearTimeout(timerId);
    };
  }, [searchTerm]);

  useEffect(() => {
    async function searchWiki() {
      const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
        params: {
          action: 'query',
          list: 'search',
          origin: '*',
          format: 'json',
          srsearch: debouncedSearchTerm,
        },
      });
      setResults(data.query.search);
    }

    if (debouncedSearchTerm) {
      searchWiki();
    }
  }, [debouncedSearchTerm]);

  const renderedResults = results.map((result) => {
    return (
      <div key={result.pageid} className="item">
        <div className="right floated content">
          <a
            href={`https://en.wikipedia.org/?curid=${result.pageid}`}
            className="ui button"
            target="_blank"
            rel="noreferrer"
          >
            GO
          </a>
        </div>
        <div className="content">
          <div className="header">{result.title}</div>
        </div>
        <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
      </div>
    );
  });

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter search term</label>
          <input
            type="text"
            className="input"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
          />
        </div>
      </div>
      <div className="ui celled list">{renderedResults}</div>
    </div>
  );
};

export default Search;
