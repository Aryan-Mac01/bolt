import { Link } from 'react-router-dom';
import { Sparkles } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
      <div className="container mx-auto px-4 py-16">
        <nav className="flex justify-between items-center mb-16">
          <div className="flex items-center space-x-2 text-white">
            <Sparkles className="h-8 w-8" />
            <span className="text-2xl font-bold">ModernAuth</span>
          </div>
          <div className="space-x-4">
            <Link
              to="/login"
              className="px-6 py-2 text-white hover:text-indigo-100 transition-colors"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="px-6 py-2 bg-white text-indigo-600 rounded-lg hover:bg-indigo-50 transition-colors"
            >
              Sign Up
            </Link>
          </div>
        </nav>

        <div className="max-w-3xl mx-auto text-center text-white mt-32">
          <h1 className="text-6xl font-bold mb-8">
            Welcome to the Future of Authentication
          </h1>
          <p className="text-xl mb-12">
            Experience seamless, secure, and modern authentication for your applications.
          </p>
          <Link
            to="/signup"
            className="inline-block px-8 py-3 bg-white text-indigo-600 rounded-lg text-lg font-semibold hover:bg-indigo-50 transition-colors"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
}