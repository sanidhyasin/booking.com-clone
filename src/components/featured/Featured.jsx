import React from "react";
import "./featured.css";

export const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          src="https://www.theindiatourism.com/images/Humayun-Tomb-delhi.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>New Delhi</h1>
          <h2>2250 Properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://www.printologyconcept.com/wp-content/uploads/2018/12/CI_100048763-600x600.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Mumbai</h1>
          <h2>1500 Properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://tripcompanion.com/wp-content/uploads/2017/12/Taj-Mahal-Agra-India.Square-1.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Agra</h1>
          <h2>950 Properties</h2>
        </div>
      </div>
      {/* <div className="featuredItem">
        <img
          src="https://tripcompanion.com/wp-content/uploads/2017/12/Taj-Mahal-Agra-India.Square-1.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Agra</h1>
          <h2>450 Properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://tripcompanion.com/wp-content/uploads/2017/12/Taj-Mahal-Agra-India.Square-1.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Varanasi</h1>
          <h2>550 Properties</h2>
        </div>
      </div> */}
    </div>
  );
};
