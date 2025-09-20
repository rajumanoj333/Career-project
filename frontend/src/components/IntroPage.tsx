import { Squares } from "@/components/ui/squares-background";
import { Navbar1 } from "@/components/blocks/shadcnblocks-com-navbar1";
import { Link } from "react-router-dom"; // Use Link from react-router-dom
import { Zap, Book, Trees, Sunset } from "lucide-react";

const demoData = {
  logo: {
    url: "/",
    src: "https://www.shadcnblocks.com/images/block/block-1.svg",
    alt: "Career AI Platform",
    title: "CareerMentorAI",
  },
  menu: [
    { title: "Home", url: "/" },
    {
      title: "Features",
      url: "#",
      items: [
        {
          title: "AI Assessment",
          description: "Discover your strengths and aptitudes with AI",
          icon: <Zap className="size-5 shrink-0" />,
          url: "/features/assessment",
        },
        {
          title: "Mentorship",
          description: "Connect with verified mentors across industries",
          icon: <Trees className="size-5 shrink-0" />,
          url: "/features/mentorship",
        },
        {
          title: "Career Roadmap",
          description: "Get a personalized career pathway",
          icon: <Book className="size-5 shrink-0" />,
          url: "/features/roadmap",
        },
        {
          title: "Financial Planning",
          description: "Scholarships, ROI analysis & cost calculators",
          icon: <Sunset className="size-5 shrink-0" />,
          url: "/features/finance",
        },
      ],
    },
    { title: "Pricing", url: "/pricing" },
    { title: "Blog", url: "/blog" },
  ],
  auth: {
    login: { text: "Login", url: "/login" },
    signup: { text: "Register", url: "/register" },
  },
};

export default function IntroPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#060606] text-white">
      {/* Navbar */}
      <Navbar1 {...demoData} />

      {/* Hero Section */}
      <div className="relative flex-1 flex items-center justify-center overflow-hidden">
        <Squares
          direction="diagonal"
          speed={0.5}
          squareSize={40}
          borderColor="#333"
          hoverFillColor="#222"
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            AI-Powered Career Guidance & Mentorship
          </h1>
          <p className="max-w-2xl text-lg md:text-xl text-gray-300 mb-8">
            Personalized assessments, mentorship, and real-time insights to
            shape your career journey with confidence.
          </p>

          <div className="flex gap-4">
            <Link
              to="/login"
              className="px-6 py-3 bg-white text-black font-medium rounded-lg shadow hover:bg-gray-200 transition"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg shadow hover:bg-indigo-500 transition"
            >
              Register
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-20 px-6 md:px-16 bg-black">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Why Choose CareerMentorAI?
        </h2>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            {
              icon: <Zap className="w-10 h-10 text-indigo-400" />,
              title: "AI Assessments",
              desc: "Discover strengths with psychometrics, skills & aptitude testing.",
            },
            {
              icon: <Trees className="w-10 h-10 text-green-400" />,
              title: "Mentorship",
              desc: "Connect with mentors for guidance, video sessions & progress tracking.",
            },
            {
              icon: <Book className="w-10 h-10 text-yellow-400" />,
              title: "Career Roadmap",
              desc: "AI-powered roadmap tailored to your goals and market trends.",
            },
            {
              icon: <Sunset className="w-10 h-10 text-pink-400" />,
              title: "Financial Planning",
              desc: "ROI analysis, scholarships, and financial aid recommendations.",
            },
            {
              icon: <Zap className="w-10 h-10 text-red-400" />,
              title: "Real-Time Insights",
              desc: "Stay updated with job trends, salaries, and future opportunities.",
            },
            {
              icon: <Book className="w-10 h-10 text-blue-400" />,
              title: "Analytics Dashboard",
              desc: "Track progress, performance, and set achievable goals.",
            },
          ].map((f, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl bg-[#111] border border-gray-800 shadow hover:shadow-lg transition"
            >
              {f.icon}
              <h3 className="mt-4 text-xl font-semibold">{f.title}</h3>
              <p className="mt-2 text-gray-400">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-6 md:px-16 bg-[#0a0a0a]">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Trusted by Students & Parents
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="p-6 rounded-xl bg-[#111] border border-gray-800">
            <p className="text-gray-300">
              “CareerMentorAI helped me discover my passion for Data Science and
              connected me with a mentor who guided me through my journey. I now
              feel confident about my future.”
            </p>
            <h4 className="mt-4 font-semibold">— Ananya, Student (India)</h4>
          </div>
          <div className="p-6 rounded-xl bg-[#111] border border-gray-800">
            <p className="text-gray-300">
              “As a parent, I wanted clarity on my son’s career options. The
              platform gave us financial insights and mentorship support. Truly
              a game-changer.”
            </p>
            <h4 className="mt-4 font-semibold">— Rajesh, Parent (UK)</h4>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-indigo-600 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Shape Your Future?
        </h2>
        <p className="mb-8 text-lg text-indigo-100">
          Join thousands of students and parents using CareerMentorAI.
        </p>
        <div className="flex justify-center gap-4">
            <Link
            to="/register"
            className="px-6 py-3 bg-white text-black font-medium rounded-lg shadow hover:bg-gray-200 transition"
          >
            Get Started
          </Link>
          <Link
            to="/login"
            className="px-6 py-3 bg-black text-white font-medium rounded-lg shadow hover:bg-gray-900 transition"
          >
            Login
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-sm text-gray-500 bg-black">
        © 2025 CareerMentorAI. All rights reserved. |{" "}
        <Link to="/terms" className="hover:text-gray-300">
          Terms
        </Link>{" "}
        |{" "}
        <Link to="/privacy" className="hover:text-gray-300">
          Privacy
        </Link>
      </footer>
    </div>
  );
}
