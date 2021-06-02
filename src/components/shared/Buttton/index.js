const Button = ({ children, ...rest }) => {
  return (
    <button type="submit" class="btn btn-primary" {...rest}>
      {children}
    </button>
  );
};

export default Button;
