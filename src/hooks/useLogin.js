"use client";

import { useState } from "react"

const useLogin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(false);

    return { email, password, rememberMe, setEmail, setPassword, setRememberMe };
}

export default useLogin;