import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import "molstar/build/viewer/molstar.css";
import { Viewer } from "molstar/build/viewer/molstar";

const MolstarViewer = props => {

  const { pdbId, url, options } = props;
  const viewerElement = useRef(null);
  const viewer = useRef(null);

  useEffect(() => {
    viewer.current = new Viewer(viewerElement.current, options || {});
    if (pdbId) viewer.current.loadPdb(pdbId);
    if (url) viewer.current.loadStructureFromUrl(url);
    return () => viewer.current = null;
  }, [])

  return (
    <div ref={viewerElement} />
  );
};

MolstarViewer.propTypes = {
  pdbId: PropTypes.string,
  url: PropTypes.string,
  options: PropTypes.object
};

export default MolstarViewer;