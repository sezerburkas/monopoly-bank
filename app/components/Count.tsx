"use client";
import React, { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";

const Count = (props: { options: any }) => {
  const options = props.options;
  const [key, setKey] = useState(0);

  useEffect(() => {
    setKey((prevKey) => prevKey + 1);
  }, [options.end]);

  const { number } = useSpring({
    key,
    from: { number: options.start },
    to: { number: options.end },
    reset: true,
    config: { duration: options.duration * 1000 },
  });

  const currencyFormatter = new Intl.NumberFormat("en-US", {
    style: "decimal",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

  return (
    <animated.span>
      {number.interpolate((val: number) => currencyFormatter.format(Math.floor(val)))}
    </animated.span>
  );
};

export default Count;
