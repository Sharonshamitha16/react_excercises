import React from "react";
import { useParams } from "react-router-dom";

const Setting = () => {
  const { sampleid } = useParams();

  return <div>Setting - {sampleid}</div>;
};

export default Setting;