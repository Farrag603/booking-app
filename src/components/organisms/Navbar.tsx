"use client";

import React from "react";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#0a0a0a] h-[88px]">
      <div className="max-w-[1200px] mx-auto px-6 flex justify-between items-center h-full">
        {/* ================= LEFT SIDE ================= */}
        <div className="flex items-center gap-3">
          {/* 🔄 Replace this <div> with your Logo molecule */}
          <div className="w-7 h-7 bg-blue-500 rounded" />

          {/* 🔄 Replace this <span> with your BrandText molecule */}
          <span className="text-[1.5rem] font-semibold tracking-tight">
            fleet
          </span>

          {/* 🔄 Replace this button with your TravelersDropdown molecule */}
          <button
            className="ml-4 inline-flex items-center gap-1 text-[1.125rem] text-white/80 hover:text-white px-2 py-1 rounded hover:bg-white/5"
            aria-haspopup="menu"
          >
            <span>Travelers</span>
          </button>
        </div>

        {/* ================= RIGHT SIDE ================= */}
        <div className="flex items-center gap-4">
          {/* 🔄 Replace with your LanguageSelect molecule */}
          <a
            href="#"
            className="inline-flex items-center gap-1 text-white/80 hover:text-white text-base"
          >
            Language
          </a>

          {/* 🔄 Replace with your ListPropertyButton molecule */}
          <button className="rounded-full border border-white/25 px-4 py-1.5 text-white/90 hover:bg-white/10 text-base">
            List your property
          </button>

          {/* 🔄 Replace with your NotificationBell molecule */}
          <button
            className="p-2 rounded-full text-white/80 hover:text-white hover:bg-white/10"
            aria-label="Notifications"
          >
            Bell
          </button>

          {/* 🔄 Replace with your Avatar molecule */}
          <div className="w-8 h-8 bg-emerald-500 rounded-full" />
        </div>
      </div>
    </nav>
  );
}
