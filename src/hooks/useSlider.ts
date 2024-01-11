import { useRef, MouseEvent, DOMAttributes } from "react";

export default function useSlider() {
   const isDrag = useRef(false);
   const prevScrollRef = useRef(0);
   const currentScroll = useRef(0);
   const prevPageXRef = useRef(0);

   const sliderRef = useRef<HTMLDivElement>(null);

   const handleStartDrag = (e: MouseEvent<HTMLElement, globalThis.MouseEvent>) => {
      const sliderEle = sliderRef.current;
      if (!sliderEle) return;

      isDrag.current = true;
      prevPageXRef.current = e.pageX;

      prevScrollRef.current = currentScroll.current;
      sliderEle.style.scrollBehavior = "auto";
   };

   const drag = (pageX: number) => {
      const sliderEle = sliderRef.current;
      if (!sliderEle) return;

      const distance = pageX - prevPageXRef.current;
      const newScrollLeft = prevScrollRef.current - distance;

      if (newScrollLeft > 0) {
         sliderEle.scrollLeft = newScrollLeft;
      } else sliderEle.scrollLeft = 0;
   };

   const handleDrag = (e: MouseEvent<HTMLElement, globalThis.MouseEvent>) => {
      if (!isDrag.current) return;
      isDrag.current = true;

      drag(e.pageX);
   };

   const handleMouseLeave = () => {
      if (isDrag.current) handleStopDrag();
   };

   const handleStopDrag = () => {
      if (!isDrag.current) return;
      isDrag.current = false;

      const sliderEle = sliderRef.current;
      if (!sliderEle) return;

      sliderEle.style.scrollBehavior = "smooth";
      prevScrollRef.current = sliderEle.scrollLeft;
   };

   const handleOnScroll = () => {
      const sliderEle = sliderRef.current;
      if (!sliderEle) return;

      currentScroll.current = sliderEle.scrollLeft;
   };

   const sliderProps: DOMAttributes<HTMLElement> = {
      onMouseDown: (e) => handleStartDrag(e),
      onMouseMove: (e) => handleDrag(e),
      onMouseUp: () => handleStopDrag(),
      onMouseLeave: () => handleMouseLeave(),
      onScroll: () => handleOnScroll(),
   };

   return {
      sliderProps,
      sliderRef,
   };
}
