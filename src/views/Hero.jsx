import React, { useState } from 'react'
import mainbg from '/mainbg.mp4'
import { motion } from 'framer-motion'
import { FaTelegramPlane } from 'react-icons/fa'
import { SiTwitter } from 'react-icons/si'
import { MdEmail } from 'react-icons/md'
import { BsClipboard, BsClipboard2CheckFill } from 'react-icons/bs'
import { IoMdFingerPrint } from 'react-icons/io'

const Hero = () => {

    const [contractAddress, setContract] = useState('0x00000000000000000000000000000')
    const [debounce, setDebounce] = useState(false)

    const title = 'IPSUM DEUS'
    const arr = title.split('')

    const handleCopy = () => {
        if (!debounce) {
            setDebounce(true)
            navigator.clipboard.writeText(contractAddress)
            setTimeout(() => {
                setDebounce(false)
            }, 1500);
        }
    }
    return (
        <section className="bg-black relative w-full h-auto text-white">

            <video autoPlay loop muted className='w-full h-screen'>
                <source src={mainbg} type="video/mp4" />
            </video>

            <div className="w-full h-screen bg-black/40 absolute top-0 left-0 z-[2]"></div>

            <div className="absolute top-0 left-0 w-full h-screen flex flex-col items-center justify-center z-10 font-albertus">

                <IoMdFingerPrint className='text-3xl text-white left-5 bottom-5 absolute cursor-pointer' />
                <nav className="absolute w-full left-0 top-0 z-20 flex justify-between pointer-events-auto">
                    <img src="/logo.webp" alt="Logo" className="w-20 m-5 2xl:w-28" />

                    <h2 className='font-copper m-4 2xl:text-2xl'>ipsumdeus@gmail.com</h2>

                </nav>

                <div className="text-orng shad glow font-bold">
                    <div className="flex items-center justify-center gap-x-3 text-xl md:text-3xl 2xl:text-5xl 2xl:gap-x-7">
                        <motion.h2 initial={{ y: -150, opacity: 0, color: '#6B0E67' }} animate={{ y: 0, opacity: 1, color: '#F9AA22' }} transition={{ duration: 1, delay: 1.5, ease: [0.16, 0.77, 0.47, .97] }} className=' '>THE GOD HIMSELF</motion.h2>
                    </div>

                    <div className="flex mt-2 items-center justify-center gap-x-2 text-4xl md:text-7xl 2xl:text-9xl 2xl:gap-x-3">
                        {arr.map((items, i) => {
                            return (
                                <motion.h2 initial={{ y: -300, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1.5, type: "spring", stiffness: 90, delay: i * 0.1 }} key={i}>
                                    {items}
                                </motion.h2>
                            )
                        })}
                    </div>
                </div>


                <motion.div initial={{ y: 150, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 2, delay: 1.5, ease: [0.16, 0.77, 0.47, .97] }} className="pointer-events-auto mt-5">
                    <button className="flex 2xl:w-[18rem] 2xl:h-[3.5rem] md:w-[14rem] w-[12rem] relative h-[2.7rem] mx-auto md:mt-8 group text-orng font-bold">
                        <div className="w-full h-full border-t-[1px] boder-white border-b-[1px] flex items-center justify-center font-copper group-hover:bg-[#6B0E67]/30 group-hover:font-bold transition-bg ease-in-out duration-300 2xl:text-xl border-orng">
                            <h2>BUY TOKEN</h2>
                        </div>

                    </button>

                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5, delay: 0.5 }} className="z-10 items-center mt-2 justify-center gap-x-2 pointer-events-auto w-fit mx-auto cursor-pointer md:text-base md:hidden flex " onClick={handleCopy}>
                        {debounce ? <BsClipboard2CheckFill /> : <BsClipboard className='' />}

                        <p className="font-copper text-xs 2xl:text-xl">{contractAddress}</p>
                    </motion.div>

                </motion.div>
            </div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5, delay: 0.5 }} className="absolute bottom-5 left-0 right-0 z-10 items-center mt-2 justify-center gap-x-2 pointer-events-auto w-fit mx-auto cursor-pointer md:text-base md:flex hidden " onClick={handleCopy}>
                {debounce ? <BsClipboard2CheckFill /> : <BsClipboard className='' />}

                <p className="font-copper text-sm 2xl:text-xl">{contractAddress}</p>
            </motion.div>

            <div className="soc absolute text-white text-2xl bottom-4 right-4 gap-x-5 flex pointer-events-auto z-10">
                <button className='hover:scale-110'>
                    <a href="" className="" rel="noopener noreferrer" target="_blank">
                        <FaTelegramPlane />
                    </a>
                </button>

                <button className='hover:scale-110'>
                    <a href="" className="" rel="noopener noreferrer" target="_blank">
                        <SiTwitter />
                    </a>
                </button>

                <button className='hover:scale-110'>
                    <a href="mailto:ipsumdeus@gmail.co" className="" rel="noopener noreferrer">
                        <MdEmail />
                    </a>
                </button>
            </div>

        </section >

    )
}

export default Hero