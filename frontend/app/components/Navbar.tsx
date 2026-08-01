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

        <header className={`flex  lg:max-w-[90vw]   w-[90vw] items-center justify-between rounded-sm  border-neutral-950 bg-white  ${isHome ? "px-4 py-3 border-b-4" : "px-4 py-1 border-b-2"}  sm:px-6`}>
          <div className="flex items-center gap-3 w-auto">
            <img src="https://nepalpostkhabar.com/wp-content/uploads/2024/12/Nepal_Premier_League2024.png" className="h-14 hidden lg:flex rounded-xl " alt="NPL logo" />
            <div className={'flex-col  md:flex lg:flex'}>
              <p className="text-xs font-bold uppercase lg:tracking-[0.35em] text-neutral-600">
                Data Analysis
              </p>
              <p className="text-sm hidden lg:tracking-widest lg:flex font-semibold  text-neutral-950">
                {heading}
              </p>
              <p className="text-sm lg:hidden tracking-widest  flex font-bold  text-neutral-900">
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
