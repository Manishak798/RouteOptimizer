import React, { useState } from 'react';
import { searchOrders } from '../services/api';

interface SearchResult {
  _id: string;
  _source: {
    customerName: string;
    deliveryAddress: string;
  };
}

const SearchOrders: React.FC = () => {
  const [query, setQuery] = useState<string>('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async () => {
    try {
      const { data } = await searchOrders(query);
      setResults(data);
      setError(null); // Clear any previous errors
    } catch (error) {
      console.error('Error searching orders', error);
      setError('Failed to search orders. Please try again later.');
    }
  };

  return (
    <div>
      <h2>Search Orders</h2>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search by customer name or address"
      />
      <button onClick={handleSearch}>Search</button>
      {error && <p>{error}</p>}
      {results.length === 0 && !error ? (
        <p>No results found.</p>
      ) : (
        <ul>
          {results.map(result => (
            <li key={result._id}>
              {result._source.customerName} - {result._source.deliveryAddress}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchOrders;
