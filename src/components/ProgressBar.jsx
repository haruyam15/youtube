import { useSpring, animated } from "@react-spring/web"

export default function ProgressBar(){
    const animationProps = useSpring({
        from: { width: "20%" },
        to: { width: "100%" },
    });

    return (
        <div className="w-full bg-red-200 h-1" >
            <animated.div className="bg-red-600 h-1 dark:bg-red-500" style={animationProps}></animated.div>
        </div>
    );
    
}
