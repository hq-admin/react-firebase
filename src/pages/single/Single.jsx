import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import List from "../../components/table/Table";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { collection, doc, getDoc, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase";

const Single = () => {
  const [data, setData] = useState({})
  const location = useLocation()
  const type = location.pathname.split('/')[1]
  const id = location.pathname.split('/')[2]

  useEffect(() => {
    
      const fetchData = async () => {

          try {
            const querySnapshot = await getDoc(doc(db, type, id));

            console.log(querySnapshot.data())
            setData(querySnapshot.data());
            
          } catch (err) {
            console.log(err);
          }
        };
        fetchData();
    
  }, [])

  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img
                src=""
                alt=""
                className="itemImg"
              />
              {type === "users" ?
              <div className="details">
                <h1 className="itemTitle">{data.displayName}</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">{data.email}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">{data.phone}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">
                    {data.address} {data.city} {data.province}
                  </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Country:</span>
                  <span className="itemValue">{data.country}</span>
                </div>
              </div> :

              <div className="details">
              <h1 className="itemTitle">{data.name}</h1>
              <div className="detailItem">
                <span className="itemKey">SKU:</span>
                <span className="itemValue">{data.sku}</span>
              </div>
              <div className="detailItem">
                <span className="itemKey">Cost:</span>
                <span className="itemValue">$ {data.cost}</span>
              </div>
              <div className="detailItem">
                <span className="itemKey">Price:</span>
                <span className="itemValue">
                  $ {data.price}
                </span>
              </div>
              <div className="detailItem">
                <span className="itemKey">Stock:</span>
                <span className="itemValue">{data.stock}</span>
              </div>
            </div>}

            </div>
          </div>
          <div className="right">
            <Chart aspect={3 / 1} title="User Spending ( Last 6 Months)" />
          </div>
        </div>
        <div className="bottom">
        <h1 className="title">Last Transactions</h1>
          <List/>
        </div>
      </div>
    </div>
  );
};

export default Single;
