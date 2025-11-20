import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, Star, Sparkles, ArrowRight, ListTodo, ArrowUpRight } from "lucide-react";

export default function ClientLandingPage() {
  return (
    <div className="w-full min-h-screen bg-[#0a0d10] text-white overflow-x-hidden">

      {/* NAVBAR */}
      <Navbar />

      {/* HERO */}
      <HeroSection />

      {/* FEATURES */}
      <FeaturesSection />

      {/* PRODUCT PREVIEW */}
      <ProductPreview />

      {/* TESTIMONIALS */}
      <TestimonialsSection />

      {/* PRICING */}
      <PricingSection />

      {/* CTA */}
      <CTASection />

      {/* FOOTER */}
      <Footer />
    </div>
  );
}

/********************************************************
 *                      NAVBAR
 ********************************************************/
function Navbar() {
  return (
    <div className="fixed top-0 left-0 w-full bg-[#0d1117]/90 backdrop-blur-xl border-b border-white/10 py-4 px-6 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        <div className="flex items-center gap-2 font-bold text-xl">
          <ListTodo size={26} className="text-[#2f81f7]" />
          ToDoPro
        </div>

        <div className="hidden md:flex items-center gap-10 text-gray-400 font-medium">
          <a href="#features" className="hover:text-white">Features</a>
          <a href="#testimonials" className="hover:text-white">Reviews</a>
          <a href="#pricing" className="hover:text-white">Pricing</a>
        </div>

        <button className="bg-[#2f81f7] px-6 py-2 rounded-full text-sm font-semibold">
          Login
        </button>

      </div>
    </div>
  );
}

/********************************************************
 *                      HERO
 ********************************************************/
function HeroSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 pt-36 pb-32 text-center">
      
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-6xl font-extrabold leading-tight"
      >
        Master Your Day,  
        <br />
        <span className="text-[#2f81f7]">One Task at a Time.</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="mt-5 text-gray-300 max-w-2xl mx-auto text-lg"
      >
        A premium, distraction-free To-Do app designed for people who value clarity,
        speed and a beautifully designed workflow.
      </motion.p>

      <motion.button
        whileHover={{ scale: 1.07 }}
        whileTap={{ scale: 0.92 }}
        className="mt-8 px-8 py-3 bg-[#2f81f7] rounded-full font-semibold flex items-center mx-auto gap-2 shadow-lg"
      >
        Start Free <ArrowRight size={18} />
      </motion.button>

      <motion.img
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        src="https://cdn.pixabay.com/photo/2016/12/28/09/36/checklist-1930675_1280.png"
        alt="todo-illustration"
        className="w-full max-w-3xl mx-auto mt-16 drop-shadow-2xl rounded-xl"
      />
    </section>
  );
}

/********************************************************
 *                      FEATURES
 ********************************************************/
function FeaturesSection() {
  return (
    <section id="features" className="bg-[#0d1117] py-24">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
        Built for Speed. <span className="text-[#2f81f7]">Designed for You.</span>
      </h2>

      {/* Horizontal Cards */}
      <div className="max-w-6xl mx-auto flex flex-col gap-8 px-6 md:px-12">

        <FeatureCard
          title="Smart Task Sorting"
          desc="AI-enhanced task suggestions & intelligent auto-grouping."
        />

        <FeatureCard
          title="Insightful Weekly Reports"
          desc="Understand your habits with detailed productivity analytics."
        />

        <FeatureCard
          title="Cross-Device Sync"
          desc="Your tasks are instantly updated across all devices."
        />

        <FeatureCard
          title="Team Collaboration"
          desc="Assign tasks, share lists and work together effortlessly."
        />

      </div>
    </section>
  );
}

function FeatureCard({ title, desc }) {
  return (
    <motion.div
      whileHover={{ scale: 1.015, x: 10 }}
      transition={{ type: "spring", stiffness: 200 }}
      className="
        flex items-center gap-6
        bg-[#1a1f24]
        border border-white/10
        p-6
        rounded-xl
        shadow-xl
        cursor-pointer
        min-w-[320px]
      "
    >
      <div className="bg-[#2f81f7]/20 p-4 rounded-xl">
        <Sparkles size={28} className="text-[#2f81f7]" />
      </div>

      <div>
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-gray-400 mt-2">{desc}</p>
      </div>

      <ArrowUpRight className="ml-auto text-[#2f81f7]" />
    </motion.div>
  );
}

/********************************************************
 *               PRODUCT PREVIEW SECTION
 ********************************************************/
function ProductPreview() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-12">
        A Clean Dashboard That Boosts Your Focus
      </h2>

      <motion.img
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        src="https://cdn.pixabay.com/photo/2015/01/21/14/14/iphone-606761_1280.png"
        className="w-full max-w-4xl mx-auto rounded-xl shadow-2xl"
      />
    </section>
  );
}

/********************************************************
 *                   TESTIMONIALS
 ********************************************************/
function TestimonialsSection() {
  return (
    <section id="testimonials" className="bg-[#111418] py-24">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
        Trusted by People who Love Productivity ❤️
      </h2>

      <div className="max-w-6xl mx-auto flex flex-col gap-10 px-6">

        <TestimonialCard
          name="Riya Sharma"
          text="Perfect design. Perfect speed. I use it daily to organize my work & life!"
        />

        <TestimonialCard
          name="Aditya Verma"
          text="This app literally changed how I organize my tasks. Amazing UX!"
        />

        <TestimonialCard
          name="Sarah Wilson"
          text="Elegant, fast and extremely useful. Absolutely love the animations!"
        />

      </div>
    </section>
  );
}

function TestimonialCard({ name, text }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -15 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-[#1a1f24] border border-white/10 p-6 rounded-xl shadow-lg flex gap-6"
    >
      <div className="w-14 h-14 bg-gray-700 rounded-full" />

      <div>
        <p className="text-gray-300 italic mb-3">
          <Star className="inline text-yellow-400" /> “{text}”
        </p>
        <h4 className="font-semibold">{name}</h4>
      </div>
    </motion.div>
  );
}

/********************************************************
 *                     PRICING
 ********************************************************/
function PricingSection() {
  return (
    <section id="pricing" className="max-w-6xl mx-auto px-6 py-24">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
        Simple Pricing that Fits Your Workflow
      </h2>

      <div className="grid md:grid-cols-3 gap-8">

        <PricingCard
          title="Free"
          price="$0"
          features={["Unlimited tasks", "Basic stats", "Sync enabled"]}
        />

        <PricingCard
          title="Pro"
          price="$4.99"
          highlighted={true}
          features={[
            "Advanced analytics",
            "Task sharing",
            "Priority theme",
            "AI task sorting",
          ]}
        />

        <PricingCard
          title="Business"
          price="$14.99"
          features={["Workspaces", "Team tools", "Admin controls"]}
        />

      </div>
    </section>
  );
}

function PricingCard({ title, price, features, highlighted }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      className={`p-6 rounded-xl shadow-lg border ${
        highlighted
          ? "border-[#2f81f7] bg-[#1a1f24]"
          : "border-white/10 bg-[#0f1215]"
      }`}
    >
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <p className="text-4xl font-bold mb-6">{price}</p>

      <ul className="space-y-4 mb-6">
        {features.map((f, i) => (
          <li key={i} className="flex items-center gap-2 text-gray-300">
            <CheckCircle size={16} className="text-green-400" /> {f}
          </li>
        ))}
      </ul>

      <button
        className={`w-full py-2 rounded-lg ${
          highlighted ? "bg-[#2f81f7]" : "bg-gray-700"
        }`}
      >
        Choose Plan
      </button>
    </motion.div>
  );
}

/********************************************************
 *                       CTA
 ********************************************************/
function CTASection() {
  return (
    <section className="py-24 text-center bg-[#0a0d10]">
      <h2 className="text-3xl md:text-4xl font-bold mb-6">
        Start Building Better Habits Today
      </h2>
      <p className="text-gray-400 max-w-xl mx-auto mb-8">
        Join thousands of users making their lives more intentional & organized.
      </p>
      <motion.button
        whileHover={{ scale: 1.08 }}
        className="bg-[#2f81f7] px-10 py-3 rounded-full font-semibold"
      >
        Get Started for Free
      </motion.button>
    </section>
  );
}

/********************************************************
 *                      FOOTER
 ********************************************************/
function Footer() {
  return (
    <footer className="bg-[#0a0d10] py-10 text-center text-gray-400 text-sm">
      <p>© {new Date().getFullYear()} ToDoPro · All rights reserved</p>
      <p className="mt-2">Designed with ❤️ using React + Tailwind + Motion</p>
    </footer>
  );
}
