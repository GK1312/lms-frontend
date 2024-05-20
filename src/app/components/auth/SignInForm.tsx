"use client";
import React, { useState } from "react";
import Loader from "@/app/components/common/Common";
import { FormProvider, useForm } from "react-hook-form";
import {
  email_validation,
  password_validation,
} from "@/utils/inputValidations";
import PrimaryInput from "@/app/components/common/PrimaryInput";
import Link from "next/link";

const SignInForm = React.memo(function SignInForm() {
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
        <PrimaryInput {...password_validation} />
        <button
          onClick={onSubmit}
          className="w-full min-h-9 px-5 py-2 text-xs text-white leading-none tracking-wider font-semibold uppercase inline-flex items-center justify-center bottom-0 outline-0 bg-accent select-none rounded-md transition-all duration-100 ease-in-out hover:bg-accent-dark"
        >
          Continue
        </button>
        <Link
          href={"/reset-password"}
          className="text-label text-accent font-semibold"
        >
          Reset Password
        </Link>
      </form>
    </FormProvider>
  );
});

SignInForm.displayName = "SignInFormComponent";

export default SignInForm;
