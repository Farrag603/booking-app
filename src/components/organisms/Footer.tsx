"use client";

import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-white px-8 py-12">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* ================= LOGO SECTION ================= */}
        <div>
          {/* 🔄 Replace with your Logo molecule */}
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 bg-blue-500 rounded" />
            <span className="text-2xl font-semibold">fleet</span>
          </div>

          {/* 🔄 Replace with your BrandDescription molecule */}
          <p className="text-sm text-gray-400">
            Book your trips easily and explore the world.
          </p>
        </div>

        {/* ================= NAVIGATION COLUMN 1 ================= */}
        <div className="flex flex-col gap-3">
          {/* 🔄 Replace with your NavTitle molecule */}
          <h3 className="font-semibold text-lg">Company</h3>

          {/* 🔄 Replace with your NavLinks organism */}
          <Link href="/About" className="text-gray-400 hover:text-white">About</Link>
          <Link href="/Careers" className="text-gray-400 hover:text-white">Careers</Link>
          <Link href="/Press" className="text-gray-400 hover:text-white">Press</Link>
        </div>

        {/* ================= NAVIGATION COLUMN 2 ================= */}
        <div className="flex flex-col gap-3">
          {/* 🔄 Replace with your NavTitle molecule */}
          <h3 className="font-semibold text-lg">Support</h3>

          {/* 🔄 Replace with your NavLinks organism */}
          <Link href="/Contact" className="text-gray-400 hover:text-white">Contact</Link>
          <Link href="/Terms" className="text-gray-400 hover:text-white">Terms</Link>
          <Link href="/Help" className="text-gray-400 hover:text-white">Help Center</Link>
        </div>

        {/* ================= NEWSLETTER / COMMUNITY ================= */}
        <div>
          {/* 🔄 Replace with your NewsletterTitle molecule */}
          <h3 className="font-semibold text-lg mb-3">Join Our Community</h3>

          {/* 🔄 Replace with your NewsletterForm organism */}
          <div className="flex rounded-full overflow-hidden border border-gray-600">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 bg-transparent text-white placeholder-gray-400 outline-none"
            />
            <button className="bg-blue-600 px-4">→</button>
          </div>
        </div>
      </div>

      {/* ================= BOTTOM BAR ================= */}
      <div className="border-t border-gray-800 mt-12 pt-6 text-center text-gray-500 text-sm">
        {/* 🔄 Replace with your BottomBar molecule */}
        © 2025 Fleet. All rights reserved.
      </div>
    </footer>
  );
}
