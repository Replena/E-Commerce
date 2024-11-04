import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../redux/actions/clientActions";
import { toast } from "react-toastify";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

const LoginForm = () => {
  const avatar = useSelector((state) => state.client.user.gravatarUrl);
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

  const onSubmit = (data) => {
    setIsLoading(true);

    const result = dispatch(loginUser(data));
    setIsLoading(false);

    if (result) {
      toast.success("Giriş başarılı!");
      navigate("/");
    } else {
      toast.error("Login failed. Please try again.");
    }
    console.log(data);
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
        <Input
          type="checkbox"
          {...register("rememberMe")}
          id="rememberMe"
          className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
        />
        <label
          htmlFor="rememberMe"
          className="text-h5-md text-accent cursor-pointer"
        >
          Beni Hatırla
        </label>
      </div>

      <Button type="submit" className="w-full mt-4" disabled={isLoading}>
        {isLoading ? "Logging in..." : "Login"}
      </Button>
      {avatar && (
        <img src={avatar} alt="avatar" className="w-12 h-12 mx-auto" />
      )}
    </form>
  );
};

export default LoginForm;
