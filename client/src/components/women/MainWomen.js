import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function MainMen() {
  const [womenItems, setWomenItems] = useState([]);

  useEffect(() => {
    axios
      .get("/items/womenitems")
      .then((res) => {
        setWomenItems(res.data.womenItems);
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
          <p>WOMEN ALL</p>
          <p
            style={{
              fontSize: "12px",
              letterSpacing: "1px",
            }}
          >
            Turn heads with our ultimate womens collection. Available in styles,
            colours, and materials. Buy today. Keep up to date with the latest
            womens streetwear with Invictus.
          </p>
        </div>

        <div className="Mens-Wrapper">
          <div className="Mens-Items-Wrapper">
            {womenItems.map((item) => (
              <li key={item._id} style={{ listStyleType: "none" }}>
                <div className="Mens-Item-Image">
                  <Link to={`/item/${item._id}`}>
                    <div className="image-hover-container">
                      <img
                        src={"/" + item.imageUrl}
                        className="image-hover-image"
                        alt=""
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
        </div>
      </div>
    </div>
  );
}

export default MainMen;
