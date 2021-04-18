import Flippy, { FrontSide, BackSide } from 'react-flippy';
import R1 from "./Images/R1.png";
import R2 from "./Images/R2.png";
import R3 from "./Images/R3.png";
import R4 from "./Images/R4.png";
import R5 from "./Images/R5.png";
import R6 from "./Images/R6.png";

function Rainfall() {
  return (
  <section className="text-gray-600 body-font">
    <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-wrap w-full mb-20">
        <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Rainfall Analysis</h1>
          <div className="h-1 w-20 bg-indigo-500 rounded"></div>
        </div>
        <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">Both the malaria parasite and the mosquitoes that spread it continue to adapt and defend themselves against treatments and insecticides, making the fight against malaria a race against time that has raged on throughout human history. Now, our world is changing again as we witness unprecedented climate disruption and warming – and increasing opportunities for malaria to take hold.</p>
      </div>
      <div className="flex flex-wrap -m-4">
        <div className="xl:w-1/2 md:w-1/2 p-4">
          <Flippy className="bg-gray-100 p-6 rounded-lg">
            <FrontSide style={{ backgroundColor: '#d8e3e7' }}>                  
            <img className="sqphoto items-centre" src={R1} alt="content"></img>
            <br></br>
            <h2 className="text-lg text-gray-900 font-medium title-font mb-4 text-center">Annual Rainfall Received</h2>
            </FrontSide>
            <BackSide style={{ backgroundColor: '#d8e3e7' }}>
                <div className = "overflow-x-auto">
                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">Dig 1</h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Annual Rainfall Received</h2>
                <p className="leading-relaxed text-base">Annual rainfall is the average amount of total rain that a place generally receives.

When I say annual rainfall of my place is x mm, it does not imply that for a particular year the total rainfall my place received was x mm rather it means in general or on an average my place receives x mm of rainfall annually"</p>
                </div>
            </BackSide>
          </Flippy>
        </div>
        <div className="xl:w-1/2 md:w-1/2 p-4">
          <Flippy className="bg-gray-100 p-6 rounded-lg">
            <FrontSide style={{ backgroundColor: '#d8e3e7' }}>                  
            <img className="sqphoto items-centre" src={R2} alt="content"></img>
            <br></br>
            <h2 className="text-lg text-gray-900 font-medium title-font mb-4 text-center">Heighest Rainfall</h2>
            </FrontSide>
            <BackSide style={{ backgroundColor: '#d8e3e7' }}>
                <div className = "overflow-x-auto">
                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">Dig 2</h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Heighest Rainfall</h2>
                <p className="leading-relaxed text-base">"Please bring your Umbrella or put on your raincoat before you start reading about the five places with highest rainfall in India.<br></br>Mawsynram.<br></br>Agumbe<br></br>Cherrapunji"</p>
                </div>
            </BackSide>
          </Flippy>
        </div>
        <div className="xl:w-1/2 md:w-1/2 p-4">
          <Flippy className="bg-gray-100 p-6 rounded-lg">
            <FrontSide style={{ backgroundColor: '#d8e3e7' }}>                  
            <img className="sqphoto items-centre" src={R3} alt="content"></img>
            <br></br>
            <h2 className="text-lg text-gray-900 font-medium title-font mb-4 text-center">Total rainfall</h2>
            </FrontSide>
            <BackSide style={{ backgroundColor: '#d8e3e7' }}>
                <div className = "overflow-x-auto">
                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">Dig 3</h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Total rainfall</h2>
                <p className="leading-relaxed text-base">The climate of India consists of a wide range of weather conditions across a vast geographic scale and varied topography, making generalizations difficult. Climate in South India is generally hotter and extremely humid than that of North India. South India is more humid due to nearby coasts. </p>
                </div>
            </BackSide>
          </Flippy>
        </div>
        <div className="xl:w-1/2 md:w-1/2 p-4">
          <Flippy className="bg-gray-100 p-6 rounded-lg">
            <FrontSide style={{ backgroundColor: '#d8e3e7' }}>                  
            <img className="sqphoto items-centre" src={R4} alt="content"></img>
            <br></br>
            <h2 className="text-lg text-gray-900 font-medium title-font mb-4 text-center">Correlation analysis</h2>
            </FrontSide>
            <BackSide style={{ backgroundColor: '#d8e3e7' }}>
                <div className = "overflow-x-auto">
                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">Dig 4</h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Correlation analysis</h2>
                <p className="leading-relaxed text-base">The Relationship between Rainfall and Temperature. The physical rationale behind the relationship between rainfall and temperature is that rainfall may affect soil moisture which may in turn affect surface temperature by controlling the partitioning between the sensible and latent heat fluxes</p>
                </div>
            </BackSide>
          </Flippy>
        </div>
        <div className="xl:w-1/2 md:w-1/2 p-4">
          <Flippy className="bg-gray-100 p-6 rounded-lg">
            <FrontSide style={{ backgroundColor: '#d8e3e7' }}>                  
            <img className="sqphoto items-centre" src={R5} alt="content"></img>
            <br></br>
            <h2 className="text-lg text-gray-900 font-medium title-font mb-4 text-center">Avg Monthly Rainfall</h2>
            </FrontSide>
            <BackSide style={{ backgroundColor: '#d8e3e7' }}>
                <div className = "overflow-x-auto">
                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">Dig 5</h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Avg Monthly Rainfall</h2>
                <p className="leading-relaxed text-base">Monthly volume of rainfall measured across India 2018. During 2018, the monthly rainfall recorded in India was the highest in July, with around 274.1 millimeters. The lowest monthly rainfall was measured in January, with around 2.9 millimeters of rainfall across the country</p>
                </div>
            </BackSide>
          </Flippy>
        </div>
        <div className="xl:w-1/2 md:w-1/2 p-4">
          <Flippy className="bg-gray-100 p-6 rounded-lg">
            <FrontSide style={{ backgroundColor: '#d8e3e7' }}>                  
            <img className="sqphoto items-centre" src={R6} alt="content"></img>
            <br></br>
            <h2 className="text-lg text-gray-900 font-medium title-font mb-4 text-center">Rainfall wrt Subdivision</h2>
            </FrontSide>
            <BackSide style={{ backgroundColor: '#d8e3e7' }}>
                <div className = "overflow-x-auto">
                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">Dig 6</h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Rainfall wrt Subdivision</h2>
                <p className="leading-relaxed text-base">Rain is liquid water in the form of droplets that have condensed from atmospheric water vapor and then become heavy enough to fall under gravity. Rain is a major component of the water cycle and is responsible for depositing most of the fresh water on the Earth. It provides suitable conditions for many types of ecosystems, as well as water for hydroelectric power plants and crop irrigation.

The major cause of rain production is moisture moving along three-dimensional zones of temperature and moisture contrasts known as weather fronts. If enough moisture and upward motion is present, precipitation falls from convective clouds</p>
                </div>
            </BackSide>
          </Flippy>
        </div>
      </div>
    </div>          
  </section>
  );
}

export default Rainfall;
