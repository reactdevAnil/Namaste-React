import React from "react";
import { CDN_URL } from "../utils/constants";


const RestrauntCard = (props) => {
    console.log(props)
    const {resData}=props
    console.log(resData)
    const {name,cloudinaryImageId,address,avgRating,id}=resData?.data
      return (
        <div className="res-card" key={id}>
          <img 
          className="res-logo"
            src={CDN_URL+cloudinaryImageId}
            alt="res-logo"
          />
          <h3>{name}</h3>
          <h4>{avgRating}</h4>
          <h4>{address}</h4>
        </div>
      );
    };

export default RestrauntCard;    