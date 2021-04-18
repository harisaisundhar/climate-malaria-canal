import './App.css';
import B1 from "./Images/B1.jpg";
import Logo from "./Images/S1.png";
import { Link } from 'react-router-dom';
import Abs from './Docs/Abst.pdf';
import Pap from './Docs/Abst.pdf';
function About() {
    return (
        <section class="text-gray-600 body-font">
<header class="body-font">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <nav class="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
        <a class="mr-5 hover:text-gray-900" href={Abs} download="Abstract.pdf"> Abstract </a>
        <a class="mr-5 hover:text-gray-900" href={Pap} download="Report.pdf"> Report </a>
    </nav>
    <a class="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0">
      <img className="logop" src={Logo} alt="content"></img>
                  
      <span class="ml-3 text-xl">Case Study Lab</span>
    </a>
    <div class="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
    <nav class="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
      <a class="mr-5 hover:text-gray-900" href='https://github.com/harisaisundhar/climate-malaria-canal'>Github</a>
    </nav>
    </div>
  </div>
</header>
            <header>
                <center>
                    <h1>Impact of Weather Variables and Roles of Human Population in Vector Borne Diseases</h1><br></br><hr></hr>
                </center>
            </header>

  <div class="container px-5 py-14 mx-auto flex flex-wrap">
    <div class="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
      <img alt="feature" class="object-cover object-center h-full w-full" src={B1}></img>
    </div>
    <div class="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
      <div class="flex flex-col mb-10 lg:items-start items-center">
        <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
            <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
          </svg>
        </div>
        <div class="flex-grow">
          <h2 class="text-gray-900 text-lg title-font font-medium mb-3">Rainfall</h2>
          <p class="leading-relaxed text-base">BIn regions already affected by the disease, the impact of climate on malaria is mainly related to changing rainfall patterns, or increased flooding risk.</p>
          <a class="mt-3 text-indigo-500 inline-flex items-center"><Link to ='/rain'>Learn More</Link>
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
      <div class="flex flex-col mb-10 lg:items-start items-center">
        <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
            <circle cx="6" cy="6" r="3"></circle>
            <circle cx="6" cy="18" r="3"></circle>
            <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
          </svg>
        </div>
        <div class="flex-grow">
          <h2 class="text-gray-900 text-lg title-font font-medium mb-3">Air Polltion</h2>
          <p class="leading-relaxed text-base">Globally, about 75% of deaths attributed to air pollution occur in people aged over 60 years.</p>
          <a class="mt-3 text-indigo-500 inline-flex items-center"><Link to ='/air'>Learn More</Link>
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
      <div class="flex flex-col mb-10 lg:items-start items-center">
        <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
        </div>
        <div class="flex-grow">
          <h2 class="text-gray-900 text-lg title-font font-medium mb-3">Climate</h2>
          <p class="leading-relaxed text-base">An increase in temperature, rainfall, and humidity may cause a proliferation of the malaria-carrying mosquitoes at higher altitudes, resulting in an increase in malaria transmission</p>
          <a class="mt-3 text-indigo-500 inline-flex items-center"><Link to ='/climate'>Learn More</Link>
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
            </div>
                        <div class="mx-auto flex px-5 py-10 items-center justify-center flex-col">
                <div class="text-center lg:w-2/3 w-full">
                    <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Project Details</h1>
                    <p class="mb-8 leading-relaxed">India, where one in every seventh person on the planet lives, has no major national study on the impact of climate change, although about 600 million people are at risk from its effects.<br></br>
The life cycles and transmission of most infectious agents are inextricably linked with climate. This research revolves around analysing how the factors of climate influences its developments and spreading.<br></br>
</p>
                    <div class="justify-center">
                        <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"><a href={Abs} download="Abstract.pdf"> Download Abstract </a></button>
                        <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Explore Outcomes</button>
                    </div>
                </div>
            </div>
            <footer class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
    <div class="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
      <a class="flex title-font font-medium items-left md:justify-start text-gray-900">
<img className="logop" src={Logo} alt="content"></img>
        <span class="ml-3 text-xl">Case Study</span>
      </a>
      <p class="mt-2 text-sm text-gray-500">Impact of Weather Variables and Roles of Human Population in Vector Borne Diseases</p>
    </div>
    <div class="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
      
      <div class="lg:w-1/3 md:w-1/2 w-full px-9">
        <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">MALARIA</h2>
        <nav class="list-none mb-10">
          <li>
            <a  class="text-gray-600 hover:text-gray-800">Andhra Pradesh</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">Delhi</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">Karnataka</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">Maharashtra</a>
         </li>
         <li>
            <a class="text-gray-600 hover:text-gray-800">Tamil Nadu</a>
         </li>
        <li>
            <a class="text-gray-600 hover:text-gray-800">Uttar Pradesh</a>
          </li>
        </nav>
      </div>
            <div class="lg:w-1/3 md:w-1/2 w-full px-9">
        <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">DENGUE</h2>
        <nav class="list-none mb-10">
          <li>
            <a  class="text-gray-600 hover:text-gray-800">Andhra Pradesh</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">Delhi</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">Karnataka</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">Maharashtra</a>
         </li>
         <li>
            <a class="text-gray-600 hover:text-gray-800">Tamil Nadu</a>
         </li>
        <li>
            <a class="text-gray-600 hover:text-gray-800">Uttar Pradesh</a>
          </li>
        </nav>
                        </div>
                              <div class="lg:w-1/3 md:w-1/2 w-full px-9">
        <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">KAALAZAR</h2>
        <nav class="list-none mb-10">
          <li>
            <a  class="text-gray-600 hover:text-gray-800">Andhra Pradesh</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">Delhi</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">Karnataka</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">Maharashtra</a>
         </li>
         <li>
            <a class="text-gray-600 hover:text-gray-800">Tamil Nadu</a>
         </li>
        <li>
            <a class="text-gray-600 hover:text-gray-800">Uttar Pradesh</a>
          </li>
        </nav>
      </div>
    </div>
  </div>
  <div class="bg-gray-100">
                    <div class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
                        <center>
                            
      <p class="text-gray-500 text-sm text-center ">With Passion —
        <a rel="noopener noreferrer" class="text-gray-600 ml-1" target="_blank">Harisai & Sathwick</a>
      </p>
                        </center>
    </div>
  </div>
</footer>
        </section>
        
  );
}

export default About;