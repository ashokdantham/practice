import { useState } from "react";
import APIData from "./data";

function Car() {

  const [data, setData] = useState(APIData);
  const getData = () => {
    setData(APIData);
  }
  const clearData = () => {
    setData([]);
  }
 
    

  return (
    <>
      <h1> Demonstrate useState for complex data</h1>
      {data.length ? data.map((item) => {
        return (
          <div key={item.id}>
            <h2>{item.name}</h2>
            <p>{item.email}</p>
          </div>
        );
      }) : 'No Data'}
      <br />
      <br />
      <button onClick={getData} > Get Data</button>
      <button onClick={clearData}> Clear Data</button>
      
    </>
  )
}
export default Car;