import React from 'react'
import './mainpage.css'

function MainPage({ videoData }) {
    console.log("mainpage", videoData);

    return (
        <div style={{ width: '95%' }} className='omietube__mainpage'>
            <div className='tagsdiv'>
                <span className='active'>All</span>
                <span>Music</span>
                <span>Mixes</span>
                <span>Coding</span>
                <span>Data Structures and ALgorithms</span>
                <span>T-Series</span>
                <span>Arijit Singh</span>
                <span>Mixes</span>
                <span>Coding</span>
                <span>Data Structures and ALgorithms</span>
                <span>T-Series</span>
                <span>Arijit Singh</span>
            </div>
            <div style={{ padding: '20px' }}></div>

            <div className="video_container">

                {
                    videoData.map((e) => {
                        return (
                            <div className="video">
                                <img src={e.snippet.thumbnails.medium.url} className='video_thumbnail' alt="" />
                                <div className="video_details">
                                    <div className="channel_icon">
                                        <img src={e.snippet.thumbnails.medium.url} alt="" />
                                    </div>
                                    <div className="all_details">
                                        <h4>{e.snippet.title}</h4>
                                        <p>{e.snippet.channelTitle}</p>
                                        <p>{Math.floor(Math.random() * 10) + 1}k views | a month ago</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }

            </div>
        </div>
    )
}

export default MainPage