"use client";

import Link from "next/link";

export default function Custom404(){

  return(

    <main className="bg-black text-white min-h-screen flex items-center justify-center">

      <div className="text-center">

        <h1 className="text-7xl font-bold text-red-500">
          404
        </h1>

        <p className="text-xl mt-6 text-white/70">
          Oops! Page not found.
        </p>

        <Link
          href="/"
          className="inline-block mt-8 px-6 py-3 border border-white rounded-lg hover:bg-white hover:text-black transition"
        >
          Back to Home
        </Link>

      </div>

    </main>
  );
}