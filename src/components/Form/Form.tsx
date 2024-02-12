import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import form from "./Form.module.css";
import { useState } from "react";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { LuUser2 } from "react-icons/lu";
import { fetchToken } from "../tools/useToken";
import { useNavigate } from "react-router-dom";

const schema = z.object({
  name: z.string().min(3, { message: "Введіть логін" }),
  password: z.string().min(3, { message: "Введіть пароль" }),
});

type FormData = z.infer<typeof schema>;

const Form = () => {
  const navigate = useNavigate();
  const [passwordVisible, setPasswordVisible] = useState(true);

  const triggerVisible = () => setPasswordVisible(!passwordVisible);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    await fetchToken(data.name, data.password, reset);
    navigate("/");
  };

  return (
    <form className={form.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={form.input__block}>
        <div
          style={{
            color: errors.name?.message ? "red" : "#000000e0",
          }}
        >
          <label>Логін</label>
          <div className={form.input__border}>
            <LuUser2 style={{ margin: "3px 5px 0 0" }} size={20} />
            <input
              placeholder="Введіть логін"
              autoComplete="current-password"
              {...register("name")}
            />
          </div>
          <div style={{ height: "20px" }}>
            {errors.name?.message && (
              <p style={{ fontSize: "10px" }}>{errors.name?.message}</p>
            )}
          </div>
        </div>
      </div>
      <div className={form.input__block}>
        <div
          style={{
            color: errors.password?.message ? "red" : "#000000e0",
          }}
        >
          <label>Пароль</label>
          <div className={form.input__border}>
            <input
              type={passwordVisible ? "password" : "text"}
              placeholder="Введіть пароль"
              autoComplete="current-password"
              {...register("password")}
            />
            {passwordVisible ? (
              <AiFillEyeInvisible
                style={{ margin: "1px 0 0 5px" }}
                size={20}
                onClick={triggerVisible}
              />
            ) : (
              <AiFillEye
                size={20}
                style={{ margin: "1px 0 0 5px" }}
                onClick={triggerVisible}
              />
            )}
          </div>
          <div style={{ height: "20px" }}>
            {errors.password?.message && (
              <p style={{ fontSize: "10px" }}>{errors.password?.message}</p>
            )}
          </div>
        </div>
      </div>

      <button>Увійти</button>
    </form>
  );
};

export default Form;
