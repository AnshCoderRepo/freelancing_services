"use client";
import React from "react";
import Bucket from "@/components/ui/bucket";

export function BucketSection() {
  return (
    <section className="w-full bg-black py-24 flex flex-col items-center px-4 md:px-6">
      <div className="w-full max-w-[980px] text-center mb-16 px-6">
        <h2 className="text-[40px] md:text-[56px] apple-display mb-4 tracking-tighter">
          Engineered for <span className="text-apple-blue italic">Scale.</span>
        </h2>
        <p className="text-[#86868b] text-[17px] md:text-[21px] font-normal max-w-2xl mx-auto">
          Every component is meticulously crafted to ensure peak performance and seamless user experiences.
        </p>
      </div>
      <div className="w-full flex justify-center overflow-hidden">
        <Bucket />
      </div>
    </section>
  );
}
