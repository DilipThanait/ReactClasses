const PropsDestruc = (props) => {
  let { email, password } = props;
  return (
    <>
      <h1>{email}</h1>
      <h1>{password}</h1>
      <PropsDestruc2 />
    </>
  );
};

const PropsDestruc2 = () => {
  return (
    <>
      <h1>hi i am PropsDestruc2</h1>
    </>
  );
};
export { PropsDestruc2, PropsDestruc };
