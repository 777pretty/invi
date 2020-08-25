import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function MainMen() {
  const [saleItems, setSaleItems] = useState([]);

  useEffect(() => {
    axios
      .get("/items/saleitems")
      .then((res) => {
        setSaleItems(res.data.saleItems);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div
      className="Main-Wrapper"
      style={{ borderTop: "1px solid rgb(219, 219, 219)" }}
    >
      <div>
        <div className="Mens-Title">
          <p>SALE</p>
          <p
            style={{
              fontSize: "12px",
              letterSpacing: "1px",
            }}
          >
            Grab amazing items for less.
          </p>
        </div>

        <div className="Mens-Wrapper">
          <div className="Mens-Items-Wrapper">
            {saleItems.map((item) => (
              <li key={item._id} style={{ listStyleType: "none" }}>
                <div className="Mens-Item-Image">
                  <Link to={`/item/${item._id}`}>
                    <div className="image-hover-container">
                      <img
                        src={"/" + item.imageUrl}
                        alt=""
                        className="image-hover-image"
                      />
                      <div className="image-hover-overlay">
                        <img
                          src={"/" + item.imageUrl2}
                          className="image-hover-image"
                          alt=""
                        />
                      </div>
                    </div>{" "}
                  </Link>
                  <p>{item.name}</p>
                  <p style={{ textDecoration: "line-through" }}>59.95€</p>
                  <p style={{ color: "#f94c43" }}>{item.price}</p>
                </div>
              </li>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainMen;
