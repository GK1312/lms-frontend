import React from "react";
import Link from "next/link";
import CardContainer from "@/app/components/auth/CardContainer";
import ResetPasswordForm from "@/app/components/auth/ResetPasswordForm";

const ResetPasswordPage = React.memo(function resetPasswordPage() {
  return (
    <>
      <main className="h-full flex items-center justify-center">
        <CardContainer
          title="Recover your account"
          subtitle="to continue to LMS"
        >
          <ResetPasswordForm />
          <div className="text-label-sm text-light leading-tight font-normal font-poppins flex flex-row items-center gap-1">
            No account?{" "}
            <Link href={"/sign-up"} className="text-accent font-medium font-poppins">
              Sign up
            </Link>
          </div>
        </CardContainer>
      </main>
    </>
  );
});

export default ResetPasswordPage;
