'use client'
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import { leapfrog } from 'ldrs';

import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

export default function Home() {
  const [isLoading, setLoading] = useState(false);
  const router = useRouter();

  leapfrog.register();

  useEffect(() => {
    setLoading(false);
  }, [pathname]);

  return (
    <div className="bg-background h-screen w-full">
      <Header />
      <Hero />
      <Footer />
    </div>
  );
}