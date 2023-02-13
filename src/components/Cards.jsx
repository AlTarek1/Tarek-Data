import React from "react";
import Single from "./../assets/single.png";
import Double from "./../assets/double.png";
import Triple from "./../assets/triple.png";
import Card from "./Card";
const Cards = () => {
  return (
    <div className="w-full py-[10rem] px-4 bg-white">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        <Card
          img={Single}
          heading="Single User"
          price={149}
          feat1="500 GB Storage"
          feat2="1 Granted User"
          feat3="Send up to 2 GB"
          isSpecial={false}
        />
        <Card
          img={Double}
          heading="Double User"
          price={249}
          feat1="1500 GB Storage"
          feat2="2 Granted User"
          feat3="Send up to 4 GB"
          isSpecial={true}
        />{" "}
        <Card
          img={Triple}
          heading="Triple User"
          price={349}
          feat1="2500 GB Storage"
          feat2="3 Granted User"
          feat3="Send up to 8 GB"
          isSpecial={false}
        />
      </div>
    </div>
  );
};

export default Cards;
