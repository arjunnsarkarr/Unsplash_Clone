"use client";
import React, { useEffect } from "react";
import axios from "axios";
import { CreateCntx } from "./contex";
import { useContext } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Homepage = () => {
  const [data, setData] = useContext(CreateCntx);

  const router = useRouter();

  useEffect(() => {
    get_trending_images();
  }, []);

  const get_trending_images = async () => {
    try {
      const { data } = await axios.get(
        `https://api.unsplash.com/photos?client_id=Wkc2EGMGwMmfvSas5C55T0mMowCKcavjoy-rPNIfREc&page=1`
      );
      setData(data);
      router.push("/list");
    } catch (error) {
      console.log(error);
    }
  };

  const SerachImages = async () => {
    const random = await axios.get(
      `https://api.unsplash.com/search/photos?client_id=Wkc2EGMGwMmfvSas5C55T0mMowCKcavjoy-rPNIfREc&page=1&query=office`
    );
  };

  return (
    <>
      <button onClick={get_trending_images}>get_trending_images</button>
      {/* <Link onClick={get_trending_images} >Lists of images</Link> */}
      {/* <Link onClick={} >Randoms</Link> */}
    </>
  );
};

export default Homepage;
