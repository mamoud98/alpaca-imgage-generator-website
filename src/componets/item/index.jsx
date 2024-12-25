import { useMemo, useState } from "react";
import Button from "../button";
import dataImges from "../../assets/alpaca";
import "./style.css";

const Item = ({ item, items, chooseTheItem }) => {
  const itemData = useMemo(() => {
    return Object.keys(dataImges[item]);
  }, [item]);

  const itemChoosed = useMemo(() => {
    return items[item];
  }, [item, items]);

  return (
    <div>
      <div className="title-i">{item}</div>
      <div className="items-buttons">
        {itemData.map((name, i) => (
          <div key={i}>
            <Button name={name} click={chooseTheItem} choosed={itemChoosed} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Item;
