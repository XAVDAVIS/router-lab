import React from 'react';
import stocks from '../stock-data';

const ShowStock = (props) => {
  const symbol = props.match.params.symbol;
  console.log(symbol);
  const [stock, setStock] = React.useState(null);

  React.useEffect(() => {
    const found = stocks.find(stock =>
      symbol === stock.symbol
    ); 
    setStock(found);
  }, []);

  const loaded = () => {
    return (
      <>
      <div>
      <div>Stock Show Page</div>
      <h1 className='leftside'>{stock.symbol}</h1>
      <h1 className='rightside'>{stock.name}</h1>
      <p className='leftside'>Last Price: {stock.lastPrice}</p>
      <p className='rightside'>High: {stock.high}</p>
      <p className='leftside'>Low: {stock.low}</p>
      <p className='rightside'>Open: {stock.open}</p>
      </div>
      </>
    );
  };

  const loading = () => {
    return <h1>Loading...</h1>;
  };

  // if stock has data, run the loaded function, otherwise, run loading
  return stock ? loaded() : loading(); 
};

export default ShowStock;