import "./App.css";

import Place from "./componets/place";
import Item from "./componets/item";
import { useMemo, useRef, useState } from "react";
import dataImges from "./assets/alpaca";
import html2canvas from "html2canvas";

function App() {
  const [palce, setPalce] = useState("backgrounds");
  const [items, setItems] = useState({
    accessories: "headphone",
    ears: "defaultEars",
    hair: "defaultHair",
    leg: "defaultLeg",
    neck: "defaultNeck",
    nose: "nose",
    mouth: "defaultMouth",
    eyes: "defaultEyes",
    backgrounds: "blue50",
  });
  const divRef = useRef();

  const handleDownload = async () => {
    if (divRef.current) {
      // Capture the div as an image
      const canvas = await html2canvas(divRef.current);
      const image = canvas.toDataURL("image/png");

      // Create a link to download the image
      const link = document.createElement("a");
      link.href = image;
      link.download = "div-image.png";
      link.click();
    }
  };

  const convertData = useMemo(() => {
    const data = { ...items };
    delete data.backgrounds;
    return Object.entries(data);
  }, [items]);

  const chooseThePlace = (name) => {
    setPalce(name);
  };
  const chooseTheItem = (name) => {
    setItems((prev) => {
      return { ...prev, [palce]: name };
    });
  };
  const Random = () => {
    const randomData = Object.entries(dataImges).reduce((acc, val) => {
      const [key, value] = val;

      const convertVal = Object.keys(value);

      return {
        ...acc,
        [key]: convertVal[Math.floor(Math.random() * convertVal.length)],
      };
    }, {});
    setItems(randomData);
  };

  return (
    <div className="container">
      <div className="title">alpaca generator</div>
      <div className="img-buttons-container">
        <div>
          <div
            ref={divRef}
            style={{
              backgroundImage: `url(${
                dataImges.backgrounds[items.backgrounds]
              })`,
            }}
            className="img"
          >
            {convertData.map((data, i) => (
              <img key={i} src={dataImges[data[0]][data[1]]} />
            ))}
          </div>
          <div className="tow-buttons">
            <button onClick={Random}>Random</button>
            <button onClick={handleDownload}>Download</button>
          </div>
        </div>

        <div className="buttons">
          <Place palceName={palce} chooseThePlace={chooseThePlace} />
          <Item item={palce} items={items} chooseTheItem={chooseTheItem} />
        </div>
      </div>
    </div>
  );
}

export default App;
