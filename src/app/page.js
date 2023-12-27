"use client"
import Link from "next/link"

export default function Home() {
  return (
    <>
      <div className="p-20 bg-slate-400 h-screen">
        <Link href='/productlist' className="py-2 px-6 bg-gray-950 rounded-lg font-bold text-white capitalize mx-5">Products</Link>
        <Link href='/quotes' className="py-2 px-6 bg-gray-950 rounded-lg font-bold text-white capitalize mx-5">quotes</Link>
      </div>

    </>
  )
}
