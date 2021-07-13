import React, { useEffect } from "react";
import PropTypes from "prop-types";
import "molstar/build/viewer/molstar.css";
import { Viewer } from "molstar/build/viewer/molstar";

const MolstarViewer = props => {

  const { pdbId, options } = props;

  useEffect(() => {
    const viewer = new Viewer("molstarViewer", options || {});
    viewer.loadStructureFromUrl(`https://files.rcsb.org/view/${pdbId}.cif`);
  })

  return (
    <div id="molstarViewer" />
  );
};

MolstarViewer.propTypes = {
  pdbId: PropTypes.string.isRequired,
  options: PropTypes.object
};

export default MolstarViewer;