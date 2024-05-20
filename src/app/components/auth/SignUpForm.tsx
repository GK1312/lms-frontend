"use client";
import React, { useState } from "react";
import Loader from "@/app/components/common/Common";
import { FormProvider, useForm } from "react-hook-form";
import {
  email_validation,
  mobile_number_validation,
  password_validation,
} from "@/utils/inputValidations";
import PrimaryInput from "@/app/components/common/PrimaryInput";

const SignUpForm = React.memo(function SignUpForm() {
  const methods = useForm();
  const [success, setSuccess] = useState(false);

  const onSubmit = methods.handleSubmit((data) => {
    console.log(data);
    methods.reset();
    setSuccess(true);
  });
  return (
    <FormProvider {...methods}>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex flex-col items-stretch justify-start gap-3"
        autoComplete="off"
      >
        <PrimaryInput {...email_validation} />
        <PrimaryInput {...mobile_number_validation} />
        <PrimaryInput {...password_validation} />
        <button
          onClick={onSubmit}
          className="w-full min-h-9 px-5 py-2 text-xs text-white leading-none tracking-wider font-semibold uppercase inline-flex items-center justify-center bottom-0 outline-0 bg-accent select-none rounded-md transition-all duration-100 ease-in-out hover:bg-accent-dark"
        >
          Continue
        </button>
      </form>
    </FormProvider>
  );
});

SignUpForm.displayName = "SignUpFormComponent";

export default SignUpForm;
