import './App.css';
import React, {useState, useEffect} from 'react'
import AboutContent from './About';
import TokenomicsContent from './Tokenomics';

const App = ({id, owned, close, expires}) => {

    const [spin, setSpin] = useState(false)
    const [ring1, setRing1] = useState()
    const [ring2, setRing2] = useState()
    const [ring3, setRing3] = useState()
    const [price, setPrice] = useState()
    const [betAmount, setBetAmount] = useState(100);  // default to 100
    const [jackpot, setJackpot] = useState(0)
    const [balance, setBalance] = useState(500)
    const [aboutPage, setAboutPage] = useState(false);
    const [tokenomicsPage, setTokenomicsPage] = useState(false);

    useEffect(() => {
        win()
    }, [ring3])


 function row1() {

    if (!spin) {
    return (
        <>
        <div className="ringEnd">💎</div>
        <div className="ringEnd">🍑</div>
        <div className="ringEnd">🦄</div>
        <div className="ringEnd">🥒</div>
        </>
            )
    } else if (spin && ring1 === undefined) {
    return (
        <>
        <div className="ringMoving">💎</div>
        <div className="ringMoving">🍑</div>
        <div className="ringMoving">🦄</div>
        <div className="ringMoving">🌈</div>
        <div className="ringMoving">💩</div>
        <div className="ringMoving">🥒</div>
        </>
            )
    } else if (ring1 >= 1 && ring1 <= 50 ) {
    return (
        <>
        <div className="ringEnd">💎</div>
        <div className="ringEnd">🍑</div>
        <div className="ringEnd">🦄</div>
        <div className="ringEnd">🥒</div>
        </>
            )  
    } else if (ring1 > 50 && ring1 <= 75) {
        return (
            <>
            <div className="ringEnd">🍑</div>
            <div className="ringEnd">🦄</div>
            <div className="ringEnd">🥒</div>
            <div className="ringEnd">💎</div>
            </>
                )  
        } else if (ring1 > 75 && ring1 <= 95) {
            return (
                <>
                <div className="ringEnd">🦄</div>
                <div className="ringEnd">🥒</div>
                <div className="ringEnd">💎</div>
                <div className="ringEnd">🍑</div>
                </>
                    )  
            } else if (ring1 > 95 && ring1 <= 100) {
                return (
                    <>
                    <div className="ringEnd">🥒</div>
                    <div className="ringEnd">💎</div>
                    <div className="ringEnd">🍑</div>
                    <div className="ringEnd">🦄</div>
                    </>
                        )  
                }
 }

 function row2() {

    if (!spin) {
    return (
        <>
        <div className="ringEnd">🥒</div>
        <div className="ringEnd">💎</div>
        <div className="ringEnd">🍑</div>
        <div className="ringEnd">🦄</div>
        </>
            )
    } else if (spin && ring2 === undefined) {
    return (
        <>
        <div className="ringMoving">💎</div>
        <div className="ringMoving">🍑</div>
        <div className="ringMoving">🦄</div>
        <div className="ringMoving">🌈</div>
        <div className="ringMoving">💩</div>
        <div className="ringMoving">🥒</div>
        </>
            )
    } else if (ring2 >= 1 && ring2 <= 50 ) {
        return (
            <>
            <div className="ringEnd">💎</div>
            <div className="ringEnd">🍑</div>
            <div className="ringEnd">🦄</div>
            <div className="ringEnd">🥒</div>
            </>
                )  
        } else if (ring2 > 50 && ring2 <= 75) {
            return (
                <>
                <div className="ringEnd">🍑</div>
                <div className="ringEnd">🦄</div>
                <div className="ringEnd">🥒</div>
                <div className="ringEnd">💎</div>
                </>
                    )  
            } else if (ring2 > 75 && ring2 <= 95) {
                return (
                    <>
                    <div className="ringEnd">🦄</div>
                    <div className="ringEnd">🥒</div>
                    <div className="ringEnd">💎</div>
                    <div className="ringEnd">🍑</div>
                    </>
                        )  
                } else if (ring2 > 95 && ring2 <= 100) {
                    return (
                        <>
                        <div className="ringEnd">🥒</div>
                        <div className="ringEnd">💎</div>
                        <div className="ringEnd">🍑</div>
                        <div className="ringEnd">🦄</div>
                        </>
                            )  
                    }

 }

 function row3() {

    if (!spin) {
    return (
        <>
        <div className="ringEnd">🥒</div>
        <div className="ringEnd">💎</div>
        <div className="ringEnd">🍑</div>
        <div className="ringEnd">🦄</div>
        </>
            )
    } else if (spin && ring3 === undefined) {
    return (
        <>
        <div className="ringMoving">💎</div>
        <div className="ringMoving">🍑</div>
        <div className="ringMoving">🦄</div>
        <div className="ringMoving">🌈</div>
        <div className="ringMoving">💩</div>
        <div className="ringMoving">🥒</div>
        </>
            )
    } else if (ring3 >= 1 && ring3 <= 50 ) {
        return (
            <>
            <div className="ringEnd">💎</div>
            <div className="ringEnd">🍑</div>
            <div className="ringEnd">🦄</div>
            <div className="ringEnd">🥒</div>
            </>
                )  
        } else if (ring3 > 50 && ring3 <= 75) {
            return (
                <>
                <div className="ringEnd">🍑</div>
                <div className="ringEnd">🦄</div>
                <div className="ringEnd">🥒</div>
                <div className="ringEnd">💎</div>
                </>
                    )  
            } else if (ring3 > 75 && ring3 <= 95) {
                return (
                    <>
                    <div className="ringEnd">🦄</div>
                    <div className="ringEnd">🥒</div>
                    <div className="ringEnd">💎</div>
                    <div className="ringEnd">🍑</div>
                    </>
                        )  
                } else if (ring3 > 95 && ring3 <= 100) {
                    return (
                        <>
                        <div className="ringEnd">🥒</div>
                        <div className="ringEnd">💎</div>
                        <div className="ringEnd">🍑</div>
                        <div className="ringEnd">🦄</div>
                        </>
                            )  
                    }
     }


 function rand() {
      setRing1(Math.floor(Math.random() * (100 - 1) + 1))
      setTimeout(function(){setRing2(Math.floor(Math.random() * (100 - 1) + 1))}, 1000)
      setTimeout(function(){setRing3(Math.floor(Math.random() * (100 - 1) + 1))}, 2000)
    }

function play() {
    if (ring3 > 1 || !spin){
    if (betAmount <= balance){
    //setRealBet(input)
    setSpin(true)
    setRing1()
    setRing2()
    setRing3()
    setBalance(balance - betAmount)
    setJackpot(jackpot + (betAmount / 4))
    setTimeout(function(){
   rand()
    }, 2000)
} else {
    setPrice(10)
}

}
}


function win() {
    let wonAmount = 0;
    if (ring1 <= 50 && ring2 <= 50 && ring3 <= 50 && ring1 != undefined) {
        setPrice(1)
        wonAmount = betAmount * 15; // 15x the bet
        //setBalance(balance + (balance * 15))
    } else if (ring1 > 50 && ring1 <= 75 && ring2 > 50 && ring2 <= 75 && ring3 > 50 && ring3 <= 75 && ring1 != undefined) {
        setPrice(2)
        wonAmount = betAmount * 20; // 20x the bet
        //setBalance(balance + (balance * 20))
    } else if (ring1 > 75 && ring1 <= 95 && ring2 > 75 && ring2 <= 95 && ring3 > 75 && ring3 <= 95 && ring1 != undefined) {
        setPrice(3)
        wonAmount = betAmount * 25; // 25x the bet
        //setBalance(balance + (balance * 25))
    } else if (ring1 > 95 && ring1 <= 100 && ring2 > 95 && ring2 <= 100 && ring3 > 95 && ring3 <= 100 && ring1 != undefined) {
        setPrice(4)
        wonAmount = jackpot; // win the jackpot
        //setBalance(balance + jackpot)
        setJackpot(0)
    } else {
        setPrice(0)
    } 

    setBalance(prevBalance => prevBalance + wonAmount);
}

function premio() {
    if (price === 1 && ring3 > 1) {
        return (
        <p className="priceInd">{"🍑 X15 You've won $" + (betAmount * 15) + "!"}</p>
        )
    } else if (price === 2 && ring3 > 1) {
        return (
            <p className="priceInd">{"🦄 X20 You've won $" + (betAmount * 20) + "!"}</p>
            )
    } else if (price === 3 && ring3 > 1) {
        return (
            <p className="priceInd">{"🥒 X25 You've won $" + (betAmount * 25) + "!"}</p>
            )
    } else if (price === 4 && ring3 > 1) {
        return (
            <p className="priceInd">{"💎 Jackpot! You've won: $" + (jackpot) + "!"}</p>
            )
    } else if (price === 0 && ring3 > 1) {
        return (
            <p className="priceInd">😧 Better luck next time!</p>
            )
    } else if (price === 10) {
        return (
            <p className="priceInd">🤢 <span style={{color: `red`}}>Not enough funds</span> </p>
            )
}
}

    return (
        <div>
            <div className="fullSlot">
                <div className="myLogo">
                    <a href="/home" onClick={(e) => { e.preventDefault(); setAboutPage(false); setTokenomicsPage(false); }}>PLAY</a>
                    <a href="#" onClick={(e) => { e.preventDefault(); setAboutPage(true); setTokenomicsPage(false); }}>ABOUT</a>
                    <img src="/logo.png" alt="logo"/>
                    <a href="#" onClick={(e) => { e.preventDefault(); setTokenomicsPage(true); setAboutPage(false); }}>TOKENOMICS</a>
                    <a href="https://app.uniswap.org/" className='buy-token'>BUY</a>
                </div>
                {aboutPage && <AboutContent />}
                {tokenomicsPage && <TokenomicsContent />}
                {!aboutPage && !tokenomicsPage && (
                    <div className='slots-container'>
                        <h1 className="jackpot">{"Jackpot: $" + jackpot }</h1>
                        <h1 className="price3">
                        {premio()}
                        </h1>
                        <div className="slot">
                        <div className="row">
                        {row1()}
                        </div>
                        <div className="row">
                        {row2()}
                        </div>
                        <div className="row">
                        {row3()}
                        </div>
                        </div>
                        <div className="slotFoot1">
                            <button className="price1" onClick={() => setBetAmount(100)}>Bet $100</button>
                            <button className="price1" onClick={() => setBetAmount(200)}>Bet $200</button>
                            <button className="price1" onClick={() => setBetAmount(500)}>Bet $500</button>
                            <input value={betAmount} type="number" className="betInput" placeholder="$100"></input>
                            <h1 className="price">{"Available cash: " + "$" + Math.round((balance * 100)) / 100}</h1>
                        </div>
                        <div className="slotFoot">
                            <button className="spinButton" onClick={() => play()}>Spin</button>
                        </div>
                    </div>
                )}
            </div>
            <div className="background-container"></div>
        </div>
    )
}

export default App;
