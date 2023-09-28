// import { useState, ChangeEvent, FormEvent } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
interface FormData {
  username: string;
  email: string;
  password: string;
}

function RegularForm() {
  // const [formData, setFormData] = useState<FormData>({
  //   username: "",
  //   email: "",
  //   password: "",
  // });

  const { register, handleSubmit, formState:{errors} } = useForm<FormData>();
  const onSubmit: SubmitHandler<FormData> = (data) =>
    alert(JSON.stringify(data));

  // const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
  //   const { name, value } = e.target;
  //   setFormData({
  //     ...formData,
  //     [name]: value,
  //   });
  // };

  // const handleSubmi = (e: FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   alert(JSON.stringify(formData));
  // };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>Change Me To React Hook Form</h1>
      <div>
        <input
          {...register("username", { required: true, minLength: 2 })}
          type="text"
          id="username"
          name="username"
          placeholder="Enter UserName"
          // value={formData.username}
          // onChange={handleChange}
        />
        <p>{errors.username?.message}</p>
      </div>
      <div>
        <input
          {...register("email", {
            required: true,
            pattern: /^[a-zA-Z0-9-.]+@[a-zA-Z0-9-.]+(?:\[a-zA-Z0-9]+)*$/,
          })}
          type="text"
          id="email"
          name="email"
          placeholder="Enter Email"
          // value={formData.email}
          // onChange={handleChange}
        />
        <p>{errors.email?.message}</p>
      </div>
      <div>
        <input
          {...register("password", {
            required: true,
            minLength: 8,
            maxLength: 20,
            pattern:
              /^(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[@#$%^&*()_+-])[0-9A-Za-z@#$%^&*()_+-]/,
          })}
          type="text"
          id="password"
          name="password"
          placeholder="Enter Password"
          // value={formData.password}
          // onChange={handleChange}
        />
        <p>{errors.password?.message}</p>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default RegularForm;
