"use client";
import React, { useRef } from "react";
import { useForm, Controller } from "react-hook-form";

type OTPInputFormValues = {
  otp: string[];
};

const OtpForm = React.memo(function OtpForm() {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<OTPInputFormValues>({
    mode: "onChange",
    defaultValues: {
      otp: Array(6).fill(""),
    },
    criteriaMode: "all",
  });

  const onSubmit = (data: OTPInputFormValues) => {
    console.log(data.otp.join(""));
  };

  const inputRefs = useRef<(HTMLInputElement | null)[]>(Array(6).fill(null));

  const moveToNextField = (index: number, value: string) => {
    if (value.length >= 1 && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="py-4 flex flex-col items-stretch justify-start gap-3"
    >
      <div className="flex items-center justify-center gap-3">
        {Array.from({ length: 6 }, (_, index) => (
          <Controller
            key={index}
            name={`otp.${index}`}
            control={control}
            rules={{ required: true, maxLength: 1 }}
            render={({ field, fieldState: { error } }) => (
              <input
                {...field}
                ref={(el) => {
                  inputRefs.current[index] = el;
                }}
                type="text"
                maxLength={1}
                onKeyUp={(e) => moveToNextField(index, e.currentTarget.value)}
                autoComplete="one-time-code"
                inputMode="numeric"
                className={`w-full max-w-14 h-10 px-4 py-2 text-label-sm leading-tight font-normal text-center border border-solid border-hr outline outline-1 outline-transparent rounded-md focus:shadow-input-focus ${
                  Object.keys(errors).length > 0 ? "shadow-input-danger" : ""
                } transition-all duration-200 ease-in-out`}
              />
            )}
          />
        ))}
      </div>
      {Object.keys(errors).length > 0 && (
        <div className={`input_error_box ${!isValid ? "h-6" : "h-0"} relative`}>
          {!isValid && (
            <p className="mt-1 text-label-sm text-danger leading-tight font-medium flex gap-1 absolute top-0 visible">
              Otp has to be 6 digit.
            </p>
          )}
        </div>
      )}
      <button
        type="submit"
        className="w-full min-h-9 px-5 py-2 text-xs text-white leading-none tracking-wider font-semibold uppercase inline-flex items-center justify-center bottom-0 outline-0 bg-accent select-none rounded-md transition-all duration-100 ease-in-out hover:bg-accent-theme-dark"
      >
        Verify OTP
      </button>
      <div className="text-label-sm text-light leading-tight font-normal flex flex-row items-center gap-1">
        Didn&apos;t get code?{" "}
        <button type="button" className="text-accent font-semibold">
          Click to resend
        </button>
      </div>
    </form>
  );
});

OtpForm.displayName = "OtpFormComponent";

export default OtpForm;
