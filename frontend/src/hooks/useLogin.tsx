import { useState } from "react";

const useLogin = () => {
  const [state, setState] = useState<string | null>(null);

  const login = async (username: string, password: string) => {
    try {
      const response = await fetch(import.meta.env.API_URL + "/api/nurse/login", {
        method: "POST",
        body: JSON.stringify({ username, password }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        setState("Success");
      } else {
        setState("Error");
      }
    } catch (error) {
      console.error(error);
      setState("Error");
    }
  };

  return { login, state };
};

export default useLogin;
