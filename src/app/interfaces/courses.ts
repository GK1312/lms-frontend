import { StaticImageData } from "next/image";

export default interface CourseCardType {
  url: string;
  thumbnail: StaticImageData;
  alt: string;
  tag: string;
  rating: number;
  title: string;
  author: string;
  prise: string;
}
