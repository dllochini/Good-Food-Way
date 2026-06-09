import { useMutation } from "@tanstack/react-query";
import { registerUser, loginUser } from "../api/auth";

export const useUserRegister = () => {
  return useMutation({
    mutationFn: registerUser,
  });
};

export const useUserLogin = () => {
  return useMutation({
    mutationFn: loginUser,
  });
};
