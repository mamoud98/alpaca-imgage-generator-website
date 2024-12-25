import { useMemo, useState } from "react";
import dataImges from "../../assets/alpaca";
import Button from "../button";

import "./style.css";

const Place = ({ palceName, chooseThePlace }) => {
  const alpacas = useMemo(() => {
    return Object.keys(dataImges);
  }, []);

  return (
    <div>
      <div className="title-p">accessorize the alpaca&apos;s</div>
      <div className="alpacas-buttons">
        {alpacas.map((alpaca) => (
          <div key={alpaca}>
            <Button name={alpaca} click={chooseThePlace} choosed={palceName} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Place;
