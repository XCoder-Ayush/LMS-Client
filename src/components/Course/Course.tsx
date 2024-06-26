"use client";

import * as React from "react";

import { BellIcon, CheckIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type Course = {
  id: string;
  author: string;
  thumbnail: string;
  title: string;
  description: string;
  duration: Number;
  rating: Number;
  enrolled: Number;
  price: Number;
};

type CourseProps = {
  course: Course;
  className?: string;
};

export function Course({ course, className, ...props }: CourseProps) {
  return (
    <Card className={cn("w-[450px]", className)} {...props}>
      <CardHeader className="h-[300px] ">
        <div className="w-full h-full ">
          <img
            src={course.thumbnail}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </CardHeader>

      <div className="px-4">
        <h3 className="py-4 text-3xl font-medium">{course.title}</h3>

        <p className="flex justify-between text-gray-500 py-2">
          <span>
            by <span className="font-semibold text-black">{course.author}</span>
          </span>
          <span>
            Duration:{" "}
            <span className="text-black font-semibold">
              {String(course.duration)} weeks
            </span>
          </span>
        </p>

        <p className="flex justify-between py-2">
          <span>
            Enrolled students:{" "}
            <span className="text-black font-semibold">
              {String(course.enrolled)}
            </span>
          </span>
          <span className="flex items-center gap-1 text-black font-semibold">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 1024 1024"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3zM664.8 561.6l36.1 210.3L512 672.7 323.1 772l36.1-210.3-152.8-149L417.6 382 512 190.7 606.4 382l211.2 30.7-152.8 148.9z"></path>
            </svg>
            {String(course.rating)}
          </span>
        </p>

        <p className="py-2 h-[125px] overflow-hidden line-clamp-3">
          {course.description}
        </p>
        <div className="flex justify-between items-center py-2 mb-4 mt-4">
          <p className="text-lg font-semibold">₹{String(course.price)}</p>
          <Link href={`/checkout/${course.id}`} passHref>
            <div className="rounded-lg transition-colors duration-300 flex justify-center bg-black text-white hover:bg-gray-800 py-3 px-6 cursor-pointer">
              Buy Now
            </div>
          </Link>
        </div>
      </div>
    </Card>
  );
}
