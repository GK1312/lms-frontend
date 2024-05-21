import MyCourses from "@/app/components/user/MyCourses";
import React from "react";

const MyCoursesPage = React.memo(function MyCoursesPage() {
  return (
    <>
      <h1 className="text-3xl text-main-text leading-normal font-bold font-poppins">
        My Courses
        <div className="mt-6">
          <MyCourses />
        </div>
      </h1>
    </>
  );
});
export default MyCoursesPage;
