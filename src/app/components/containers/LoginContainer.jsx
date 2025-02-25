import Login from "../presentation/Login";
import useLogin from "../../../hooks/useLogin";
const LoginContainer = () => {
    const { email, password, rememberMe, setEmail, setPassword, setRememberMe } = useLogin;
    return (
        <Login
            email={email}
            password={password}
            rememberMe={rememberMe}
            setEmail={setEmail}
            setPassword={setPassword}
            setRememberMe={setRememberMe}
        />
    );
};

export default LoginContainer;