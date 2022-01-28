import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { DefaultPluginSpec } from "molstar/lib/mol-plugin/spec";
import { PluginContext  } from "molstar/lib/mol-plugin/context";

const Molstar = props => {

  const { pdbId, url, dimensions, options } = props;
  const parentRef = useRef(null);
  const canvasRef = useRef(null);
  const plugin = useRef(null);

  useEffect(async () => {
    plugin.current = new PluginContext(DefaultPluginSpec());
    plugin.current.initViewer(canvasRef.current, parentRef.current);
    await plugin.current.init();
    return () => plugin.current = null;
  }, [])

  if (!dimensions) return <div ref={pluginElement} />

  return (
    <div ref={parentRef} style={{position: "relative", width: dimensions[0], height: dimensions[1]}}>
      <canvas
        ref={canvasRef}
        style={{position: "absolute", top: 0, left: 0, right: 0, bottom: 0}}
      />
    </div>
  );
};

Molstar.propTypes = {
  pdbId: PropTypes.string,
  url: PropTypes.string,
  dimensions: PropTypes.array,
  options: PropTypes.object
};

export default Molstar;