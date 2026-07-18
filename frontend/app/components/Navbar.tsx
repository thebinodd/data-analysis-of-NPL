"use client"
import Link from 'next/link'
import React from 'react'
import {useRouter} from 'next/navigation'

type Input = {
  heading?: string,
  isHome:Boolean
}

const Navbar = ({ heading , isHome }: Input) => {
  const router = useRouter()
  return (
    <div>

        <header className="flex  lg:max-w-[60vw] lg:mt-10 mt-5 w-[90vw] items-center justify-between rounded-xl border-4 border-neutral-950 bg-white px-4 py-3 shadow-[6px_6px_0_0_#111827] sm:px-6">
          <div className="flex items-center gap-3">
            <img src="https://npl-t20.com/assets/mainlogohighquality-BTC_taV3.png" className="h-8 hidden lg:flex rounded-xl border-slate-800 border-b-6 border-r-4" alt="NPL logo" />
            <div className={'flex-col  md:flex lg:flex'}>
              <p className="text-xs font-bold uppercase lg:tracking-[0.35em] text-neutral-600">
                Data Analysis
              </p>
              <p className="text-sm hidden lg:flex font-semibold  text-neutral-950">
                {heading}
              </p>
              <p className="text-sm lg:hidden tracking-widest  flex font-bold  text-neutral-600">
                of NPL
              </p>
            </div>
          </div>

          {
            isHome ? <nav className="flex items-center gap-2 md:flex">
            
            <Link className="rounded-lg border-2 border-neutral-950 bg-slate-300 px-4 py-2 text-xs font-semibold shadow-[3px_3px_0_0_#111827] transition hover:translate-x-px hover:translate-y-px hover:shadow-none" href="https://github.com/thebinodd/data-analysis-of-IPL" target="_blank">
              Github
            </Link>
            <Link className="rounded-lg border-2 border-neutral-950 bg-slate-300 px-4 py-2 text-xs font-semibold shadow-[3px_3px_0_0_#111827] transition hover:translate-x-px hover:translate-y-px hover:shadow-none" href="https://www.kaggle.com/datasets/samarpanrai/nepal-premier-league-2024-ball-by-ball-data?select=NPL-2024.csv" target="_blank">
              Datasets
            </Link>
            
            
          </nav> : <nav className="flex items-center gap-2 md:flex">
            <button onClick={()=>router.back()} className="rounded-lg border-2 border-neutral-950 bg-yellow-300 px-6 py-2 text-xs font-semibold shadow-[3px_3px_0_0_#111827] transition hover:translate-x-px hover:translate-y-px hover:shadow-none cursor-pointer"  >
              ← Back
            </button>
            <button onClick={() => router.push('/')} className="rounded-lg border-2 border-neutral-950 bg-yellow-300 px-6 py-2 text-xs font-semibold shadow-[3px_3px_0_0_#111827] transition hover:translate-x-px hover:translate-y-px hover:shadow-none "  >
              Home
            </button>
            
            
          </nav>
          
          }
        </header>
      
    </div>
  )
}

export default Navbar
