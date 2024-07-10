import React from "react";
import BadmintonCourt from "../components/BadmintonCourt";
import { useParams } from "react-router-dom";
const Home = ({ data }) => {
  const { id } = useParams();
  return (
    <div>
      <div className="p-4">
        <BadmintonCourt idName={id} data={data} />
      </div>
    </div>
  );
};

export default Home;
