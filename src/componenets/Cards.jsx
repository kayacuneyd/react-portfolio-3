import React from "react";
import Button from "./Button";

const Cards = (props) => {
  return (
    
        <div className="text-center w-full border shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
            <img className="mx-auto w-20 mt-[-3rem] bg-white" src={props.img} alt="single"/>
            <h2 className="text-2xl font-bold text-center py-8">{props.title}</h2>
            <p className="text-4xl font-bold">{props.price}</p>
            <div className="font-medium">
                <p className="py-2 border-b mx-8 mt-8">{props.firstFeature}</p>
                <p className="py-2 border-b mx-8">{props.secondFeature}</p>
                <p className="py-2 border-b mx-8">{props.thirdFeature}</p>
            </div>
            <Button name="Start Trial" />
        </div>
      
  );
};

export default Cards;
