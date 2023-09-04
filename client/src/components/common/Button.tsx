const Button = ({ label }: { label: string }) => {
  return <button onClick={() => console.log("This is a test")}>{label}</button>;
};

export default Button;
