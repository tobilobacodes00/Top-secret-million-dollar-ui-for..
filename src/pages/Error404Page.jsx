import { Home } from "lucide-react";
import { Link } from "react-router-dom";
import FuzzyText from "../components/FuzzyText";

export default function Error404Page() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4 relative">
      <div className="text-center max-w-md mx-auto">
        {/* Large 404 Number */}
        <div className="mb-8 flex justify-center">
          <h1 className="text-9xl font-bold text-purple-600 mb-2 tracking-tight">
            <FuzzyText color="#9333ea" fontSize="clamp(2rem, 10vw, 10rem)">
              404
            </FuzzyText>
          </h1>
        </div>

        {/* Error Message */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-purple-800 mb-3">
            Page Not Found
          </h2>
          <p className="text-purple-600 leading-relaxed">
            The page you're looking for doesn't exist or is currently in
            production...
          </p>
        </div>

        {/* Action Buttons */}
        <div className="space-y-4">
          <Link to="/">
            <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2 group">
              <Home className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
              Go to Homepage
            </button>
          </Link>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-purple-700 rounded-full opacity-20 blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-600 rounded-full opacity-15 blur-2xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-purple-800 rounded-full opacity-10 blur-3xl"></div>
      </div>
    </div>
  );
}
