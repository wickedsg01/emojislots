import React from 'react';
import './App.css';

function TokenomicsContent() {
    return (
        <div className='content-box'>
            <h1 style={{ color: '#ffd900' }}>Tokenomics</h1>
            
            <p className='second'>
            The <span style={{ color: 'gold' }}>$EMOSLOTS</span> ecosystem is designed with a transparent and balanced token distribution to ensure the sustainability and growth of our community.
            </p>

            <h2 style={{ 'text-decoration': 'underline' }} className='second'>Token Supply</h2>

            <p className='second'>
            1,000,000,000
            </p>
            
            <h2 style={{ 'text-decoration': 'underline' }} className='second'>Token Distribution</h2>
            
            <div className='chart-container'>
            {/* Bar chart */}
            <div className='bar-chart'>
                <div className='bar jackpot1' style={{ width: '4%' }}></div>
                <div className='bar marketing' style={{ width: '8%' }}></div>
                <div className='bar liquidity' style={{ width: '88%' }}></div>
            </div>
            
            <div className='legend'>
                <div className='legend-item'>
                    <div className='legend-color' style={{ backgroundColor: '#00cc44' }}></div>
                    Weekly Jackpot Prize Pool (4%)
                </div>
                <div className='legend-item'>
                    <div className='legend-color' style={{ backgroundColor: '#ff8800' }}></div>
                    Marketing/KOL (8%)
                </div>
                <div className='legend-item'>
                    <div className='legend-color' style={{ backgroundColor: '#00aaff' }}></div>
                    Liquidity Pool (88%)
                </div>
            </div>
            
            <p>
            Our token distribution includes 8% allocated to the Marketing Wallet and KOL initiatives to promote widespread adoption. The Liquidity Pool receives 88% to ensure the stability and liquidity of $EMOSLOTS. Additionally, a weekly jackpot prize pool of 4% rewards our dedicated players.
            </p>
            </div>
        </div>
      );
}

export default TokenomicsContent;