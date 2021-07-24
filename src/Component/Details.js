import axios from "axios";
import "./style.css";
import React, { useEffect, useState } from "react";

function Details() {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     fetch("https://reqres.in/api/users?page=2").then((res) => 
//       res.json()).then(temp=>setData(temp));
      
    
//   }, []);
const [data, setData] = React.useState([])
React.useEffect(() => {
        axios.get('https://reqres.in/api/users?page=2').then(res => {
            setData(res)
        }).catch(err => console.log(err))
    }, [])
  return (
    <div className="main_class">
      <div className="child_class">
        <table className="table_class">
          <tbody>
            <tr>
                <th>id</th>
                <th>email</th>
                <th>first_name</th>
                <th>last_name</th>
                <th>Image</th>
             
            </tr>
            {data.map(item=> 
              <tr>
                <td>{item.id}</td>
                <td>{item.email}</td>
                <td>{item.first_name}</td>
                <td>{item.last_name}</td>
                <td>
                  <img src={item.avatar} />
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
export default Details;