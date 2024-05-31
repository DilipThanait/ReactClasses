const Event = (props) => {
  const alertgardey = (name) => {
    alert("i am clicked" + name);
  };

  return (
    <>
      <h1>Event </h1>
      <h1 className="text-10xl font-bold text-blue-800">Hello world!</h1>
      <input
        className="btn"
        type="button"
        onClick={() => alertgardey(props.name)}
        value="click me"
      />
    </>
  );
};

export default Event;
