"use client";
import { motion, MotionProps } from "framer-motion";
import React, { ReactElement } from "react";

interface AnimatedElementProps {
  elementType: keyof React.JSX.IntrinsicElements;
  motionProps?: MotionProps;
  className?: string;
  children: React.ReactNode;
  initial?: string;
  whileInView?: string;
  viewport?: { once?: boolean; amount?: number };
  variants?: MotionProps["variants"];
}

const AnimatedElement = ({
  elementType,
  motionProps,
  className,
  children,
  initial = "hidden",
  whileInView = "visible",
  viewport = { once: true },
  variants,
}: AnimatedElementProps): ReactElement<any> => {
  // @ts-ignore
  const MotionComponent = motion[elementType];

  return (
    <MotionComponent
      initial={initial}
      whileInView={whileInView}
      viewport={viewport}
      variants={variants}
      {...motionProps}
      className={className}
    >
      {children}
    </MotionComponent>
  );
};

export default AnimatedElement;
