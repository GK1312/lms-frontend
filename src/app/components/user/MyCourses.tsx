import React from "react";
import CourseCardType from "@/app/interfaces/courses";
import CourseCard from "@/app/components/user/CourseCard";
import Thumb from "../../../../public/images/courses/course_thumb01.jpg";
import Thumb2 from "../../../../public/images/courses/course_thumb02.jpg";
import Thumb3 from "../../../../public/images/courses/course_thumb03.jpg";
import Thumb4 from "../../../../public/images/courses/course_thumb04.jpg";
import Thumb5 from "../../../../public/images/courses/course_thumb05.jpg";
import Thumb6 from "../../../../public/images/courses/course_thumb06.jpg";

const MyCourses = React.memo(function MyCourses() {
  const MyCourses: CourseCardType[] = [
    {
      url: "",
      thumbnail: Thumb,
      alt: "David Miller-Learning JavaScript With Imagination",
      tag: "development",
      rating: 4.8,
      title: "Learning JavaScript With Imagination",
      author: "David Miller",
      prise: "15.00",
    },
    {
      url: "",
      thumbnail: Thumb2,
      alt: "David Miller-The Complete Graphic Design for Beginners",
      tag: "design",
      rating: 4.5,
      title: "The Complete Graphic Design for Beginners",
      author: "David Miller",
      prise: "19.00",
    },
    {
      url: "",
      thumbnail: Thumb3,
      alt: "David Miller-Learning Digital Marketing on Facebook",
      tag: "marketing",
      rating: 4.3,
      title: "Learning Digital Marketing on Facebook",
      author: "David Miller",
      prise: "24.00",
    },
    {
      url: "",
      thumbnail: Thumb4,
      alt: "David Miller-Financial Analyst Training & Investing Course",
      tag: "business",
      rating: 4.8,
      title: "Financial Analyst Training & Investing Course",
      author: "David Miller",
      prise: "12.00",
    },
    {
      url: "",
      thumbnail: Thumb5,
      alt: "David Miller-Data Analysis & Visualization Masterclass",
      tag: "data science",
      rating: 4.5,
      title: "Data Analysis & Visualization Masterclass",
      author: "David Miller",
      prise: "27.00",
    },
    {
      url: "",
      thumbnail: Thumb6,
      alt: "David Miller-Master the Fundamentals of Math",
      tag: "mathematics",
      rating: 4.7,
      title: "Master the Fundamentals of Math",
      author: "David Miller",
      prise: "10.00",
    },
  ];
  return (
    <section>
      <div className="grid grid-cols-5 gap-6">
        {MyCourses.map((course, key) => (
          <CourseCard key={key} data={course} />
        ))}
      </div>
    </section>
  );
});

export default MyCourses;
