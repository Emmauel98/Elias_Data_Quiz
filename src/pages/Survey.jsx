import chevron_left from "../assets/chevron_left.svg";
import arrow_right from "../assets/arrow-right.svg";
import {  useNavigate } from "react-router-dom";
import surveyQuestions from "../datas/question";
import {  useRef, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import Rating from "../components/Rating";

const Survey = () => {
  const navigate = useNavigate();
  const surveyQueus = useRef();
  const [navigateQuestion, setNavigateQuestion] = useState(0);
  const progressRef = useRef();
  const name = JSON.parse(sessionStorage.getItem('userName'));
  const [words , setWords] = useState(0);

  console.log(name, "userName");
 

const [questions, setQuestions] = useState({name});

const submitQuestions = (e) =>{
  setQuestions({...questions, [e.target.name]: e.target.value}); 
  setWords(e.target.value.length);
  console.log(questions);
};

const post_questions = async (rating) =>{
    try {
      console.log(questions, "Questions created");
      const url = "https://elias-data.onrender.com/api/v1/eliasdata/question";
      const data = {...questions, "rating": rating };
      console.log(data);
      if (data.name && data.question1 && data.question2 && data.question3 && data.rating) {
        const response = await axios.post(url, data);
        console.log(response);
      }else{
        toast("Please fill all fields")
      }
    } catch (error) {
      toast("An error occurred. Please try again");
      console.log("An error occured");
    }
};

  const changeQuestions = (id) => {
    setNavigateQuestion(id);
    // console.log(progressRef.current.style.width,    "PPSSPP");
    if (progressRef.current.style.width === "") {
        progressRef.current.style.width = `${"34"}%`;
    }else{
        const newProgress = parseInt(progressRef.current.style.width, 10) + 33;
        progressRef.current.style.width = `${newProgress}%`;
    }
    if (id === 4) {
      // return console.log(questions, "Progress");
      if (questions) {
        const rating =JSON.parse(localStorage.getItem("rating"));
        post_questions(rating);
        navigate('/success');
        console.log(rating);
        console.log(questions);
      }
    }
    surveyQueus.current.children[id - 1].style.display = "none";
    surveyQueus.current.children[id].style.display = "block";
    setWords(0)
  };

  const goBack = () => {
    if (navigateQuestion === 0) {
      navigate(-1); // This will navigate back to the previous page in the history stack.
    } else {
        // console.log( parseInt(progressRef.current.style.width, 10) - 33, "calc");
      const newProgressBackwards = parseInt(progressRef.current.style.width, 10) - 33;
    //   console.log(newProgressBackwards, "Pro02");
      progressRef.current.style.width = `${newProgressBackwards}%`;
      setNavigateQuestion(navigateQuestion - 1);
    //   console.log(surveyQueus.current.children);
    //   console.log(navigateQuestion, "IDD");
    //   console.log(surveyQueus.current.children[navigateQuestion]);
      surveyQueus.current.children[navigateQuestion - 1].style.display =
        "block";
      surveyQueus.current.children[navigateQuestion].style.display = "none";
      setWords(0);
    }
  };
  return (
    <>
      <div className="h-screen p-[5vw] lg:mx-[5vh] mb-5">
        <ToastContainer />
        <div className="flex gap-[70vw] md:gap-[80vw]">
          <div className="flex gap-[.5rem]" onClick={goBack}>
            <img src={chevron_left} alt="" />
            <h4
              className="text-[#A6A6A6] font-bold
                pt-[.2rem]
                "
            >
              Back
            </h4>
          </div>
          <p
            className="text-[1.3rem] font-bold 
             text-[#A6A6A6]
             "
          >
            {"1"}
          </p>
        </div>
        <div
          className="w-[100%] bg-[#404040] h-[3vh] rounded-2xl
        relative mt-[3vh]
        "
        >
          <div
            className={`absolute h-full w-[1%] bg-[#5957FF] rounded-2xl
            `}
            ref={progressRef}
          ></div>
        </div>
        <div className=" h-[90vh] overflow-hidden relative" ref={surveyQueus}>
          {surveyQuestions.map((survey) => {
            const { id, question, image, name } = survey;
            return (
              <div className="mt-[5vh]" key={id}>
                <img
                  src={image}
                  alt=""
                  className="rounded-2xl md:w-[100%] md:h-[25rem] h-[32vh] w-[100%]"
                />
                <p className="mt-[5vh] md:text-[2rem]">{question}</p>
                <br />
                {
                  id === 4 ? <Rating /> : null
                }
                {/* <div className={`${id === 4 ? "block" : "hidden"} relative z-50`}>
                 <Rating />
                </div> */}
                {/* <Rating /> */}
                <div>
                <textarea
                  name={name}
                  id=""
                  cols="32"
                  rows="3"
                  placeholder="Input your answer here"
                  className={`p-5 md:w-[100%] md:h-[10rem] ${id === 4 ? "hidden" : "block"}`}
                  onChange={submitQuestions}
                ></textarea>
                <p>No of words: {words} </p>
                </div>
                <div className="flex justify-center items-center mt-[2vh]">
                  <button
                    className={`w-full flex justify-center text-[1.2rem] gap-[.6rem]
                  md:text-[1.8rem]`}
                  
                    onClick={() => changeQuestions(id)}
                  >
                    {id === 4 ? "Submit" : "Next"}
                    <span>
                      <img
                        src={arrow_right}
                        className="w-[5.5vw] pt-[.4vh] md:pt-[.1vh]"
                      />
                    </span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};


export default Survey;
