import React from 'react'
import { motion, transform } from "motion/react"
import logo from "../assets/logo.png"

function Navbar() {
  return (
    <motion.div
     initial={{opacity:0,y:-15}}
        animate={{opacity:1,y:0}}
        transition={{duration:1.5}}
         className='relative z-20 mx-6 mt-6 rounded-2xl bg-gradient-to-br from-black/90 via-black/80 to-black/90 backdrop-blur-2xl border border-white/10 shadow-[0_22px_55px_rgba(0,0,0,0,75)] flex items-center justify-between px-8 py-4'>
        
       <div className='items-center flex gap-3 '>
        <img src={logo} alt="classnotes" className='w-9 h-9'/>
        <span className='text-lg hidden md:block font-semibold text-white'>
          ExamNotes<span className='text-gray-400'> AI</span>
        </span>
       </div>
       <div className='flex items-center gap-6 relative'>
        <div className='relative'></div>
       </div>
    </motion.div>
   
  )
}

export default Navbar