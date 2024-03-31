import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import MainPage from './components/mainpage/MainPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SearchVideo from './components/searchvideo/SearchVideo';
import HomepageLoader from './components/skeleton/HomepageLoader';
// AIzaSyCteN4uEdbLPT_si3j7SqAQZxGMiX87n2Q
// AIzaSyD7NYpOdzP1iV81abn1rsxfvCpANASIops
function App() {

  const [randomVideo, setRandomVideo] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const API_KEY = 'AIzaSyCtC8o0HZ4cJi4Tv5-ntpwGm1a_D9Iy1Ps'; // Replace with your YouTube Data API key

        // You can use a predefined set of search terms for randomness
        const searchTerms = ['web development using react'];

        // Select a random search term from the array
        const randomTerm = searchTerms[Math.floor(Math.random() * searchTerms.length)];

        const response = await fetch(`https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&q=${randomTerm}&part=snippet,id&order=date&maxResults=10`);

        if (!response.ok) {
          throw new Error('Failed to fetch random video');
        }

        const data = await response.json();

        // Set the first video from the search results as the random video
        if (data.items.length > 0) {
          setRandomVideo(data.items);
          console.log(data.items);
        }
      } catch (error) {
        console.error('Error fetching random video:', error);
      }
    };

    fetchData();
  }, []); // Run only once on component mount

  const menuClicked = (e) => {
    console.log(e);
  }

  const searchTerm = (e) => {
    console.log("Logging", e);
  }
  return (
    <div className="App">

      <BrowserRouter>
        <Header setMenuClicked={menuClicked} setSearch={searchTerm} />
        <div style={{ padding: '30px' }}></div>
        <Routes>
          <Route path="/" element={
            <>
              <div style={{ display: 'flex' }}>
                <Sidebar />
                {randomVideo ? <MainPage videoData={randomVideo} /> : <HomepageLoader />}

              </div>
            </>

          } />

          <Route path="/search/:searchterm" element={
            <div style={{ display: 'flex' }}>
              <Sidebar />
              <SearchVideo />
            </div>
          } />



        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
