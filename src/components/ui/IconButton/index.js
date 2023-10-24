import PropTypes from "prop-types";
import { StyledButton } from "./styled";
export default function IconButton(props) {
  return <StyledButton {...props}>{props.children}</StyledButton>;
}

StyledButton.propTypes = {
  children: PropTypes.element,
  withBackground: PropTypes.bool,
  width: PropTypes.number,
  backgroundColor: PropTypes.string,
  height: PropTypes.number,
};
