import React from 'react';
import stocks from '../stock-data';

const ShowStock = (props) => {
    const symbol = props.match.params.symbol;
    
    console.log(symbol);

    const [stock, setStock] = React.useState(null);

    // const getStock = async () => {
    //     const response = await fetch(url); 
    //     const data = await response.json();
    //     setStock(data);
    // };

    React.useEffect(() => {
        const found = stocks.find(stock => 
            symbol === stock.symbol
            );
    }, []);

    const loaded = () => {
        return (
            <>
            <div>
                <div>Stock Show Page</div>
                <h1>{stock.symbol}</h1>
                <h1>{stock.name}</h1>
                <p>Last Price: {stock.lastPrice}</p>
                <p>Change: {stock.change}</p>
                <p>High: {stock.high}</p>
                <p>Low: {stock.low}</p>
                <p>Open: {stock.open}</p>
            </div>
            </>
        );
    };

    const loading = () => {
        return <h1>Loading...</h1>;
    };

    return stock ? loaded() : loading();
};

export default ShowStock;