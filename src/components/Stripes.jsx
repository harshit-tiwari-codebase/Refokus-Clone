import React from "react";
import Stripe from "./Stripe";

const Stripes = () => {
  let data = [
    {
      url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197e4/6796cbd97af8fb6fc9bbb4c6_cssda.svg",
      num: 48,
    },
    { url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197e4/6796cbd90e91519a09b8b326_awwwards.svg", num: 2 },
    { url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/679b97202d2e093f2a48876a_goologo-onLight.svg", num: 11 },
    { url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/679b89a37dd20bc1a6b9c8da_deelogo-onLight.svg", num: 48 },
    { url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/679b7bf9533879784a0cf5fa_logo-onLight.svg", num: 2 },
    { url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d485bb37c8fc880cdfad_bcgp-1.svg", num: 11 },
  ];
  return (
    <div className="flex w-full mt-15">
      {data.map((elem,idx) => (
        <Stripe val={elem} key={idx}/>
      ))}
    </div>
  );
};

export default Stripes;
