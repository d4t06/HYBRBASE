import { DOMAttributes, useRef } from "react";

export default function useHover() {
   const isPlaying = useRef(false);
   const triggerRef = useRef<HTMLDivElement>(null);
   const videoRef = useRef<HTMLVideoElement>(null);

   const handlePlay = () => {
      const videoEle = videoRef.current as HTMLVideoElement;

      setTimeout(() => {
         videoEle.play();
      }, 150);
   };

   const handlePlayMobile = () => {
      const videoEle = videoRef.current as HTMLVideoElement;
      if (isPlaying.current) {
         isPlaying.current = false;
         handlePause();
         return;
      }

      isPlaying.current = true;
      videoEle.loop = false;

      setTimeout(() => {
         videoEle.play();
      }, 150);
   };

   const handlePause = () => {
      const videoEle = videoRef.current as HTMLVideoElement;

      setTimeout(() => {
         videoEle.pause();
      }, 150);
   };

   const triggerProps: DOMAttributes<HTMLElement> = {
      onMouseEnter: () => handlePlay(),
      onMouseLeave: () => handlePause(),
      onTouchStart: () => handlePlayMobile(),
   };

   return { triggerProps, triggerRef, videoRef };
}
