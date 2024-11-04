import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../redux/actions/clientActions";
import { toast } from "react-toastify";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  });

  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    setIsLoading(true);

    const result = await dispatch(loginUser(data));
    setIsLoading(false);

    if (result) {
      toast.success("Giriş başarılı!");
      navigate("/");
    } else {
      toast.error("Login failed. Please try again.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-md mx-auto p-6 space-y-4"
    >
      <div>
        <label className="block text-sm font-medium">Email:</label>
        <Input
          type="email"
          {...register("email", {
            required: "Email is required",
            pattern: { value: /^\S+@\S+$/, message: "Invalid email address" },
          })}
          className="mt-1 block w-full rounded-md shadow-sm"
        />
        {errors.email && (
          <span className="text-red-500 text-sm">{errors.email.message}</span>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium">Password:</label>
        <Input
          type="password"
          {...register("password", { required: "Password is required" })}
          className="mt-1 block w-full rounded-md shadow-sm"
        />
        {errors.password && (
          <span className="text-red-500 text-sm">
            {errors.password.message}
          </span>
        )}
      </div>

      <div className="flex items-center">
        <Checkbox {...register("rememberMe")} />
        <label className="ml-2 text-sm">Remember Me</label>
      </div>

      <Button type="submit" className="w-full mt-4" disabled={isLoading}>
        {isLoading ? "Logging in..." : "Login"}
      </Button>
    </form>
  );
};

export default LoginForm;
