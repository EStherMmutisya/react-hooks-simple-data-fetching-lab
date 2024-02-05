// App.js
import React, { useState, useEffect } from 'react';

const App = () => {
  const [dogImageUrl, setDogImageUrl] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDogImage = async () => {
      try {
        const response = await fetch('https://dog.ceo/api/breeds/image/random');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setDogImageUrl(data.message);
      } catch (error) {
        console.error('Error fetching dog image:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchDogImage();
  }, []);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <h1>Random Dog Image</h1>
          <img src={dogImageUrl} alt="A Random Dog" />
        </>
      )}
    </div>
  );
};

export default App;
