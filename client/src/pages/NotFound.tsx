import { Link } from "wouter";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0a0a0a]">
      <div className="container text-center py-20">
        <h1 className="text-6xl sm:text-8xl font-bold text-[var(--color-lime)] mb-4">
          404
        </h1>
        <p className="text-xl sm:text-2xl text-white/70 mb-8">
          Page not found
        </p>
        <Link
          href="/"
          className="inline-block px-6 py-3 bg-[var(--color-lime)] text-black font-bold rounded-lg hover:shadow-[0_0_20px_rgba(200,255,0,0.3)] transition-all duration-200"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
