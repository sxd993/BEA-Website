import { useMemo } from "react";

interface StarData {
  left: number;
  top: number;
  moveX: number;
  moveY: number;
  duration: number;
}

interface StarDataBySize {
  small: StarData[];
  medium: StarData[];
  large: StarData[];
  extraSmall: StarData[];
}

export const useStarData = (): StarDataBySize => {
  return useMemo(() => {
    const generateStarData = (count: number): StarData[] =>
      Array.from({ length: count }, () => ({
        left: Math.random() * 100,
        top: Math.random() * 100,
        moveX: (Math.random() - 0.5) * 100,
        moveY: (Math.random() - 0.5) * 80,
        duration: 6 + Math.random() * 4,
      }));

    return {
      small: generateStarData(50),
      medium: generateStarData(25),
      large: generateStarData(12),
      extraSmall: generateStarData(30),
    };
  }, []);
};

