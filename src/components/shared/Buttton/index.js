const Button = ({ children, ...rest }) => {
  return (
    <button type="submit" className="btn btn-primary" {...rest}>
      {children}
    </button>
  );
};

export default Button;
