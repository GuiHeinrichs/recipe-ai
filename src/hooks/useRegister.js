"use client";
import { useState } from "react";

const useRegister = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return {
    fullName,
    email,
    password,
    setFullName,
    setEmail,
    setPassword,
  };
};

export default useRegister;
