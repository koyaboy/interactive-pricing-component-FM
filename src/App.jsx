import React, { useState } from "react"
import patternCircles from "./assets/images/pattern-circles.svg"
import iconCheck from "./assets/images/icon-check.svg"
import iconSlider from "./assets/images/icon-slider.svg"

function App() {
  const [sliderValue, setSliderValue] = useState(50)

  const calculateSliderGradient = () => {
    const percentage = (sliderValue / 100) * 100;
    return `linear-gradient(to right, hsl(174, 86%, 45%) ${percentage}%, hsl(224, 65%, 95%) 0% , hsl(224, 65%, 95%) 100%)`;
  };

  const sliderGradient = calculateSliderGradient();

  return (
    <>
      <div className="bg-very-pale-blue min-h-screen">

        <div className="header relative flex flex-col items-center py-20 h-96 mb-6 rounded-bl-custom">
          <img src={patternCircles} alt="pattern-circles" className="absolute top-14 w-36" />
          <h2 className="text-dark-desaturated-blue text-2xl font-bold mb-2">Simple, traffic-based pricing</h2>
          <div className="text-grayish-blue mb-1">Sign-up for our 30-day trial. </div>
          <div className="text-grayish-blue">No credit card required. </div>
        </div>

        <div className="flex justify-center">
          <div className="relative -top-44 bg-white flex flex-col items-center w-11/12 py-8 drop-shadow-2xl">
            <div className="text-grayish-blue tracking-widest mb-12">100K PAGEVIEWS</div>

            <div className=" relative w-11/12 mb-12 flex justify-center ">
              <input
                type="range"
                min="0"
                max="100"
                step="25"
                value={sliderValue}
                onChange={(e) => setSliderValue(e.target.value)}
                className="range-slider"
                style={{ background: sliderGradient }}
              />

              {/* <img
                src={iconSlider}
                alt="icon-slider"
                className="absolute -top-0.5 -translate-x-1/2"
                style={{
                  left: `${sliderValue}%`,
                  transform: `translate(${sliderValue === 0 ? '50%' :
                    sliderValue === 25 ? '0%' :
                      sliderValue === 50 ? '-50%' :
                        sliderValue === 75 ? '-100%' :
                          sliderValue === 100 ? '-150%' :
                            '0' // Default value if none of the conditions are met
                    })`,
                }}

              /> */}

            </div>


            <div className="flex items-center mb-8">
              <span className="text-3xl mr-2 font-bold text-dark-desaturated-blue">$16.00</span>
              <span className="text-sm text-grayish-blue">/ month</span>
            </div>

            <div className=" relative flex justify-between items-center w-full mb-10 pl-12 pr-4">
              <div className="text-sm text-grayish-blue">Monthly Billing</div>
              <label className="switch">
                <input type="checkbox" /><span className="slider round"></span>
              </label>
              <div className="text-grayish-blue text-sm">Yearly Billing</div>
              <div className="bg-light-grayish-red text-light-red rounded-full px-1.5 py-0.5 text-sm">-25%</div>
            </div>

            <hr className="border border-light-grayish-blue-1 w-full" />

            <div className="flex flex-col items-center mt-6">
              <div className="flex items-center gap-4 mb-2">
                <img src={iconCheck} alt="icon-check" />
                <div className="text-grayish-blue text-sm">Unlimited Websites</div>
              </div>
              <div className="flex items-center gap-4 mb-2">
                <img src={iconCheck} alt="icon-check" />
                <div className="text-grayish-blue text-sm">100% data ownership</div>
              </div>
              <div className="flex items-center gap-4 mb-8">
                <img src={iconCheck} alt="icon-check" />
                <div className="text-grayish-blue text-sm">Email reports</div>
              </div>
              <button className="text-pale-blue bg-dark-desaturated-blue px-12 py-3 rounded-full">Start my trial</button>
            </div>


          </div>
        </div >
      </div>
    </>
  )
}

export default App
