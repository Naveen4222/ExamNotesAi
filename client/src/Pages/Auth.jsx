import React from 'react'
import {motion} from "motion/react";

const Auth = () => {
  return (
    <>
    <div className="min-h-screen overflow-hidden bg-white text-black px-8">
        <motion.header
        initial ={{opacity:0 , y:-15}}
        animate={{opacity:1, y:0}}
        transition={{duration:1.5 }}
        className="max-w-7xl mx-auto mt-8 
        rounded-2xl bg-black/80 backdrop-blur-xl
        border border-white/10
        px-8 py-6
        shadow-[0_20px_45px_rgba(0,0,0,0.6]">

            <h1 className='text-2xl font-bold
            bg-gradient-to-r from-white via-gray-300 to-white
            bg-clip-text text-transparent '>ExamNotes Ai</h1>
            <p className='text-sm text-gray-300 mt-1'>
                AI-powered exam-oriented notes & revision
            </p>
        </motion.header>
    </div>
    </>
  )
}

export default Auth
