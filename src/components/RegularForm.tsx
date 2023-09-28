import { ErrorMessage } from "@hookform/error-message";
import { EventHandler } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
interface FormData {
  username: string;
  email: string;
  password: string;
}

function RegularForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    criteriaMode: "all",
  });
  const onSubmit: SubmitHandler<FormData> = (data) => 
    alert(JSON.stringify(data));


  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>Change Me To React Hook Form</h1>
      <div>
        <input
          {...register("username", {
            required: "This field is required",
            minLength: 2,
          })}
          type="text"
          id="username"
          name="username"
          placeholder="Enter UserName"
        />
        <p>{errors.username?.message}</p>
      </div>
      <div>
        <input
          {...register("email", {
            required: "This field is required",
            pattern: {
              value: /^[a-zA-Z0-9-.]+@[a-zA-Z0-9-.]+(?:\[a-zA-Z0-9]+)*$/,
              message: "Please enter a valid email address",
            },
          })}
          type="text"
          id="email"
          name="email"
          placeholder="Enter Email"
        />
        <p>{errors.email?.message}</p>
      </div>
      <div>
        <input
          {...register("password", {
            required: "This field is required",
            minLength: {
              value: 8,
              message: "Password must be at least 8 characters",
            },
            maxLength: {
              value: 20,
              message: "Password cen be max 20 characters",
            },
            validate: {
              hasUppercase: (value) =>
                /[A-Z]/.test(value) ||
                "Password must contain at least one uppercase letter",
              hasLowercase: (value) =>
                /[a-z]/.test(value) ||
                "Password must contain at least one lowercase letter",
              hasNumber: (value) =>
                /\d/.test(value) || "Password must contain at least one number",
              hasSpecialCharacter: (value) =>
                /[@#$%^&+=]/.test(value) ||
                "Password must contain at least one special character (@#$%^&+=)",
            },
          })}
          type="text"
          id="password"
          name="password"
          placeholder="Enter Password"
        />
        <ErrorMessage
          errors={errors}
          name="password"
          render={({ messages }) =>
            messages &&
            Object.entries(messages).map(([type, message]) => {
              console.log("76h67jh67");

              return <p key={type}>{message}</p>;
            })
          }
        />
        {/* <p>{errors.password?.message}</p> */}
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}

export default RegularForm;
