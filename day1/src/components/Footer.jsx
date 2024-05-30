import PropTypes from "prop-types";

const Footer = (props) => {
  return (
    <div>
      <p>
        {props.name}
        {props.email}
        {props.contact}
        {props.age}
        {props.isMarried.toString()}
        {props.ktaharu[0]}
      </p>
    </div>
  );
};

Footer.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  contact: PropTypes.number.isRequired,
  age: PropTypes.number.isRequired,
  isMarried: PropTypes.bool.isRequired,
  ktaharu: PropTypes.array.isRequired,
};

export default Footer;
