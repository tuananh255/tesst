import React from "react";
import BadmintonCourt from "../components/BadmintonCourt";
import { useParams } from "react-router-dom";
const Home = () => {
  const {id} = useParams()
  return (
    <div>
      <div className="p-4">
        <BadmintonCourt idName={id}/>
      </div>
    </div>
  );
};

export default Home;
