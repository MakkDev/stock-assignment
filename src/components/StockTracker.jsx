import React, { useEffect, useState } from 'react'
import '../StockTracker.css';
import stocks from '../stocksInfo'

export default function StockTracker() {
    const [stocksInfo, setStocksInfo] = useState([])
    const [showAllStocks, setShowAllStocks] = useState(false)
    
    useEffect(() => {
        setStocksInfo(stocks)
    },[])

const handleShowAll = () => {
    setShowAllStocks(!showAllStocks);
}
  return (
    <div className="container">
    <div className='stock__headers'>
        <div className="account__header">Account</div>
        <div className="cash__header">Available Cash</div>
    </div>
    <span> <hr/> </span>
    {stocksInfo.slice(showAllStocks ? (0,0) : (0,3)).map(stock => {
        return (
            <> 
            <div className="stock__row">
                <div className="account__info">{stock.type} - {stock.accountNumber}</div>
                <div className="price__info">
                    <div className="price__current">${stock.price}</div>
                    <div style={{ color: stock.percentChange.includes('+') ? "green" : stock.percentChange.includes('-') ? "red" : "gray" }} className="price__change">{stock.percentChange}% / ${stock.priceChange}</div>
                </div>
            </div>
            <span> <hr/> </span>
            </>
        )
    })}
    <button onClick={handleShowAll}> {showAllStocks ? "Show Less" : "Load More"}</button>
    </div>
  )
}
