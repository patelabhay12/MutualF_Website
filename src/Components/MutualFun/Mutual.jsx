import React from 'react';
import './mutual.css';
import IMG1 from '../../assets/Mutual-Fund1.png';
import IMG2 from '../../assets/Mutual-Fund2.png';

const Mutual = () => {
    return (
        <div className='about_main'>
            <div className="left_about">
                <img src={IMG1} alt="" />
                <img src={IMG2} alt="" />
            </div>
            <div className="right_about">
                <h1>Mutual Funds</h1>
                <span>The Definition

                    A mutual fund is nothing more than a collection of stocks and/or bonds. You can think of a mutual fund as a company that brings together a group of people and invests their money in stocks, bonds, and other securities. Each investor owns shares, which represent a portion of the holdings of the fund.

                    You can make money from a mutual fund in three ways:

                    1) Income is earned from dividends on stocks and interest on bonds. A fund pays out nearly all of the income it receives over the year to fund owners in the form of a distribution</span>
            </div>
        </div>
    )
}

export default Mutual;