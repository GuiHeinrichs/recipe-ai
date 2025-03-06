import Register from "../presentation/Register";
import useRegister from "../../../hooks/useRegister";
const RegisterContainer = () => {
  const { fullName, email, password, rememberMe, setEmail, setPassword, setFullName } = useRegister;

  return (
    <Register
      email={email}
      password={password}
      fullName={fullName}
      rememberMe={rememberMe}
      setFullName={setFullName}
      setEmail={setEmail}
      setPassword={setPassword}
    />
  );
};

export default RegisterContainer;
