import Flippy, { FrontSide, BackSide } from 'react-flippy';
import A1 from "./Images/A1.png";
import A2 from "./Images/A2.png";
import A4 from "./Images/A4.png";
import A5 from "./Images/A5.png";
import A6 from "./Images/A6.png";
import A7 from "./Images/A7.png";

function Air() {
  return (
  <section className="text-gray-600 body-font">
    <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-wrap w-full mb-20">
        <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Air Quality Analysis</h1>
          <div className="h-1 w-20 bg-indigo-500 rounded"></div>
        </div>
        <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">Both the malaria parasite and the mosquitoes that spread it continue to adapt and defend themselves against treatments and insecticides, making the fight against malaria a race against time that has raged on throughout human history. Now, our world is changing again as we witness unprecedented climate disruption and warming – and increasing opportunities for malaria to take hold.</p>
      </div>
      <div className="flex flex-wrap -m-4">
        <div className="xl:w-1/2 md:w-1/2 p-4">
          <Flippy className="bg-gray-100 p-6 rounded-lg" flipOnHover={true}>
            <FrontSide style={{ backgroundColor: '#d8e3e7' }}>                  
            <img className="sqphoto items-centre" src={A2} alt="content"></img>
            <br></br>
            <h2 className="text-lg text-gray-900 font-medium title-font mb-4 text-center">Air Quality Index Statewise</h2>
            </FrontSide>
            <BackSide style={{ backgroundColor: '#d8e3e7' }}>
                <div className = "overflow-x-auto">
                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">Dig 1</h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Air Quality Index Statewise</h2>
                <p className="leading-relaxed text-base">An air quality index (AQI) is used by government agencies to communicate to the public how polluted the air currently is or how polluted it is forecast to become.
                The higher the AQI value, the greater the level of air pollution and the greater the health concern. For example, an AQI value of 50 or below represents good air quality, while an AQI value over 300 represents hazardous air quality.
                So, from the Bar-Chart we can see that Uttar Pradesh has highest AQI value.</p>
                </div>
            </BackSide>
          </Flippy>
        </div>
        <div className="xl:w-1/2 md:w-1/2 p-4">
          <Flippy className="bg-gray-100 p-6 rounded-lg" flipOnHover={true}>
            <FrontSide style={{ backgroundColor: '#d8e3e7' }}>                  
            <img className="sqphoto items-centre" src={A1} alt="content"></img>
            <br></br>
            <h2 className="text-lg text-gray-900 font-medium title-font mb-4 text-center">AQI value in Uttar Pradesh(2020)</h2>
            </FrontSide>
            <BackSide style={{ backgroundColor: '#d8e3e7' }}>
                <div className = "overflow-x-auto">
                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">Dig 2</h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">AQI value in Uttar Pradesh(2020)</h2>
                <p className="leading-relaxed text-base">The Bar Chart shows AQI value in Uttar Pradesh Monthly wise in the year 2020. So, peeps in Uttar Pradesh be careful and protect your state</p>
                </div>
            </BackSide>
          </Flippy>
        </div>
        <div className="xl:w-1/2 md:w-1/2 p-4">
          <Flippy className="bg-gray-100 p-6 rounded-lg" flipOnHover={true}>
            <FrontSide style={{ backgroundColor: '#d8e3e7' }}>                  
            <img className="sqphoto items-centre" src={A4} alt="content"></img>
            <br></br>
            <h2 className="text-lg text-gray-900 font-medium title-font mb-4 text-center">Heat-Map</h2>
            </FrontSide>
            <BackSide style={{ backgroundColor: '#d8e3e7' }}>
                <div className = "overflow-x-auto">
                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">Dig 3</h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Heat-Map</h2>
                <p className="leading-relaxed text-base">Heat Map Chart, or Heatmap is a two-dimensional visual representation of data, where values are encoded in colors, delivering a convenient, insightful view of information. Essentially, this chart type is a data table with rows and columns denoting different sets of categories.
                Over here correlation between different elemets is shown.</p>
                </div>
            </BackSide>
          </Flippy>
        </div>
        <div className="xl:w-1/2 md:w-1/2 p-4">
          <Flippy className="bg-gray-100 p-6 rounded-lg" flipOnHover={true}>
            <FrontSide style={{ backgroundColor: '#d8e3e7' }}>                  
            <img className="sqphoto items-centre" src={A5} alt="content"></img>
            <br></br>
            <h2 className="text-lg text-gray-900 font-medium title-font mb-4 text-center">Air Elements</h2>
            </FrontSide>
            <BackSide style={{ backgroundColor: '#d8e3e7' }}>
                <div className = "overflow-x-auto">
                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">Dig 4</h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Correlation analysis</h2>
                <p className="leading-relaxed text-base">Line graphs are used to track changes over short and long periods of time. This line chart shows <br></br>
                NO2<br></br>
                PM2.5<br></br>
                PM10<br></br>
                NOx<br></br>
                values for the past 5 years.(2015-2020)</p></div>
            </BackSide>
          </Flippy>
        </div>
        <div className="xl:w-1/2 md:w-1/2 p-4">
          <Flippy className="bg-gray-100 p-6 rounded-lg" flipOnHover={true}>
            <FrontSide style={{ backgroundColor: '#d8e3e7' }}>                  
            <img className="sqphoto items-centre" src={A6} alt="content"></img>
            <br></br>
            <h2 className="text-lg text-gray-900 font-medium title-font mb-4 text-center">Correlation analysis</h2>
            </FrontSide>
            <BackSide style={{ backgroundColor: '#d8e3e7' }}>
                <div className = "overflow-x-auto">
                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">Dig 4</h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Air Elements</h2>
                <p className="leading-relaxed text-base">This line chart shows<br></br> 
                SO2<br></br>
                NH3<br></br>
                CO<br></br>
                O3<br></br>
                values for the past 5 years.(2015-2020)</p>
                </div>
            </BackSide>
          </Flippy>
        </div>
        <div className="xl:w-1/2 md:w-1/2 p-4">
          <Flippy className="bg-gray-100 p-6 rounded-lg" flipOnHover={true}>
            <FrontSide style={{ backgroundColor: '#d8e3e7' }}>                  
            <img className="sqphoto items-centre" src={A7} alt="content"></img>
            <br></br>
            <h2 className="text-lg text-gray-900 font-medium title-font mb-4 text-center">Air Elements</h2>
            </FrontSide>
            <BackSide style={{ backgroundColor: '#d8e3e7' }}>
                <div className = "overflow-x-auto">
                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">Dig 4</h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Correlation analysis</h2>
                <p className="leading-relaxed text-base">This line chart shows 
                <br></br>
                Xylene<br></br>
                Benzene<br></br>
                Toluene<br></br>
                values for the past 5 years.(2015-2020)</p>
                </div>
            </BackSide>
          </Flippy>
        </div>
      </div>
    </div>          
  </section>
  );
}

export default Air;
