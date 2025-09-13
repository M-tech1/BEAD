import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import beadHead from "@/assets/beadHeader.jpg";

export default function Header() {
  return (
    <>
      <div className=" bg-black rounded-xl text-white flex flex-col md:flex-row items-center justify-center px-6 md:px-10 mt-10 w-full ">
        <div className=" grid sm:grid-cols-2 grid-cols-1">
          {/* Left Section */}
          <div className="flex-1 space-y-6 w-full px-5 items-center justify-center align-middle">
            <span className="bg-green-900 text-green-200 px-3 py-1 rounded-full text-sm">
              Transforming Education • Fighting Corruption
            </span>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight mt-9">
              Empowering <span className="text-green-500">Nigeria’s Youth</span>{" "}
              Through Integrity Education
            </h1>

            <p className="text-gray-400 pr-2">
              A nationwide initiative engaging millions of students in the fight
              against corruption through education and debate.
            </p>

            <div className="flex gap-4 w-full">
              <button className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg font-medium">
                Partner With Us
              </button>
              <button className="border border-gray-500 hover:border-white px-5 py-2 rounded-lg font-medium">
                ▶ Watch Preview
              </button>
            </div>

            <div className="flex gap-10 pt-8 w-full">
              <div>
                <h3 className=" text-green-600 hover:text-green-700 md:text-5xl text-2xl font-bold">
                  1M+
                </h3>
                <p className="text-gray-400 text-sm">Students Reached</p>
              </div>
              <div>
                <h3 className=" text-green-600 hover:text-green-700 md:text-5xl text-2xl font-bold">
                  36
                </h3>
                <p className="text-gray-400 text-sm">States Coverage</p>
              </div>
              <div>
                <h3 className="text-green-600 hover:text-green-700 md:text-5xl text-2xl font-bold">
                  365
                </h3>
                <p className="text-gray-400 text-sm">Days Program</p>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex-1 relative mt-10 md:mt-0 ">
            <div className=" flex absolute -top-6 -right-6 bg-green-600 text-black font-bold font-sans sm:text-[10px] text-[6px] px-4 py-2 rounded-full sm:h-20 sm:w-20 h-16 w-16  justify-center items-center">
              2025-26
            </div>
            <Image
              src={beadHead}
              alt="BEAD Flyer"
              className="rounded-xl shadow-lg"
              priority
            />
          </div>
        </div>
      </div>
    </>
  );
}
