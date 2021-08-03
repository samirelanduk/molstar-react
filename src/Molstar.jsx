import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import "molstar/build/viewer/molstar.css";
import { Viewer } from "molstar/build/viewer/molstar";

const Molstar = props => {

  const { pdbId, url, dimensions, options } = props;
  const viewerElement = useRef(null);
  const viewer = useRef(null);

  useEffect(() => {
    viewer.current = new Viewer(viewerElement.current, options || {});
    if (pdbId) viewer.current.loadPdb(pdbId);
    if (url) viewer.current.loadStructureFromUrl(url);
    return () => viewer.current = null;
  }, [])

  if (!dimensions) return <div ref={viewerElement} />

  return (
    <div style={{
      position: "relative",
      width: dimensions[0], height: dimensions[1]
    }}>
      <div ref={viewerElement} style={{
        position: "absolute",
        width: dimensions[0], height: dimensions[1], left: 0, right: 0
      }}/>
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