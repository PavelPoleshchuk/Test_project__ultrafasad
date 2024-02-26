import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useState } from "react";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { LuUser2 } from "react-icons/lu";
import { fetchToken } from "./tools/useToken";
import { useNavigate } from "react-router-dom";

const schema = z.object({
  name: z.string().min(3, { message: "Enter login" }),
  password: z.string().min(3, { message: "Enter password" }),
});

type FormData = z.infer<typeof schema>;

const Form = () => {
  const navigate = useNavigate();
  const [passwordVisible, setPasswordVisible] = useState(true);

  const triggerVisible = () => setPasswordVisible(!passwordVisible);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    await fetchToken(data.name, data.password, reset);
    navigate("/");
  };

  return (
    <form className="flex-col text-[14px]" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Login</label>
        <div
          className={`${errors.name?.message ? "border-red-500 text-red-500" : "text-black opacity-90"} inline-flex w-full rounded border bg-white px-3 py-1`}
        >
          <LuUser2 className="mr-1.5 mt-1 text-black opacity-70" size={20} />
          <input
            className="hover: h-6 w-full border-gray-300 bg-slate-100 pl-3 hover:bg-slate-200 focus:outline-none"
            placeholder="Enter login"
            autoComplete="current-password"
            {...register("name")}
          />
        </div>
        <div className="h-5">
          {errors.name?.message && (
            <p className="text-[10px]  text-red-500">{errors.name?.message}</p>
          )}
        </div>
      </div>
      <div>
        <label>Password</label>
        <div
          className={`${errors.password?.message ? "border-red-500 text-red-500" : "text-black opacity-90"} inline-flex w-full rounded border bg-white px-3 py-1`}
        >
          <input
            className="h-6 w-full border-gray-300 bg-slate-100 pl-3 hover:bg-slate-200 focus:outline-none"
            type={passwordVisible ? "password" : "text"}
            placeholder="Enter password"
            autoComplete="current-password"
            {...register("password")}
          />
          {passwordVisible ? (
            <AiFillEyeInvisible
              className="ml-2 mt-1 text-black opacity-50"
              size={20}
              onClick={triggerVisible}
            />
          ) : (
            <AiFillEye
              size={20}
              className="ml-2 mt-1 text-black opacity-50"
              onClick={triggerVisible}
            />
          )}
        </div>
        <div className="h-5">
          {errors.password?.message && (
            <p className="text-[10px]  text-red-500">
              {errors.password?.message}
            </p>
          )}
        </div>
      </div>

      <button
        className={`${isValid ? "bg-blue-400 hover:bg-blue-500" : "bg-blue-200"} mx-auto block rounded  px-7 py-2 font-bold text-white focus:bg-blue-600`}
      >
        Enter
      </button>
    </form>
  );
};

export default Form;
