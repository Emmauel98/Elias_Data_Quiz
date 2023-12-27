import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


const WelcomePage = () => {

    const navigate = useNavigate();

    useEffect(()=>{
        setTimeout(()=>{
            navigate("instruction");
        }, 2000)
    })
  return (
    <>
    <div className="
    bg-white flex-1 justify-center items-center h-screen
    w-screen bg-gradient-to-b from-blue-700
    via-blue-600 to-blue-400 
    "
    >
      <motion.h1 className="
      text-white text-center lg:text-[1.7rem] lg:pt-[17rem]
      pt-[19rem] text-[1.5rem] font-medium md:pt-[27rem] 
      md:text-[2rem] welcome tracking-widest
      "
      whileInView={{
        y: 0,
        transition:{
          duration: .5,
          stiffness: 100,
          type: "spring",
          bounce: true,
        }
      }}
      initial={{
        y: -45,
      }}
      >
        SURVEY QUESTION <br /> by Elias Data Services
      </motion.h1>
    </div>
  </>
  )
}

export default WelcomePage