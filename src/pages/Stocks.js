import React from 'react';
import { useHistory } from 'react-router-dom';
import stocks from '../stock-data'

const Stocks = (props) => {
    const history = useHistory();
    return (
        <>
        <div className='tableDiv'>
                <h1 className='mostActive'> <span className='M'>M</span><span className='mostO'>o</span><span className='mostS'>s</span><span className='mostT'>t</span> <span className='a'>A</span><span className='c'>c</span><span className='activeT'>t</span><span className='i'>i</span><span className='v'>v</span><span className='e'>e</span> <span className='stockS'>S</span><span className='stocksT'>t</span><span className='stocksO'>o</span><span className='c'>c</span><span className='k'>k</span><span className='stocksS'>s</span></h1>
                <div className='companiesGrid'>
                    <p className='gridOne'>Company Name</p>
                    <p className='gridTwo'>Current Price</p>
                    <p className='gridThree'>Highest Price</p>
                    </div>
            {stocks.map((investment) => {
                const { name, symbol, lastPrice, high } = investment;
                return(
                        <div onClick={()=>history.push(`/showstock/${symbol}`)} className='companies'> 
                                <p className='stocksList'>{name}</p>
                                <p className='stocksList'>{lastPrice}</p>
                                <p className='stocksList'>{high}</p>
                        </div>
                )
            })}
        </div>
        </>
      );
    };

export default Stocks;