import { useNavigate } from "react-router-dom";
import "./pages.css";
import { motion } from "framer-motion";

const Instruction = () => {
  const navigate = useNavigate();
  return (
    <>
      <div
        className="bg-black w-screen overflow-hidden
      lg:p-[10vw]
      "
      >
        <div
          className="bg-[#AB421E] w-[40vh] h-[40vh]
          absolute top-[-20vh] right-[-20vw] rounded-full
          filter blur-2xl lg:right-0
          "
        ></div>
        <div
          className="bg-[#225AE3] w-[40vh] h-[40vh]
          absolute top-[1vh] right-[-45vw] rounded-full
          filter blur-2xl lg:right-[-10vw]
          "
        ></div>
        <h1
          className="text-center lg:text-[2rem] 
           text-[1.5rem] md:text-[2rem] font tracking-widest"
        >
          INSTRUCTION
        </h1>
        <motion.p className="m-[10vw] md:text-[1.4rem]"
        initial={{
          opacity: 0,
          y: -25,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition:{
            duration: .5,
            bounce: true,
            damping: 50,
            stiffness: 100,
            type: "tween"
          }
        }}
        >
          Survey Questions: The first two individuals to provide honest
          responses and submit will each receive 2GB of data as a New Year gift.
          Ensure that your answers are thorough, with a minimum of 20 words for
          each response.
        </motion.p>
        <div className="flex justify-center items-center">
          <button
            className="bg-[#225AE3] w-[30vw] h-[17vh] rounded-full
          filter drop-shadow-[0_-5px_15px_rgba(0,255,255,1)] mb-[10vh]
          md:w-[20vw] md:h-[15vh] md:font-bold md:text-[1.5rem] outline-none
          border-none
          "
            onClick={() => navigate("/user")}
          >
            START
          </button>
        </div>
      </div>
    </>
  );
};

export default Instruction;
