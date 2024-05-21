import Link from "next/link";
import { Divider } from "@mui/material";
import LinearProgressBar from "@/app/components/dashboard/LinearProgressBar";
import { FaClock } from "react-icons/fa";
import { IoDocumentOutline } from "react-icons/io5";
import { MdQuiz } from "react-icons/md";
import { PiExamFill, PiPlayBold } from "react-icons/pi";
import { TbProgress } from "react-icons/tb";
export default function Home() {
  return (
    <>
      <h1 className="text-3xl text-main-text leading-normal font-bold font-poppins">
        Hello, Gaurav Kadam
      </h1>
      <p className="text-lg text-main-text font-medium">
        Let’s learn something new today!
      </p>
      <div className="mt-6 px-4 py-3 flex flex-row items-center gap-4 bg-white rounded-lg shadow-normal-card">
        <div className="w-8 h-8 flex items-center justify-center">
          <FaClock size={30} color="#4B49AC" />
        </div>
        <div className="flex flex-col items-center gap-2.5">
          <h2 className="text-label font-medium leading-none font-poppins">
            Learning JavaScript With Imagination
          </h2>
          <LinearProgressBar height={6} value={50} />
        </div>
        <Divider
          orientation="vertical"
          variant="middle"
          flexItem
          className="mx-6"
        />
        <div className="text-text-main flex items-center gap-2">
          <IoDocumentOutline size={24} color="#ffaf98" title="Documents" />
          <span className="text-lg font-semibold">15</span>
        </div>
        <div className="text-text-main flex items-center gap-2">
          <MdQuiz size={24} color="#fd6e95" title="Quiz" />
          <span className="text-lg font-semibold">6</span>
        </div>
        <div className="text-text-main flex items-center gap-2">
          <PiExamFill size={24} color="#5fb587" title="Exams" />
          <span className="text-lg font-semibold">3</span>
        </div>
        <div className="ml-auto flex items-center gap-4">
          <button className="px-3 py-2 text-sm text-text-main font-medium font-poppins capitalize flex items-center gap-2 bg-[#f6efff] rounded-lg">
            <TbProgress size={18} color="#9963eb" /> progress
          </button>
          <button className="px-3 py-2 text-sm text-text-main font-medium font-poppins capitalize flex items-center gap-2 bg-[#f6efff] rounded-lg">
            <PiPlayBold size={18} color="#9963eb" /> resume
          </button>
        </div>
      </div>
      <p className="mt-2 me-4 text-xs text-right font-medium font-poppins">
        <Link href={""}>View all</Link>
      </p>
    </>
  );
}
