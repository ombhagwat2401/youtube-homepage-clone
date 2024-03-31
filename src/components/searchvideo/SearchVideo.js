import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, useParams } from 'react-router-dom';
import './searchvideo.css'

function SearchVideo() {

    const { searchterm } = useParams();
    const [randomVideo, setRandomVideo] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const API_KEY = 'AIzaSyCtC8o0HZ4cJi4Tv5-ntpwGm1a_D9Iy1Ps'; // Replace with your YouTube Data API key


                const response = await fetch(`https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&q=${searchterm}&part=snippet,id&order=date&maxResults=10`);

                if (!response.ok) {
                    throw new Error('Failed to fetch random video');
                }

                const data = await response.json();

                // Set the first video from the search results as the random video
                if (data.items.length > 0) {
                    setRandomVideo(data.items);
                    console.log("from search", data.items);
                }
            } catch (error) {
                console.error('Error fetching random video:', error);
            }
        };

        fetchData();
    }, []); // Run only once on component mount

    return (
        <div className='search_video_container'>






            {
                randomVideo ?
                    randomVideo.map((e) => {
                        return (
                            <div className="video">
                                <div className='video_cont'>
                                    <img src={e.snippet.thumbnails.medium.url} className='video_thumbnail' alt="" />
                                </div>

                                <div className="video_details">

                                    <div className="all_details">
                                        <h4>{e.snippet.title}</h4>
                                        <p>{Math.floor(Math.random() * 10)}k views | a month ago</p>
                                        <div style={{ display: 'flex' }}>
                                            <img src={e.snippet.thumbnails.medium.url} alt="" />
                                            <span>{e.snippet.channelTitle}</span>
                                        </div>

                                        <p>{e.snippet.description}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    }) : <> <div className="loading_video">
                        <div className='video_cont'>
                            <div className='video_thumbnail'></div>
                        </div>

                        <div className="video_details">

                            <div className="all_details">
                                <div className="h4"></div>
                                <p>.</p>
                                <div style={{ display: 'flex' }}>
                                    <div className="img"></div>
                                    <span>.</span>
                                </div>

                                <p>.</p>
                                <p>.</p>
                            </div>
                        </div>
                    </div>

                        <div className="loading_video">
                            <div className='video_cont'>
                                <div className='video_thumbnail'></div>
                            </div>

                            <div className="video_details">

                                <div className="all_details">
                                    <div className="h4"></div>
                                    <p>.</p>
                                    <div style={{ display: 'flex' }}>
                                        <div className="img"></div>
                                        <span>.</span>
                                    </div>

                                    <p>.</p>
                                    <p>.</p>
                                </div>
                            </div>
                        </div>

                        <div className="loading_video">
                            <div className='video_cont'>
                                <div className='video_thumbnail'></div>
                            </div>

                            <div className="video_details">

                                <div className="all_details">
                                    <div className="h4"></div>
                                    <p>.</p>
                                    <div style={{ display: 'flex' }}>
                                        <div className="img"></div>
                                        <span>.</span>
                                    </div>

                                    <p>.</p>
                                    <p>.</p>
                                </div>
                            </div>
                        </div>

                        <div className="loading_video">
                            <div className='video_cont'>
                                <div className='video_thumbnail'></div>
                            </div>

                            <div className="video_details">

                                <div className="all_details">
                                    <div className="h4"></div>
                                    <p>.</p>
                                    <div style={{ display: 'flex' }}>
                                        <div className="img"></div>
                                        <span>.</span>
                                    </div>

                                    <p>.</p>
                                    <p>.</p>
                                </div>
                            </div>
                        </div>







                        <div className="loading_video">
                            <div className='video_cont'>
                                <div className='video_thumbnail'></div>
                            </div>

                            <div className="video_details">

                                <div className="all_details">
                                    <div className="h4"></div>
                                    <p>.</p>
                                    <div style={{ display: 'flex' }}>
                                        <div className="img"></div>
                                        <span>.</span>
                                    </div>

                                    <p>.</p>
                                    <p>.</p>
                                </div>
                            </div>
                        </div>

                    </>


            }



        </div>
    )
}

export default SearchVideo