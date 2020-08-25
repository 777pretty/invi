import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function MainMen() {
  const [menItems, setMenItems] = useState([]);

  useEffect(() => {
    axios
      .get("/items/menitems")
      .then((res) => {
        setMenItems(res.data.menItems);
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
          <p>MEN ALL</p>
          <p
            style={{
              fontSize: "12px",
              letterSpacing: "1px",
            }}
          >
            You’ve spent every moment up until now mixing your own style. It’s
            your look, not someone else’s. It’s like an art form – a way to
            express yourself and show the world the man you want them to see.
          </p>
        </div>

        <div className="Mens-Wrapper">
          <div className="Mens-Items-Wrapper">
            {menItems.map((item) => (
              <li key={item._id} style={{ listStyleType: "none" }}>
                <div className="Mens-Item-Image">
                  <Link to={`/item/${item._id}`}>
                    <div className="image-hover-container">
                      <img src={"/" + item.imageUrl} alt="Avatar" />
                      <div className="image-hover-overlay">
                        <img src={"/" + item.imageUrl2} alt="" />
                      </div>
                    </div>{" "}
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
