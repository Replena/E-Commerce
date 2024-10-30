import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Loader2 } from "lucide-react";
import { toast } from "react-toastify";

const api = axios.create({
  baseURL: "https://workintech-fe-ecommerce.onrender.com",
});

export default function Signup() {
  const [roles, setRoles] = useState([]);
  const [isStore, setIsStore] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    reset,
  } = useForm({
    defaultValues: {
      role_id: "3",
    },
  });

  useEffect(() => {
    const fetchRoles = async () => {
      try {
        const response = await api.get("/roles");
        setRoles(response.data);
      } catch (err) {
        toast.error("Roller yüklenirken hata oluştu");
      }
    };
    fetchRoles();
  }, []);

  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      const formData = {
        ...data,
        role_id: Number(data.role_id),
      };

      if (
        roles.find((role) => role.id === Number(data.role_id))?.name ===
        "Mağaza"
      ) {
        formData.store = {
          name: data.storeName,
          phone: data.storePhone,
          tax_no: data.storeTaxId,
          bank_account: data.storeBankAccount,
        };
      }

      await api.post("/signup", formData);
      toast.success(
        "Hesabınızı etkinleştirmek için e-postadaki bağlantıya tıklayın!"
      );
      reset();
      navigate.goBack();
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Kayıt olurken bir hata oluştu"
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleRoleChange = (value) => {
    setValue("role_id", value);
    const selectedRole = roles.find((role) => role.id.toString() === value);
    setIsStore(selectedRole?.name === "Mağaza");
  };

  return (
    <div className="max-w-md mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Kayıt Ol</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <Input
            {...register("name", {
              required: "İsim zorunludur",
              minLength: {
                value: 3,
                message: "İsim en az 3 karakter olmalıdır",
              },
            })}
            placeholder="İsim"
          />
          {errors.name && (
            <p className="text-red text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

        <div>
          <Input
            {...register("email", {
              required: "Email zorunludur",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Geçersiz email adresi",
              },
            })}
            placeholder="Email"
            type="email"
          />
          {errors.email && (
            <p className="text-red text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        <div>
          <Input
            {...register("password", {
              required: "Şifre zorunludur",
              minLength: {
                value: 8,
                message: "Şifre en az 8 karakter olmalıdır",
              },
              pattern: {
                value:
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                message:
                  "Şifre en az bir büyük harf, bir küçük harf, bir rakam ve bir özel karakter içermelidir",
              },
            })}
            placeholder="Şifre"
            type="password"
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">
              {errors.password.message}
            </p>
          )}
        </div>
        <div>
          <Input
            {...register("confirmPassword", {
              required: "Şifreyi onaylamak zorunludur",
              validate: (value) =>
                value === watch("password") || "Şifreler eşleşmiyor",
            })}
            placeholder="Şifreyi Onayla"
            type="password"
          />
          {errors.confirmPassword && (
            <p className="text-red-500 text-sm mt-1">
              {errors.confirmPassword.message}
            </p>
          )}
        </div>

        <Select onValueChange={handleRoleChange}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Rol Seçin" />
          </SelectTrigger>
          <SelectContent>
            {roles.map((role) => (
              <SelectItem key={role.id} value={role.id.toString()}>
                {role.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {isStore && (
          <div className="space-y-4">
            <Input
              {...register("storeName", {
                required: "Mağaza adı zorunludur",
                minLength: {
                  value: 3,
                  message: "Mağaza adı en az 3 karakter olmalıdır",
                },
              })}
              placeholder="Mağaza Adı"
            />
            {errors.storeName && (
              <p className="text-red-500 text-sm mt-1">
                {errors.storeName.message}
              </p>
            )}

            <Input
              {...register("storePhone", {
                required: "Telefon zorunludur",
                pattern: {
                  value: /^(\+90|0)?[0-9]{10}$/,
                  message: "Geçerli bir telefon numarası girin",
                },
              })}
              placeholder="Telefon"
            />
            {errors.storePhone && (
              <p className="text-red-500 text-sm mt-1">
                {errors.storePhone.message}
              </p>
            )}

            <Input
              {...register("storeTaxId", {
                required: "Vergi No zorunludur",
                pattern: {
                  value: /^T\d{4}V\d{6}$/,
                  message: "Geçerli bir vergi numarası girin (TXXXXVXXXXXX)",
                },
              })}
              placeholder="Vergi No"
            />
            {errors.storeTaxId && (
              <p className="text-red-500 text-sm mt-1">
                {errors.storeTaxId.message}
              </p>
            )}

            <Input
              {...register("storeBankAccount", {
                required: "IBAN zorunludur",
                pattern: {
                  value: /^TR\d{24}$/,
                  message: "Geçerli bir IBAN girin",
                },
              })}
              placeholder="IBAN (TRXXXXXXXXXXXXXXXXXXXXXXXX)"
            />
            {errors.storeBankAccount && (
              <p className="text-red text-sm mt-1">
                {errors.storeBankAccount.message}
              </p>
            )}
          </div>
        )}

        <Button className="w-full" disabled={isLoading}>
          {isLoading ? <Loader2 className="animate-spin" /> : "Kayıt Ol"}
        </Button>
      </form>
    </div>
  );
}
