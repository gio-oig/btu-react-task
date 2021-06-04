const Input = ({ register, ...rest }) => {
  console.log(register);
  return <input {...rest} />;
};

export default Input;
