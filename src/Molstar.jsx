import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { DefaultPluginSpec } from "molstar/lib/mol-plugin/spec";
import { PluginContext  } from "molstar/lib/mol-plugin/context";

const Molstar = props => {

  const { pdbId, url, dimensions, className } = props;
  const parentRef = useRef(null);
  const canvasRef = useRef(null);
  const plugin = useRef(null);

  useEffect(async () => {
    plugin.current = new PluginContext(DefaultPluginSpec());
    plugin.current.initViewer(canvasRef.current, parentRef.current);
    await plugin.current.init();
    await loadStructure(pdbId, url, plugin.current);
    return () => plugin.current = null;
  }, [])

  const loadStructure = async (pdbId, url, plugin) => {
    const structureUrl = url ? url : pdbId ? `https://files.rcsb.org/view/${pdbId}.cif` : null;
    if (!structureUrl) return;
    const data = await plugin.builders.data.download(
      { url: structureUrl }, {state: {isGhost: true}}
    );
    const extension = structureUrl.split(".").pop().replace("cif", "mmcif");
    const traj = await plugin.builders.structure.parseTrajectory(data, extension);
    await plugin.builders.structure.hierarchy.applyPreset(traj, "default");
  }

  const width = dimensions ? dimensions[0] : "100%";
  const height = dimensions ? dimensions[1] : "100%";

  return (
    <div ref={parentRef} style={{position: "relative", width, height}} className={className || ""}>
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
  className: PropTypes.string
};

export default Molstar;