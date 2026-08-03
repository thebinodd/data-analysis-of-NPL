"use client";
import Link from "next/link";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function Home() {

  return (
    <main className="max-h-screen bg-[#FAF9F6]  text-neutral-950">
      <section className=" flex min-h-screen justify-center items-center w-screen  flex-col pb-5 sm:px-8 lg:px-10">
        
        <Navbar heading="NPL Insights" isHome={true} />

        <main className="flex flex-1 max-w-[90vw]  w-[90vw] items-center justify-center py-5 sm:py-14">
          <div className="grid w-full items-center   gap-8 lg:grid-cols-[1.15fr_0.85fr]">
            <section className="rounded-xl  w-[90vw] lg:py-10 flex flex-col justify-center items-start  gap-2 lg:gap-1  bg-white border-2 p-7  sm:p-10">
              <p className="inline-flex rounded-full border-2 border-neutral-950 bg-lime-300 px-4 py-2 text-xs font-bold uppercase ">
                Data from 2024 and 2025 NPL Seasons
              </p>

              <h1 className="mt-6 max-w-2xl lg:max-w-4xl text-2xl font-black leading-tight tracking-tight sm:text-5xl lg:text-4xl">
                A clean starting point for NPL data exploration.
              </h1>
              <p className="mt-5 max-w-2xl lg:max-w-4xl text-sm lg:leading-7 text-neutral-700 ">
                Presenting season trends, team performance,
                player impact, and match patterns from the Nepal Premier League
                dataset in a simple, readable experience. 
              </p>

              <div className="mt-8 flex flex-row gap-3 sm:flex-row">
                <Link
                  id="numeric"
                  href="/numeric"
                  className="inline-flex items-center justify-center rounded-xl border-2 border-neutral-950 bg-white px-6 py-3 text-xs  shadow-[6px_6px_0_0_#111827] transition hover:translate-x-px hover:translate-y-px hover:shadow-none"
                >
                  Numeric Stats
                </Link>
                <Link
                  id="graphical"
                  href="/graphical"
                  className="inline-flex items-center justify-center rounded-xl border-2 border-neutral-950 bg-white px-6 py-3 text-xs  shadow-[6px_6px_0_0_#111827] transition hover:translate-x-px hover:translate-y-px hover:shadow-none"
                >
                  Graphical Stats
                </Link>
              </div>
              <p className="lg:text-xs text-[12px] mb-1 mt-4 lg:mt-5 md:mt-4 text-slate-500 leading-4 text-muted-foreground">
                Disclaimer : The stats may slightly differ from the actual stats. The dataset used for this project is sourced from Kaggle and may contain discrepancies or errors that could affect the accuracy of the statistics presented.
              </p>
            </section>

             
          </div>
        </main>
        <Footer />
      </section>
      
    </main>
    
  );
}


