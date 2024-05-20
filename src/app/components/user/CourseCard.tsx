import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaStar } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import CourseCardType from "@/app/interfaces/courses";

const CourseCard = React.memo(function CourseCard({
  data,
}: {
  data: CourseCardType;
}) {
  return (
    <section className="course_card w-full max-w-96 px-4 pt-4 pb-5 text-main-text font-poppins border border-hr rounded-2xl bg-white select-none transition-all divide-success-200 ease-in-out hover:drop-shadow-filter-card">
      <Link
        href={data.url}
        className="course_card_thumb mb-5 block relative overflow-hidden z-1"
      >
        <Image
          src={data.thumbnail}
          alt={data.alt}
          width={500}
          height={190}
          className="rounded-xl"
        />
      </Link>
      <div>
        <ul className="text-light font-semibold flex flex-row items-center justify-between">
          <li className="flex flex-row items-center">
            <Link
              href={""}
              className="px-[0.815rem] py-[0.35rem] text-sm font-bold capitalize rounded-3xl bg-[#EFEFF2] transition-all divide-success-200 ease-in-out hover:bg-accent hover:text-white"
            >
              {data.tag}
            </Link>
          </li>
          <li className="text-base flex flex-row items-center gap-1">
            <FaStar size={20} color="#F8BC24" /> ({data.rating} Reviews)
          </li>
        </ul>
        <h5 className="mt-3 mb-3">
          <Link
            href={""}
            className="text-xl font-semibold leading-none font-poppins"
          >
            {data.title}
          </Link>
        </h5>
        <p className="">
          By <span className="font-semibold">{data.author}</span>
        </p>
        <div className="mt-4 flex flex-row items-center justify-between">
          <button className="px-4 py-2 text-sm font-extrabold flex items-center gap-2 border border-black rounded-3xl bg-warning-dark shadow-primary-btn transition-all divide-success-200 ease-in-out hover:shadow-none">
            Enroll Now <FaArrowRightLong size={14} />
          </button>
          <h5 className="text-2xl text-accent leading-none font-bold font-poppins">
            ${data.prise}
          </h5>
        </div>
      </div>
    </section>
  );
});

CourseCard.displayName = "CourseCardComponent";

export default CourseCard;
