import { useSpring } from "@react-spring/web";


const propsConfig = { mass: 5, tension: 2000, friction: 200 };

export const opacityAnimation = (delay:number) => (
    useSpring({
        ...propsConfig,
        delay,
        from: { opacity: "0" },
        to: { opacity: "100%" },
      })
) 
export const textAnimation = (delay:number, toHeight:string) => (
    useSpring({
        ...propsConfig,
        delay,
        from: { opacity: 0, height: "0" },
        to: { opacity: 1, height: toHeight },
      })
) 
export const widthAnimation = (delay:number, toWidth:string) => (
    useSpring({
        ...propsConfig,
        delay,
        from: { opacity: 0, width: "0" },
        to: { opacity: 1, width: toWidth },
      })
) 
