import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function MainMen() {
  const [kidsItems, setKidsItems] = useState([]);

  useEffect(() => {
    axios
      .get("/items/kidsitems")
      .then((res) => {
        setKidsItems(res.data.kidsItems);
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
          <p>KIDS ALL</p>
          <p
            style={{
              fontSize: "12px",
              letterSpacing: "1px",
            }}
          >
            Select from this amazing stylish line for your kids.
          </p>
        </div>

        <div className="Mens-Wrapper">
          <div className="Mens-Items-Wrapper">
            {kidsItems.map((item) => (
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
        </div>
      </div>
    </div>
  );
}

export default MainMen;
