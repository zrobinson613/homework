import React, { useState } from 'react';

export default function SearchBar() {
    const [stock, setStock] = useState("");
    const [stockData, setStockData] = useState([]);


    const handleSubmit = (e)=> {

        return (async () => {

            e.preventDefault();
            console.log("hi");
            // console.log(stock);
            setStockData(await myFetch(stock));
            // console.log(stockData);
        })();



    }

    async function myFetch(stock) {
        try {
            let response = await fetch(`https://finnhub.io/api/v1/quote?symbol=${stock}&token=sandbox_c7oaat2ad3idf06mq070`);
            if (!response.ok) {
                throw new Error(`${response.status} ${response.stausText}`);
            }

            const data = await response.json();
            console.log(stockData);
            return data;

        } catch (error) {
            console.log(error);
        }
    }

    return (<div>
        <form onSubmit={handleSubmit}>
            <label>Enter Stock Ticker Symbol
                <input name="stocksymbol" value={stock || ""} onChange={(e) => setStock(e.target.value)} />
            </label>
            <button>Update</button>
        </form>
    </div>);
}
