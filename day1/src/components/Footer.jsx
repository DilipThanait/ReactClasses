const Footer = (props) => {
  const { name, email, contact, age, isMarried, ktaharu } = props;

  const [ktaharu1, ktaharu2, arkokta] = ktaharu;

  return (
    <>
      <div>
        <p>
          {name}
          {email}
          {contact}
          {age}
          {isMarried.toString()}
          {ktaharu1}
          {ktaharu2}
          {arkokta}
        </p>
        <Footer2 />
      </div>
    </>
  );
};

const Footer2 = () => {
  return (
    <div>
      <h1>hi i am footer 2</h1>
    </div>
  );
};

// export default Footer;
export { Footer, Footer2 };
