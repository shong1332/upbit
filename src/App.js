

import axios from 'axios';
import { v4 as uuidv4 } from "uuid";
// import jwt from "jsonwebtoken";


function App() {



   const getBTCExchangeRate = async () => {

    try {
      const response = await axios.get(
  
        'https://api.upbit.com/v1/ticker?markets=KRW-BTC',
      );
      return response.data[0].trade_price;
    } catch (error) {
      console.error('Error fetching Polygon exchange rate:', error);
      return false;
    }
  };
  
  
  
  // function getAuthorizationTokenNoParam() {
  
  //   const payload = {
  //     access_key: 'LdxqxWRJl5LxUKL9vAwIUANXTSkPxEqFUfiHYHix',
  //     nonce: uuidv4(),
  //   };
  
  //   const jwtToken = jwt.sign(payload, 'OTB2N9KwpB3sxP6gFoFJZTJfI1FlXyL8K5Blf0GC');
  
  //   console.log(jwtToken)
  //   return `Bearer ${jwtToken}`;
  // }
  
  
  
  
  // const options = {
  //   method: 'GET',
  //   url: 'https://api.upbit.com/v1/accounts',
  //   headers: {accept: 'application/json',  Authorization: getAuthorizationTokenNoParam() }
  // };
  
  //  const aaa =  axios
  //   .request(options)
  //   .then(function (response) {
  //     console.log(response.data);
  //   })
  //   .catch(function (error) {
  //     console.error(error);
  //   });
  
  




  
  const onClick = async () => {
    try {
      const exchangeRate = await getBTCExchangeRate();
      console.log('Exchange Rate:', exchangeRate);
    } catch (error) { 
      console.error('Error fetching Polygon exchange rate:', error);
    }
  };

  


  return (
    <div onClick={onClick}>
      getPolygonExchangeRate
    </div>
  );
}

export default App;
