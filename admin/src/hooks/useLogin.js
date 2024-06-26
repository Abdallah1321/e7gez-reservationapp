import { useState } from "react";
import axios from "axios";
import { useAuthContext } from "./useAuthContext";
import { useNavigate } from "react-router-dom";

export const useLogin = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useAuthContext();
  const navigate = useNavigate();

  const config = {
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true,
  };

  const login = async (username, password) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.post(
        "https://e7gez-be.onrender.com/api/auth/login",
        { username, password },
        config
      );

      const user = response.data;

      if (!response.status === 200) {
        throw new Error(user.error);
      }

      // save user to local storage
      localStorage.setItem("user", JSON.stringify(user));

      //update auth context

      if (user.isAdmin) {
        dispatch({ type: "LOGIN", payload: user.details });
        setIsLoading(false);
        navigate("/");
      } else {
        dispatch({
          type: "LOGIN_FAILURE",
          payload: {
            message: "You do not have permission to access this page!",
          },
        });
      }
    } catch (error) {
      setError(error.message);
      setIsLoading(false);
    }
  };

  return { login, isLoading, error };
};
