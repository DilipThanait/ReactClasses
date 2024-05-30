import PropTypes from "prop-types";

const Newprops = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <h1>{props.age}</h1>
      <h2>{props.isMarried.toString()}</h2>
      <h1>{props.person[0]}</h1>
      <h1>{props.person[1]}</h1>
      <h1>{props.person[2]}</h1>
      <h1>{props.person[3]}</h1>
    </div>
  );
};

Newprops.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired,
  person: PropTypes.array.isRequired,
  isMarried: PropTypes.bool.isRequired,
};

export default Newprops;
