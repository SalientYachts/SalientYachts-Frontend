import React, { useState } from "react";
import { useMoralis } from "react-moralis";
import { useEffect } from "react/cjs/react.development";

function Ramper() {
  const [ramper, setRamper] = useState();
  const { Moralis } = useMoralis();
  useEffect(() => {
    if (!Moralis?.["Plugins"]?.["fiat"]) return null;
    async function initPlugin() {
      Moralis.Plugins.fiat
        .buy({}, { disableTriggers: true })
        .then((data) => setRamper(data.data));
    }
    initPlugin();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [Moralis.Plugins.fiat]);

  return (

    <div>
    <div>
      <h1 style={{color: "#1fc7d3", marginBottom: "30px"}}>Not Available In Demo dApp</h1>
    </div>

    <iframe
      src={ramper}
      title="ramper"
      frameborder="no"
      allow="accelerometer; autoplay; camera; gyroscope; payment;"
      style={{
        width: "420px",
        height: "625px",
        boxShadow: "0 0.5rem 1.2rem rgb(189 197 209 / 20%)",
        border: "1px solid #e7eaf3",
        borderRadius: "1rem",
        backgroundColor: "white",
      }}
    /></div>
  );
}

export default Ramper;