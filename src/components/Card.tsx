import useHover from "../hooks/useHover";

type Props = {
   className?: string;
   label?: string;
   desc?: string;
   videoSrc: string;
};
export default function Card({ className = "pt-[100%]", desc, label, videoSrc }: Props) {
   const { triggerProps, triggerRef, videoRef } = useHover();

   const classes = {
      container:
         "flex flex-col h-full overflow-hidden rounded-[30px] transition-transform bg-white  hover:scale-[1.02] hover:shadow-[4px_4px_12px_rgba(0,0,0,0.15)]",
      videoFrame: `relative ${className}`,
      video: "absolute inset-0 w-auto h-full object-cover object-center select-none",
      boxText: "p-[22px] sm:p-[32px]",
      label: "font-[600] text-[23px] sm:text-[33px] mb-[20px] select-none",
      desc: "text-[20px] select-none",
   };

   return (
      <div className={classes.container} {...triggerProps} ref={triggerRef}>
         <div className={classes.videoFrame}>
            <video ref={videoRef} className={classes.video} src={videoSrc} loop />
         </div>

         <div className={classes.boxText}>
            <h5 className={classes.label}>{label || "Craftmanship"}</h5>
            <p className={classes.desc}>
               {desc ||
                  "Get best-in-class content and digital experiences from our craft, we value each process carefully and focus on details more than anyone else."}
            </p>
         </div>
      </div>
   );
}
