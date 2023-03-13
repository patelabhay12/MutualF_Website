import React from 'react';
import './market.css';

const Market = () => {
    return (
        <div className='market_main'>
            <div className="market_left">
                <h2>Market Views</h2>

                <div className="address_market">
                    <div className="child_address">
                        <span>Monthly Equity & Debt Outlook Presentation – July 2022.</span>
                        <p> 07-07-2022 03:45:11 PM</p>
                    </div>
                    <div className="child_address">
                        <span> RBI’s Monetary Policy | June 2022</span>
                        <p>09-06-2022 02:37:41 PM</p>
                    </div>
                    <div className="child_address">
                        <span>Market Outlook PPT</span>
                        <p>15-01-2022 01:33:40 PM</p>
                    </div>
                </div>
            </div>
            <div className="market_right">
                <div className='videos'>
                    <iframe src='https://www.youtube.com/embed/E7wJTI-1dvQ'
                        frameborder='0'
                        allow='autoplay; encrypted-media'
                        allowfullscreen
                        title='video'
                    />
                    <span>Equity Market Outlook - December 2022 Mr. Pankaj Tibrewal</span>
                    <p>08/12/2022 12:52:21</p>
                </div>
                <div className='videos'>
                    <iframe src='https://www.youtube.com/embed/E7wJTI-1dvQ'
                        frameborder='0'
                        allow='autoplay; encrypted-media'
                        allowfullscreen
                        title='video'
                    />
                    <span>Equity Market Outlook - December 2022 Mr. Pankaj Tibrewal</span>
                    <p>08/12/2022 12:52:21</p>
                </div>
                <div className='videos'>
                    <iframe src='https://www.youtube.com/embed/E7wJTI-1dvQ'
                        frameborder='0'
                        allow='autoplay; encrypted-media'
                        allowfullscreen
                        title='video'
                    />
                    <span>Equity Market Outlook - December 2022 Mr. Pankaj Tibrewal</span>
                    <p>08/12/2022 12:52:21</p>
                </div>
            </div>
        </div>
    )
}

export default Market;