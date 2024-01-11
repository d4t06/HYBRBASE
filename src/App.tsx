import Card from "./components/Card";
import useSlider from "./hooks/useSlider";
import myVideo from "./assets/Light_Make_Loop.mp4";

function App() {
   const { sliderProps, sliderRef } = useSlider();

   const classes = {
      title: "text-[47px] sm:text-[77px] max-w-[80vw] sm:max-w-[780px] text-center mx-auto",
      button:
         "px-[20px] py-[10px] sm:px-[40px] sm:py-[20px] text-[16px] sm:text-[20px] rounded-[99px] border border-black/40 transition-transform hover:scale-[1.05]",
      sliderContainer:
         "px-[20px] sm:px-[calc(50vw/2)] py-[20px] flex flex-nowrap gap-[40px] no-scrollbar overflow-x-auto",
      sliderItem: "w-[calc(100vw-40px)] sm:w-[50vw] flex-shrink-0",
   };

   return (
      <div className="py-[100px]">
         <h1 className={classes.title}>Why people love to work with us</h1>
         <div className="text-center mt-[50px] ">
            <button className={classes.button}>Read more</button>
         </div>

         <div className="mt-[100px]">
            <div ref={sliderRef} {...sliderProps} className={classes.sliderContainer}>
               {[...Array(3).keys()].map((item) => (
                  <div key={item} className={classes.sliderItem}>
                     <Card videoSrc={myVideo} className="pt-[58%]" />
                  </div>
               ))}
            </div>
         </div>
      </div>
   );
}

export default App;
