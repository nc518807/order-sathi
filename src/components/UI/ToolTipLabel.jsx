import React from "react";
import { UncontrolledTooltip } from "reactstrap";


const TooltipLabel = (props) => {
  return (
    <UncontrolledTooltip placement="left" >
      {props.text}
    </UncontrolledTooltip>
  )
}

export default TooltipLabel;