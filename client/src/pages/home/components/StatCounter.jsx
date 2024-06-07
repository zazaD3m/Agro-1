import { useEffect, useState } from "react";

const easeOutExpo = (t) => {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
};

const useStatCounter = (start, end, duration = 2000, delay = 0) => {
  const [count, setCount] = useState(start);
  const frameRate = 1000 / 60;
  const totalFrames = Math.round(duration / frameRate);
  const difference = end - start;

  useEffect(() => {
    let frame = 0;
    let timeoutId;
    let counterId;

    const startCounting = () => {
      counterId = setInterval(() => {
        frame++;
        const progress = easeOutExpo(frame / totalFrames);
        const increment = difference * progress;
        setCount(Math.round(start + increment));

        if (frame === totalFrames) {
          clearInterval(counterId);
          setCount(end); // Ensure it ends on the exact target value
        }
      }, frameRate);
    };

    timeoutId = setTimeout(() => {
      startCounting();
    }, delay);

    return () => {
      clearTimeout(timeoutId);
      clearInterval(counterId);
    };
  }, [start, end, difference, duration, delay, frameRate, totalFrames]);

  return count;
};

const StatCounter = ({ start, end, duration, delay }) => {
  const count = useStatCounter(start, end, duration, delay);

  return <span>{count.toLocaleString()}</span>;
};
export default StatCounter;
