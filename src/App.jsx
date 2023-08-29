import React, { useEffect, useState } from "react"
import patternCircles from "./assets/images/pattern-circles.svg"
import iconCheck from "./assets/images/icon-check.svg"
import iconSlider from "./assets/images/icon-slider.svg"

function App() {
  const [sliderValue, setSliderValue] = useState(50)
  const [pageview, setPageView] = useState("100K")
  const [amount, setAmount] = useState(16)
  const [yearlyBill, setYearlyBill] = useState(false)


  useEffect(() => {
    switch (sliderValue) {
      case "0":
        setPageView("10K");
        setAmount(8);
        break;

      case "25":
        setPageView("50K");
        setAmount(12);
        break;

      case "50":
        setPageView("100K");
        setAmount(16);
        break;

      case "75":
        setPageView("500K");
        setAmount(24);
        break;

      case "100":
        setPageView("1M");
        setAmount(36);
        break;

      default:
        break;
    }
  }, [sliderValue])


  const calculateSliderGradient = () => {
    const percentage = (sliderValue / 100) * 100;
    return `linear-gradient(to right, hsl(174, 86%, 45%) ${percentage}%, hsl(224, 65%, 95%) 0% , hsl(224, 65%, 95%) 100%)`;
  };

  const sliderGradient = calculateSliderGradient();


  return (
    <>
      <div className="bg-very-pale-blue min-h-screen">

        <div className="header relative flex flex-col items-center py-28 h-96 mb-6 rounded-bl-custom">
          <img src={patternCircles} alt="pattern-circles" className="absolute top-14 w-36" />
          <h2 className="text-dark-desaturated-blue text-2xl text-center font-bold mb-2">Simple, traffic-based pricing</h2>
          <div className="text-grayish-blue mb-1 w-56 text-center md:w-full">Sign-up for our 30-day trial. No credit card required.</div>
        </div>

        <div className="flex justify-center">
          <div className="relative -top-36 bg-white flex flex-col items-center w-11/12 py-8 drop-shadow-2xl md:w-7/12 lg:w-6/12">

            <div className="w-full px-4 md:flex md:justify-between md:flex-wrap md:px-9 md:items-center">

              <div className="text-grayish-blue tracking-widest mb-12 text-center md:mb-0">{pageview} PAGEVIEWS</div>

              <div className=" relative w-full mb-12 flex justify-center md:order-3 mt-10">
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


              <div className="flex items-center justify-center mb-8 md:order-2 md:mb-0">
                <span className="text-4xl mr-2 font-bold text-dark-desaturated-blue">{!yearlyBill ? `$${amount}.00` : `$${amount * 12 - (0.25 * amount * 12)}.00`}</span>
                <span className="text-sm text-grayish-blue">{!yearlyBill ? "/ month" : "/ year"}</span>
              </div>

            </div>

            <div className=" relative flex justify-center items-center w-full mb-10 pl-12 gap-2 sm:gap-6 ">
              <div className="text-sm text-grayish-blue">Monthly Billing</div>
              <label className="switch">
                <input type="checkbox" onChange={() => setYearlyBill((prevBill) => !prevBill)} /><span className="slider round"></span>
              </label>
              <div className="text-grayish-blue text-sm">Yearly Billing</div>
              <div className="bg-light-grayish-red text-light-red rounded-full px-1.5 py-0.5 text-sm">-25%</div>
            </div>

            <hr className="border border-light-grayish-blue-1 w-full" />

            <div className="flex flex-col items-center mt-6 md:flex-row md:justify-between md:w-full md:px-9">
              <div className="flex flex-col items-center md:items-start">
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
