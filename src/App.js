import React, { useState } from "react";
import { hideLayers, getLayers } from "./utils/cs";
import "./styles/main.less";
import { VeeButton } from 'veeui-react';

export default () => {
  const [layers, setLayers] = useState(null);
  const handleGetLayers = async () => {
    const layers = await getLayers();
    setLayers(layers);
  };
  const handleHideLayers = async () => {
    await hideLayers()
    const layers = await getLayers();
    setLayers(layers);
  }
  return (
    <div style={{ width: "100vw", height: "100vh", background: "#FFF" }}>
      <VeeButton type="primary" onClick={handleGetLayers}>
        点击获取图层
      </VeeButton>
      <VeeButton onClick={handleHideLayers}>
        点击隐藏全部文字图层
      </VeeButton>
      <div className="area">
        {layers && layers.length
          ? layers.map((e, i) => (
              <div key={i} className="layer">
                {e}
              </div>
            ))
          : "无"}
      </div>
    </div>
  );
};
