import tech from "../assets/tech.jpeg";
import G from "../assets/5G.jpeg";
import thinking from "../assets/thinking.jpeg";
import rating from "../assets/rating.jpeg";

const surveyQuestions =  [
    {
        id: 1,
        question: 'How has been your experience as a customer using Elias Data Service?',
        image: tech,
        name: "question1"
    },
    {
        id: 2,
        question: 'What area do you think we should improve on in delivering our services?',
        image: G,
        name: "question2"
    },
    {
        id: 3,
        question: 'What is/are the event(s) that happened and made you want to quit Elias Data Services?',
        image: thinking,
        name: "question3"
    },
    {
        id: 4,
        question: 'Rate Elias Data Services on the range of stars 1 to 5',
        image: rating,
        name: "rating"
    },
];
 export default surveyQuestions;