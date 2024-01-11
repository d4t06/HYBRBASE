import { DOMAttributes, useRef } from "react";

export default function useHover() {
   const isPlaying = useRef(false)
   const triggerRef = useRef<HTMLDivElement>(null);
   const videoRef = useRef<HTMLVideoElement>(null);

   const play = async () => {
      try {
         const videoEle = videoRef.current as HTMLVideoElement;
         await videoEle.play();
         isPlaying.current = true;
      } catch (error) {}
   };

   const handlePlayMobile = async () => {
      const videoEle = videoRef.current as HTMLVideoElement;
      videoEle.loop = false;

      if (isPlaying.current) {
         handlePause();
         return;
      }

      await play();
   };

   const handlePause = () => {
      const videoEle = videoRef.current as HTMLVideoElement;

      setTimeout(() => {
         videoEle.pause();
         isPlaying.current = false;
      }, 150);
   };

   const triggerProps: DOMAttributes<HTMLElement> = {
      onMouseEnter: () => play(),
      onMouseLeave: () => handlePause(),
      onTouchStart: () => handlePlayMobile(),
   };

   return { triggerProps, triggerRef, videoRef };
}
