import { useEffect, useState } from "react";
import successful_man from "../assets/successful_man.svg";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Successfull = () => {
  const [user1, setUser1] = useState("");
  const [user2, setUser2] = useState("");

  useEffect(() => {
    const fetchWinner = async () => {
      try {
        const response = await axios.get(
          "https://elias-data.onrender.com/api/v1/eliasdata/"
        );
        if (response.data.msg) {
          setUser1(response.data.msg[0].user1);
          setUser2(response.data.msg[1].user2);
        }
        console.log(response.data.msg);
      } catch (error) {
        toast(
          "Apologies for the inconvenience. We encountered a temporary issue while retrieving the list of winners. Kindly refresh the page and ensure that you have a stable network connection"
        );
        console.log(error);
      }
    };
    fetchWinner();
  });

  return (
    <>
      <div className="w-[100%]">
        <ToastContainer />
        <div className="flex justify-center items-center">
          <img src={successful_man} alt="" />
        </div>
        <p className="text-center px-[2rem] md:text-[1.5rem]">
          Thanks for attempting the survey, all to make our you have a more
          comfortable and satisfied customer experience. Have a blessed and
          Happy New Year in advance😌. <br />{" "}
          @EliasDataServices
        </p>{" "}
        <br />
        <div className="bg-blue-300 mx-[2rem] md:mx-[10rem] rounded-lg">
          <p className="text-center text-black p-3 md:text-[1.2rem]">
            We are pleased to announce the winners of the survey competition.
            The recipients of this esteemed recognition are: <br />
            {user1} and {user2}
          </p>
        </div>
      </div>
    </>
  );
};

export default Successfull;
