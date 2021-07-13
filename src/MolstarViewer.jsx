import React, { useEffect } from "react";
import PropTypes from "prop-types";
import "molstar/build/viewer/molstar.css";
import { Viewer } from "molstar/build/viewer/molstar";

const MolstarViewer = props => {

  const { pdbId, options } = props;

  useEffect(() => {
    const viewer = new Viewer("molstarViewer", options || {});
    if (pdbId) viewer.loadPdb(pdbId);
  })

  return (
    <div id="molstarViewer" />
  );
};

MolstarViewer.propTypes = {
  pdbId: PropTypes.string,
  options: PropTypes.object
};

export default MolstarViewer;