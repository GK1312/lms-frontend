"use client";
import React, { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { email_validation } from "@/utils/inputValidations";
import OtpForm from "./OtpForm";
import PrimaryInput from "@/app/components/common/PrimaryInput";

const ResetPasswordForm = React.memo(function ResetPasswordForm() {
  const methods = useForm();
  const [success, setSuccess] = useState(false);
  // const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const onSubmit = methods.handleSubmit((data) => {
    console.log(data);
    methods.reset();
    setSuccess(true);
    // onOpen();
  });
  return (
    <>
      <FormProvider {...methods}>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col items-stretch justify-start gap-3"
          autoComplete="off"
        >
          <PrimaryInput {...email_validation} />
          <button
            onClick={onSubmit}
            className="w-full min-h-9 px-5 py-2 text-xs text-white leading-none tracking-wider font-semibold uppercase inline-flex items-center justify-center bottom-0 outline-0 bg-accent select-none rounded-md transition-all duration-100 ease-in-out hover:bg-accent-dark"
          >
            Continue
          </button>
        </form>
      </FormProvider>
      {/* <Modal
        placement="center"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        backdrop="blur"
        isDismissable={false}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="text-xl leading-6 font-semibold flex flex-col gap-1">
                Enter Verification Code
                <p className="text-base text-light leading-5 font-normal">
                  We&apos;ve sent a code to{" "}
                  <span className="text-black font-semibold">
                    &quot;hello@gmail.com&quot;
                  </span>
                </p>
              </ModalHeader>
              <ModalBody>
                <OtpForm />
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal> */}
    </>
  );
});

ResetPasswordForm.displayName = "ResetPasswordFormComponent";

export default ResetPasswordForm;
