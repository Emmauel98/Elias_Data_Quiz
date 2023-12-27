import { useEffect, useRef } from "react";
import "./pages.css";
import { useNavigate } from "react-router-dom";


const UsersName = () => {

    const starRef = useRef(null);
    const navigate = useNavigate();
    const inputRef = useRef();


  const createStar = () =>{

    const star = document.createElement('div');
    star.className = 'star';
    star.style.width = `${Math.random() * 3}px`;
    star.style.height = star.style.width;
    star.style.left = `${Math.random() * 100}vw`;
    star.style.top = `${Math.random() * 100}vh`;
    return star;
  };

  const generateStars = (star)=>{
    for (let i = 0; i < star; i++) {
      const star = createStar();
      // document.body.appendChild(star);
      starRef.current.appendChild(star);
    }
  };

  const navigateToSurvey =()=>{
   if (inputRef.current.value.length >= 8) {
    const name  = inputRef.current.value;
    sessionStorage.setItem('userName', JSON.stringify(name));
    navigate(`/survey`);
   }
  }
  
  useEffect(() => {
    generateStars(100);
  }); 

  return (
    <>
    <div ref={starRef} > 
    <form 
    className="flex justify-center items-center p-[5%] lg:px-[20vw]" 
    onSubmit={(e)=> e.preventDefault()}>
        <label htmlFor="" className="font-bold md:text-[2rem]">
            * Please Enter Your Full Name
            <input type="text" 
            className=" border-b-2 bg-transparent border-indigo-300
            w-full outline-none p-2
            " ref={inputRef} />
        </label>
    </form>
        <div 
        className="float-right px-10 md:text-[1.5rem] mr-[10vw] mt-[6vh]
        bg-gradient-to-r from-blue-700 via-blue-600 to-blue-400
        py-[.5rem] rounded-lg
        " 
        onClick={navigateToSurvey}>Continue</div>
    </div>
    </>
  )
}

export default UsersName;