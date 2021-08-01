import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { createPluginAsync } from "molstar/lib/mol-plugin-ui/index";
import { DefaultPluginUISpec } from "molstar/lib/mol-plugin-ui/spec";


const Molstar = props => {

  const parent = useRef(null);
  const plugin = useRef(null);

  useEffect(() => {
    const defaultSpec = DefaultPluginUISpec();
    const init = async () => {
      plugin.current = await createPluginAsync(parent.current, {
        ...defaultSpec,
        layout: {
            initial: {
                isExpanded: false,
                showControls: false
            },
        },
      });
    }
    init();
  }, [])

  return (
    <div
      ref={parent}
      style={{ width: 640, height: 480, position: "absolute", overflow: "hidden" }}
    />
  );
};

Molstar.propTypes = {
  
};

export default Molstar;