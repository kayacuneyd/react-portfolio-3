import React from "react";
import Laptop from "../assets/laptop.jpg";
import Button from "./Button";

const Analytics = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="w-[500px] mx-auto my-4" src={Laptop} alt="a laptop" />
        <div className="flex flex-col justify-center">
          <p className="text-[#00df9a] font-bold">DATA ANALYTICS DASHBOARD</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Manage Data Analytics Centrally
          </h1>
          <p className="text">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste,
            quod! Cum dolores minus possimus adipisci iste! Eaque quae accusamus
            reprehenderit blanditiis adipisci iure, doloremque, explicabo
            nostrum necessitatibus, facere officiis consequuntur. Iure et rerum
            deleniti odio dignissimos voluptatem corrupti sit. Tenetur magni
            voluptatibus, quasi id velit impedit natus nostrum sed facere dicta
            deleniti quis vitae enim eaque excepturi. Eos, veritatis molestias!
          </p>
          <Button name="Get started" />
        </div>
      </div>
    </div>
  );
};

export default Analytics;
