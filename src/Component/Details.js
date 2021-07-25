import axios from "axios";
import "./style.css";
import React, { useEffect, useState } from "react";

function Details() {

  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  useEffect(() => {
    axios
      .get(`https://reqres.in/api/users?page=${page}`)
      .then((res) => setData(res.data.data));
  }, [page]);
  const prev = () => {
    if (page === 1) {
      alert("Already on first page");
    } else {
      setPage(page - 1);
    }
  };

  const next = () => {
    if (page === 2) {
      alert("Already on last page");
    } else {
      setPage(page + 1);
    }
  };
  return (
    <div className="main_class">
      <div className="child_class">
        <table className="table_class">
          <tbody>
            
            {data.map(item=> (
              <tr>
                <td>{item.id}</td>
                <td>{item.email}</td>
                <td>{item.first_name}</td>
                <td>{item.last_name}</td>
                <td>
                  <img src={item.avatar} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="pagination">
          <button onClick={prev}>Prev</button>
          <button onClick={next}>Next</button>
        </div>
      </div>
    </div>
  )
}
export default Details;