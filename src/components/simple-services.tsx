"use client";

import React from "react";
import { HardDrive, Cpu, Layers, ArrowRight } from "lucide-react";

const services = [
  {
    title: "SCOPE Platform",
    description: "Architected a MERN-based LMS platform with Razorpay and secure JWT auth for 1,000+ users.",
    icon: HardDrive,
    color: "bg-blue-500",
  },
  {
    title: "ChatX AI Suite",
    description: "Developed a real-time AI chat ecosystem with three custom OpenAI-powered bot personalities.",
    icon: Cpu,
    color: "bg-purple-500",
  },
  {
    title: "REFLECTO Systems",
    description: "Engineered high-performance enterprise feedback systems with 3D visualizations and Docker.",
    icon: Layers,
    color: "bg-emerald-500",
  },
];

export function SimpleServices() {
  return (
    <section className="w-full py-24 bg-[#f5f5f7]">
      <div className="max-w-[980px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-[40px] md:text-[56px] apple-display mb-4 tracking-tighter">
            Architectural <span className="text-apple-blue italic">Insight.</span>
          </h2>
          <p className="text-[#86868b] text-[17px] md:text-[21px] font-normal max-w-2xl mx-auto">
            High-performance solutions designed for scale and precision.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group p-8 rounded-[24px] bg-white border border-black/5 hover:border-black/10 hover:shadow-xl transition-all duration-500"
            >
              <div className={`w-12 h-12 rounded-xl ${service.color} flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-500`}>
                <service.icon size={24} />
              </div>
              <h3 className="text-2xl font-semibold mb-3 tracking-tight">{service.title}</h3>
              <p className="text-[#86868b] text-[17px] leading-relaxed mb-6">
                {service.description}
              </p>
              <button className="flex items-center text-apple-blue font-medium hover:gap-2 transition-all">
                Learn more <ArrowRight size={18} className="ml-1" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
