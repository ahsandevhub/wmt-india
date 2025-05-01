// app/not-found.jsx
"use client";

import { Ghost } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-100 to-yellow-200 px-4">
      <div className="text-center max-w-md">
        <Ghost className="mx-auto text-orange-600 w-16 h-16 mb-4" />
        <h1 className="text-4xl font-bold text-orange-700 mb-2">
          404 - Page Not Found
        </h1>
        <p className="text-gray-700 mb-6">
          Looks like the market moved, and this page doesn’t exist anymore.
        </p>
        <Link
          href="/"
          className="inline-block bg-orange-600 text-white px-6 py-3 rounded-full hover:bg-orange-700 transition"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}
