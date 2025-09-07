"use client";

import { useState } from "react";
import { Input } from "@/components/atoms/input";

export default function Home() {
  const [searchValue, setSearchValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [messageValue, setMessageValue] = useState("");
  const [dateValue, setDateValue] = useState("");

  const handleSearchClear = () => {
    setSearchValue("");
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            🚀 Fleet Input Atom Testing
          </h1>
          <p className="text-lg text-gray-600">
            Testing all variants and states of our Input component
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Search Variants */}
          <div className="bg-white p-6 rounded-xl shadow-sm border">
            <h2 className="text-xl font-semibold mb-6 text-gray-800">
              🔍 Search Inputs
            </h2>
            <div className="space-y-6">
              <Input
                type="search"
                variant="search"
                placeholder="Search destinations..."
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                showClearButton
                onClear={handleSearchClear}
                size="lg"
                fullWidth
              />

              <Input
                type="search"
                variant="default"
                placeholder="Search properties"
                size="md"
                fullWidth
              />

              <Input
                type="search"
                variant="minimal"
                placeholder="Minimal search"
                size="sm"
                fullWidth
              />
            </div>
          </div>

          {/* Form Inputs */}
          <div className="bg-white p-6 rounded-xl shadow-sm border">
            <h2 className="text-xl font-semibold mb-6 text-gray-800">
              📝 Form Inputs
            </h2>
            <div className="space-y-6">
              <Input
                type="email"
                label="Email Address"
                placeholder="Enter your email"
                value={emailValue}
                onChange={(e) => setEmailValue(e.target.value)}
                helperText="We'll never share your email"
                fullWidth
              />

              <Input
                type="password"
                label="Password"
                placeholder="Enter password"
                value={passwordValue}
                onChange={(e) => setPasswordValue(e.target.value)}
                fullWidth
              />

              <Input
                type="tel"
                label="Phone Number"
                placeholder="+1 (555) 123-4567"
                fullWidth
              />
            </div>
          </div>

          {/* Date & Special Inputs */}
          <div className="bg-white p-6 rounded-xl shadow-sm border">
            <h2 className="text-xl font-semibold mb-6 text-gray-800">
              📅 Date & Special Inputs
            </h2>
            <div className="space-y-6">
              <Input
                type="date"
                label="Check-in Date"
                value={dateValue}
                onChange={(e) => setDateValue(e.target.value)}
                fullWidth
              />

              <Input
                type="number"
                label="Number of Guests"
                placeholder="2"
                size="md"
                fullWidth
              />

              <Input
                type="url"
                label="Website"
                placeholder="https://example.com"
                variant="floating"
                fullWidth
              />
            </div>
          </div>

          {/* Textarea & States */}
          <div className="bg-white p-6 rounded-xl shadow-sm border">
            <h2 className="text-xl font-semibold mb-6 text-gray-800">
              💬 Textarea & States
            </h2>
            <div className="space-y-6">
              <Input
                type="textarea"
                label="Message to Host"
                placeholder="Tell the host about your trip..."
                rows={4}
                value={messageValue}
                onChange={(e) => setMessageValue(e.target.value)}
                fullWidth
              />

              <Input
                type="text"
                label="Error State"
                placeholder="This has an error"
                state="error"
                errorMessage="This field is required"
                fullWidth
              />

              <Input
                type="text"
                label="Success State"
                placeholder="This is valid"
                state="success"
                helperText="Perfect! This looks good"
                fullWidth
              />
            </div>
          </div>
        </div>

        {/* Size Comparison */}
        <div className="bg-white p-6 rounded-xl shadow-sm border mt-8">
          <h2 className="text-xl font-semibold mb-6 text-gray-800">
            📏 Size Comparison
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="text-sm font-medium text-gray-600 mb-3">Small</h3>
              <Input
                type="text"
                size="sm"
                placeholder="Small input"
                fullWidth
              />
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-600 mb-3">
                Medium (Default)
              </h3>
              <Input
                type="text"
                size="md"
                placeholder="Medium input"
                fullWidth
              />
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-600 mb-3">Large</h3>
              <Input
                type="text"
                size="lg"
                placeholder="Large input"
                fullWidth
              />
            </div>
          </div>
        </div>

        {/* Variant Comparison */}
        <div className="bg-white p-6 rounded-xl shadow-sm border mt-8">
          <h2 className="text-xl font-semibold mb-6 text-gray-800">
            🎨 Variant Comparison
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-medium text-gray-600 mb-2">
                Default
              </h3>
              <Input
                type="text"
                variant="default"
                placeholder="Default variant"
                fullWidth
              />
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-600 mb-2">Search</h3>
              <Input
                type="search"
                variant="search"
                placeholder="Search variant"
                fullWidth
              />
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-600 mb-2">
                Floating
              </h3>
              <Input
                type="text"
                variant="floating"
                placeholder="Floating variant"
                fullWidth
              />
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-600 mb-2">
                Minimal
              </h3>
              <Input
                type="text"
                variant="minimal"
                placeholder="Minimal variant"
                fullWidth
              />
            </div>
          </div>
        </div>

        {/* Interactive Demo */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border-2 border-blue-200 mt-8">
          <h2 className="text-xl font-semibold mb-6 text-gray-800">
            🎪 Interactive Fleet Booking Demo
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Input
              bgToken="SECONDARY_1"
              type="search"
              variant="search"
              placeholder="London"
              size="lg"
            />
            <Input type="date" placeholder="Check-in" size="lg" />
            <Input type="date" placeholder="Check-out" size="lg" />
            <Input type="number" placeholder="2 guests" size="lg" />
          </div>
          <div className="mt-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors">
              Search Properties
            </button>
          </div>
        </div>

        {/* Values Display */}
        {(searchValue ||
          emailValue ||
          passwordValue ||
          messageValue ||
          dateValue) && (
          <div className="bg-gray-100 p-6 rounded-xl mt-8">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">
              📊 Current Values
            </h2>
            <div className="space-y-2 text-sm">
              {searchValue && (
                <p>
                  <strong>Search:</strong> {searchValue}
                </p>
              )}
              {emailValue && (
                <p>
                  <strong>Email:</strong> {emailValue}
                </p>
              )}
              {passwordValue && (
                <p>
                  <strong>Password:</strong> {"*".repeat(passwordValue.length)}
                </p>
              )}
              {messageValue && (
                <p>
                  <strong>Message:</strong> {messageValue}
                </p>
              )}
              {dateValue && (
                <p>
                  <strong>Date:</strong> {dateValue}
                </p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
