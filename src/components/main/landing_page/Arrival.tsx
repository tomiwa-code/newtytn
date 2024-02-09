"use client";
import React from "react";
import LandingProducts from "@/components/general/LandingProducts";

const Arrival = () => {
  const products = [
    {
      link: "https://res.cloudinary.com/dgdoymhtj/image/upload/v1705877393/tytn/products/b2e46750418af48a83c279462267dd0d_ftbfbn.jpg",
    },
    {
      link: "https://res.cloudinary.com/dgdoymhtj/image/upload/v1705877396/tytn/products/pullover_pyehgj.jpg",
    },
    {
      link: "https://res.cloudinary.com/dgdoymhtj/image/upload/v1705877395/tytn/products/tshirt_hxzxnr.jpg",
    },
    {
      link: "https://res.cloudinary.com/dgdoymhtj/image/upload/v1705877394/tytn/products/short2_wreify.jpg",
    },
    {
      link: "https://res.cloudinary.com/dgdoymhtj/image/upload/v1705877393/tytn/products/new2_yur5ty.jpg",
    },
    {
      link: "https://res.cloudinary.com/dgdoymhtj/image/upload/v1705877392/tytn/products/new3_eckzzr.jpg",
    },
    {
      link: "https://res.cloudinary.com/dgdoymhtj/image/upload/v1705877392/tytn/products/photo_2019-09-21_13-41-30_rdr0zh.webp",
    },
    {
      link: "https://res.cloudinary.com/dgdoymhtj/image/upload/v1705877363/tytn/products/11494d595efca4debf44db3832ba9a68_uns49v.jpg",
    },
  ];

  const imageUrl =
    "https://res.cloudinary.com/dgdoymhtj/image/upload/v1706477477/tytn/announcements/Missguided_Playboy_X_Gray_Marl_Varsity_V_Neck_Sweater_Dress-removebg-preview_v6s6hz.png";
  const subText =
    "Lorem ipsum dolor sit amet, consecteturadipisicing elit. Architecto, amet incidunt.";
  const text = "New Arrival";

  return (
    <LandingProducts
      products={products}
      imageUrl={imageUrl}
      subText={subText}
      text={text}
    />
  );
};

export default Arrival;
