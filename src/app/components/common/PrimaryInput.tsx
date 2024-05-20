import { findInputError, isFormInvalid } from "@/utils";
import React, { useState } from "react";
import { useFormContext } from "react-hook-form";
import { FaEye, FaRegEyeSlash } from "react-icons/fa";

const PrimaryInput = React.memo(function PrimaryInput({
  name,
  label,
  type,
  id,
  placeholder,
  validation,
}: {
  name: string;
  label: string;
  type: string;
  id: string;
  placeholder: string;
  validation: any;
}) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const inputErrors = findInputError(errors, name);
  const isInvalid = isFormInvalid(inputErrors);
  const [passwordToggle, setPasswordToggle] = useState(false);
  return (
    <div className="flex flex-col flex-input items-stretch justify-start relative">
      <div className="mb-1 flex flex-row items-center justify-between">
        <label
          htmlFor={id}
          className="text-label leading-snug font-medium flex items-center"
        >
          {label}
        </label>
      </div>
      <div className="relative">
        <input
          id={id}
          type={passwordToggle ? "text" : type}
          placeholder={placeholder}
          {...register(name, validation)}
          autoComplete="off"
          className={`w-full px-4 py-2.5 ${
            type === "password" ? "pr-8" : ""
          } text-label leading-tight font-normal border border-solid border-hr outline outline-2 outline-transparent outline-offset-2 rounded-md focus:shadow-input-focus ${
            isInvalid ? "shadow-input-danger" : ""
          } transition-all duration-200 ease-in-out`}
        />
        {type === "password" && (
          <div
            className="text-slate-600 absolute top-2.5 right-3 cursor-pointer"
            onClick={() => setPasswordToggle(!passwordToggle)}
          >
            {passwordToggle ? <FaRegEyeSlash size={16} /> : <FaEye size={16} />}
          </div>
        )}
      </div>
      <div className={`input_error_box ${isInvalid ? "h-6" : "h-0"} relative`}>
        {isInvalid && <InputError message={inputErrors?.error?.message} />}
      </div>
    </div>
  );
});

PrimaryInput.displayName = "PrimaryInputComponent";

const InputError = ({ message = "Invalid input" }: { message?: string }) => {
  return (
    <p className="mt-1 text-label text-danger leading-tight font-medium flex gap-1 absolute top-0 visible">
      {message}
    </p>
  );
};

export default PrimaryInput;
