import React from "react";
import "./Home.css";

import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://images-na.ssl-images-amazon.com/images/S/pv-target-images/83cf1af3899d01f6c423210d8c71b57592fd340cc059d20522db8eccaef86c87._UR1920,1080_RI_UX667_UY375_.jpg"
          alt="homeBg"
        ></img>

        <div className="home_row">
          <Product
          id="1234514"
            title="You Can"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/4180omRGrSL._SX460_BO1,204,203,200_.jpg"
            rating={5}
          />
          <Product
          id="1234513"
            title="BENGOO G9000 Stereo Gaming Headset for PS4 PC Xbox One PS5 Controller, Noise Cancelling Over Ear Headphones with Mic, LED Light, Bass Surround, Soft Memory Earmuffs for Laptop Mac Nintendo NES Games"
            price={13.99}
            image="https://m.media-amazon.com/images/I/61CGHv6kmWL._AC_UY218_.jpg"
            rating={4}
          />
        </div>

        <div className="home_row">
          <Product
          id="1234512"
            title="this product is aswsome"
            price={78}
            image="https://m.media-amazon.com/images/I/71H6n85hpyL._AC_UL320_.jpg"
            rating={3}
          />
          <Product
           id="1234511"
            title="Samsung Galaxy S22 Smartphone, Factory Unlocked Android Cell Phone, 256GB, 8K Camera & Video, Brightest Display, Long Battery Life, Fast 4nm Processor, US Version, Green"
            price={50.99}
            image="https://m.media-amazon.com/images/I/71c5rhsUkxL._AC_UY218_.jpg"
            rating={4}
          />
          <Product
            id="1234521"
            title="Elite Gourmet EKT1001B Electric BPA-Free Glass Kettle, Cordless 360° Base, Stylish Blue LED Interior, Handy Auto Shut-Off Function – Quickly Boil Water for Tea & More, 1L, Graphite Black"
            price={10}
            image="https://m.media-amazon.com/images/I/81es3JsoQXL._AC_UL320_.jpg"
            rating={3}
          />
        </div>

        <div className="home_row">
          <Product
            title="SAMSUNG 65-Inch Class QLED Q70A Series - 4K UHD Quantum HDR Smart TV with Alexa Built-in (QN65Q70AAFXZA, 2021 Model)"
            price={400}
            image="https://images-na.ssl-images-amazon.com/images/I/81fWbLbFP7L.__AC_SY300_SX300_QL70_FMwebp_.jpg"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
