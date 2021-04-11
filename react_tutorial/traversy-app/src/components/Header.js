import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title, onAdd, showAdd }) => {
  return (
    <header>
      <h1 style={{ display: "inline" }}>{title}</h1>
      <Button
        color={showAdd ? "Red" : "Green"}
        text={showAdd ? "Close" : "Add"}
        onClick={onAdd}
      />
    </header>
  );
};

Header.defaultProps = {
  title: "Task\t",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

/* const headingStyle = {
  color: "red",
  backgroundColor: "black",
};*/

export default Header;
