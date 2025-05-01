import React from "react";
import Lmsheader from "@/components/lmsheader";
import Sidebar from "@/components/sidebar";
import Link from "next/link";

const Page = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar (Fixed on Desktop) */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex flex-col flex-1">
        {/* Header */}
        <Lmsheader />

        {/* Content Section */}
        <main className="flex-1 flex flex-col items-center justify-start pt-30 sm:pt-30 px-4 sm:px-6 bg-gray-100 text-center">
        {/* Responsive Gradient Title */}
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-purple-500 via-indigo-600 to-purple-700 bg-clip-text text-transparent mt-8 sm:mt-4">
            Prepare for NUST Entry Test
          </h2>

          <p className="mt-1 sm:mt-2 text-sm sm:text-base md:text-lg text-gray-700 max-w-md sm:max-w-2xl">
            Ace your university entry test with our practice exams and expert strategies.
          </p>

          {/* Start Test Button (Now a Link) */}
          <Link href="/quiz/start-test">
            <button className="mt-6 sm:mt-4 px-4 py-2 text-sm sm:text-lg font-semibold text-white bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 transition-all">
              Start Your Test
            </button>
          </Link>

          {/* Additional Link */}
          <Link href="/test-info" className="mt-1 sm:mt-2 text-sm text-purple-600 hover:underline">
            Learn more about the test
          </Link>
        </main>
      </div>
    </div>
  );
};

export default Page;
