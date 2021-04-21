import Flippy, { FrontSide, BackSide } from 'react-flippy';
import C1 from "./Images/C1.png";
import C2 from "./Images/C2.png";
import C3 from "./Images/C3.png";
import C4 from "./Images/C4.png";


function Climate() {
  return (
  <section className="text-gray-600 body-font">
    <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-wrap w-full mb-20">
        <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Climate Analysis</h1>
          <div className="h-1 w-20 bg-indigo-500 rounded"></div>
        </div>
        <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">Both the malaria parasite and the mosquitoes that spread it continue to adapt and defend themselves against treatments and insecticides, making the fight against malaria a race against time that has raged on throughout human history. Now, our world is changing again as we witness unprecedented climate disruption and warming – and increasing opportunities for malaria to take hold.</p>
      </div>
      <div className="flex flex-wrap -m-4">
        <div className="xl:w-1/2 md:w-1/2 p-4">
          <Flippy className="bg-gray-100 p-6 rounded-lg" flipOnHover={true}>
            <FrontSide style={{ backgroundColor: '#d8e3e7' }}>                  
            <img className="sqphoto items-centre" src={C2} alt="content"></img>
            <br></br>
            <h2 className="text-lg text-gray-900 font-medium title-font mb-4 text-center">Temperature Analysis</h2>
            </FrontSide>
            <BackSide style={{ backgroundColor: '#d8e3e7' }}>
                <div className = "overflow-x-auto">
                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">Dig 1</h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Temperature Analysis</h2>
                <p className="leading-relaxed text-base">The Bar Chart shows mean temperature readings of different states from 2009 to 2020
                We can see that:<br></br>
                Karnataka has the lowest temperature.<br></br>
                Maharashtra has the heighest temperature.</p>
                </div>
            </BackSide>
          </Flippy>
        </div>
        <div className="xl:w-1/2 md:w-1/2 p-4">
          <Flippy className="bg-gray-100 p-6 rounded-lg" flipOnHover={true}>
            <FrontSide style={{ backgroundColor: '#d8e3e7' }}>                  
            <img className="sqphoto items-centre" src={C3} alt="content"></img>
            <br></br>
            <h2 className="text-lg text-gray-900 font-medium title-font mb-4 text-center">Humidity Analysis</h2>
            </FrontSide>
            <BackSide style={{ backgroundColor: '#d8e3e7' }}>
                <div className = "overflow-x-auto">
                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">Dig 2</h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Humidity Analysis</h2>
                <p className="leading-relaxed text-base">he Bar Chart shows mean humidity readings of different states from 2009 to 2020
                We can see that:<br></br>
                Rajastan has the lowest humidity.<br></br>
                Maharashtra and Karnataka have almost similar humidity.(heighest)</p>
                </div>
            </BackSide>
          </Flippy>
        </div>
        <div className="xl:w-1/2 md:w-1/2 p-4">
          <Flippy className="bg-gray-100 p-6 rounded-lg" flipOnHover={true}>
            <FrontSide style={{ backgroundColor: '#d8e3e7' }}>                  
            <img className="sqphoto items-centre" src={C4} alt="content"></img>
            <br></br>
            <h2 className="text-lg text-gray-900 font-medium title-font mb-4 text-center">Precipitaion Analysis</h2>
            </FrontSide>
            <BackSide style={{ backgroundColor: '#d8e3e7' }}>
                <div className = "overflow-x-auto">
                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">Dig 4</h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Precipitation Analysis</h2>
                <p className="leading-relaxed text-base">he Bar Chart shows mean precipitaion readings of different states from 2009 to 2020
                We can see that:<br></br>
                Rajasthan has the lowest precipitaion.<br></br>
                Maharashtra has the heighest precipitaion.</p></div>
            </BackSide>
          </Flippy>
        </div>
        <div className="xl:w-1/2 md:w-1/2 p-4">
          <Flippy className="bg-gray-100 p-6 rounded-lg" flipOnHover={true}>
            <FrontSide style={{ backgroundColor: '#d8e3e7' }}>                  
            <img className="sqphoto items-centre" src={C1} alt="content"></img>
            <br></br>
            <h2 className="text-lg text-gray-900 font-medium title-font mb-4 text-center">Overall Analysis (MAHARASHTRA)</h2>
            </FrontSide>
            <BackSide style={{ backgroundColor: '#d8e3e7' }}>
                <div className = "overflow-x-auto">
                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">Dig 4</h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Overall Analysis (MAHARASHTRA)</h2>
                <p className="leading-relaxed text-base">Since Maharashtra tops all the charts, this chart shows overall analysis of Maharashtra from 2009 to 2020
                in temperature, precipitaion and humidity respectively.</p>
                </div>
            </BackSide>
          </Flippy>
        </div>
      </div>
    </div>          
  </section>
  );
}

export default Climate;
