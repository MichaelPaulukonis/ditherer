// @flow

import React from "react";

const Range = (props: any) => {
  return (
    <div>
      {props.name}
      <input
        type="range"
        min={props.types.range[0]}
        max={props.types.range[1]}
        value={props.value}
        onChange={e => props.onSetFilterOption(props.name, e.target.value)}
      />
      {props.value}
    </div>
  );
};

export default Range;