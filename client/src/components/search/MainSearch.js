import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import "./MainSearch.css";

function MainMen() {
  const [foundItems, setFoundItems] = useState([]);
  const [searchTerm, setSearchTerms] = useState("");

  useEffect(() => {
    if (searchTerm.length > 2){
    axios
      .post("items/searchitems", {
        searchTerm: searchTerm.toUpperCase()
      })
      .then((res) => {
        setFoundItems(res.data.foundItems);
      })
      .catch((err) => {
        console.log(err);
      });}
  }, [searchTerm]);

  const onChangeSearchHandler = (event) => {
    setSearchTerms(event.target.value);
  };

  return (
    <div
      className="SearchContainer"
      style={{ borderTop: "1px solid rgb(219, 219, 219)" }}
    >
      <div className="SearchTitleAndInputWrapper">
        <div className="SearchTitle">
          <p>SEARCH</p>
        <input
          placeholder="Search By Typing..."
          onChange={onChangeSearchHandler}
        />
        </div>
        <div className="SearchResultWrapper">
          <div className="Mens-Items-Wrapper">
            
            {Array.isArray(foundItems) && foundItems.length && searchTerm.length > 2 ? (
              foundItems.map((item) => (
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
            ))) : (<p >No found items.</p>)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainMen;
