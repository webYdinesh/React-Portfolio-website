import MovieShuttleImage from '../../Images/movie-shuttle.jpg'
import WeatherAppImage from '../../Images/weather-app.jpg'
import LinkedinImage from '../../Images/Linkedin-clone.jpg'
import TodoAppImage from '../../Images/Todo-app.jpg'
import { FaReact,FaHtml5 } from "react-icons/fa";
import { TbApi } from "react-icons/tb";
import { SiChakraui, SiReactrouter,SiCss3,SiJavascript } from "react-icons/si";
// import MovieShuttleImage from '../../Images/movie-shuttle.jpg'

const Data  = [
    {
        image:MovieShuttleImage,
        heading:"A Movie Website Using Four API's, Hooks & React-Router-DOM.",
        des:"I have made this movie website using React js. I have used AXIOS to fetch data from API's. It also has search feature, You can search any movie or web show. I used UseEffect Hook & UseState Hook.",
        icon1: <FaReact fontSize={20} fill={"#61DBFB"} />,
        icon2: <SiChakraui fontSize={20} fill={"#1C62FB"} />,
        icon3: <SiReactrouter fontSize={20} fill={"#C40606"} />,
        icon4: <TbApi fontSize={20} />,
        previewLink:"https://movie-shuttle-webxdinesh.netlify.app/",
        githubLink:"https://github.com/"
    },
    {
        image:WeatherAppImage,
        heading:"A Weather App With 7 Days Forcast Using Weather API.",
        des:"I have made this Weather App using HTML,CSS & JavaScript. I have used Fetch Method to fetch data from API. It has seven days forcast feature. You can see your city weather by typing city name & You will get Real-Time Data.",
        icon1: <FaHtml5 fontSize={20} fill={"#E65100"} />,
        icon2: <SiCss3 fontSize={20} fill={"#0277BD"} />,
        icon3: <SiJavascript fontSize={20} fill={"#FFD600"} />,
        icon4: <TbApi fontSize={20} />,
        previewLink:"https://weather-app-webxdinesh.netlify.app/",
        githubLink:"https://github.com/"
    },
    {
        image:LinkedinImage,
        heading:"A Fully Responsive LinkedIn Website Using HTML & CSS",
        des:"I have made this Full Responsive LinkedIn Page using HTML & CSS. I have used Grid and Flexbox to Build this in an easy way. It is also Responsive when it comes in Tablets & Mobiles.",
        icon1:  <FaHtml5 fontSize={20} fill={"#E65100"} />,
        icon2: <SiCss3 fontSize={20} fill={"#0277BD"} />,
        icon3: <SiJavascript fontSize={20} fill={"#FFD600"} />,
        previewLink:"https://linkedin-clone-webxdinesh.netlify.app/",
        githubLink:"https://github.com/"
    },
    {
        image:TodoAppImage,
        heading:"A Awesome Todo App Using React js.",
        des:"I have made this Todo App using React js. I have used useState Hook to extract Data from input and show in list. You can Add your daily Goals and After Finishing the goal you can Delete. It also has feature to EDIT your Task In The List.",
        icon1: <FaReact fontSize={20} fill={"#61DBFB"} />,
        icon2: <SiChakraui fontSize={20} fill={"#1C62FB"} />,
        icon3:  <SiCss3 fontSize={20} fill={"#0277BD"} />,
        previewLink:"https://todo-app-webxdinesh.netlify.app/",
        githubLink:"https://github.com/"
    }
]
export default Data