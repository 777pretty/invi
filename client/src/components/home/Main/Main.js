import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import "./Main.css";
import Fit from "./Fit/Fit";

function Main() {
  const [menItems, setMenItems] = useState([]);
  const [womenItems, setWomenItems] = useState([]);
  const [limitedItems, setLimitedItems] = useState([]);

  useEffect(() => {
    axios
      .get("/items/menitems")
      .then((res) => {
        setMenItems(res.data.menItems);
      })
      .catch((err) => {
        console.log(err);
      })
      .then(() => {
        axios
          .get("/items/womenitems")
          .then((res) => {
            setWomenItems(res.data.womenItems);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .then(() => {
        axios
          .get("/items/limiteditems")
          .then((res) => {
            setLimitedItems(res.data.limitedItems);
          })
          .catch((err) => {
            console.log(err);
          });
      });
  }, []);

  return (
    <div className="Main-Wrapper">
      <div>
        <div className="Mens-Title">
          <p>MEN NEW ARRIVALS</p>
        </div>

        <div className="Mens-Wrapper">
          <div className="Mens-Items-Wrapper">
            {menItems.map((item) => (
              <li key={item._id} style={{ listStyleType: "none" }}>
                <div className="Mens-Item-Image">
                  <Link to={`/item/${item._id}`}>
                    <div className="image-hover-container">
                      <img src={"/" + item.imageUrl} alt="" />
                      <div className="image-hover-overlay">
                        <img src={"/" + item.imageUrl2} alt="" />
                      </div>
                    </div>
                  </Link>
                  <p>{item.name}</p>
                  <p>{item.price}</p>
                </div>
              </li>
            ))}
          </div>
          <Link to="/men">
            <button className="btn effect01" target="_blank">
              <span>VIEW MORE PRODUCTS</span>
            </button>
          </Link>
        </div>
        <div className="Mens-Title">
          <p>WOMEN NEW ARRIVALS</p>
        </div>

        <div className="Mens-Wrapper">
          <div className="Mens-Items-Wrapper">
            {womenItems.map((item) => (
              <li key={item._id} style={{ listStyleType: "none" }}>
                <div className="Mens-Item-Image">
                  <Link to={`/item/${item._id}`}>
                    <div className="image-hover-container">
                      <img src={"/" + item.imageUrl} alt="" />
                      <div className="image-hover-overlay">
                        <img src={"/" + item.imageUrl2} alt="" />
                      </div>
                    </div>
                  </Link>
                  <p>{item.name}</p>
                  <p>{item.price}</p>
                </div>
              </li>
            ))}
          </div>

          <Link to="/women">
            <button className="btn effect01" target="_blank">
              <span>VIEW MORE PRODUCTS</span>
            </button>
          </Link>
        </div>
        <div className="Mens-Title">
          <p>LIMITED COLLECTION</p>
        </div>

        <div
          className="Mens-Wrapper"
          style={{ border: "none", marginBottom: "80px" }}
        >
          <div className="Mens-Items-Wrapper">
            {limitedItems.map((item) => (
              <li key={item._id} style={{ listStyleType: "none" }}>
                <div className="Mens-Item-Image">
                  <Link to={`/item/${item._id}`}>
                    <div className="image-hover-container">
                      <img
                        src={"/" + item.imageUrl}
                        alt="Avatar"
                        className="image-hover-image"
                      />
                      <div className="image-hover-overlay">
                        <img
                          src={"/" + item.imageUrl2}
                          className="image-hover-image"
                          alt=""
                        />
                      </div>
                    </div>
                  </Link>
                  <p>{item.name}</p>
                  <p>{item.price}</p>
                </div>
              </li>
            ))}
          </div>

          <Link to="/limited">
            <button className="btn effect01" target="_blank">
              <span>VIEW MORE PRODUCTS</span>
            </button>
          </Link>
        </div>
      </div>

      <Fit />
    </div>
  );
}

export default Main;
