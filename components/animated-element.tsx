"use client";
import { motion, AnimationProps, MotionProps } from "framer-motion";
import React, { ReactElement } from "react";

interface AnimatedElementProps {
  elementType: string;
  animationProps?: AnimationProps;
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
  animationProps,
  motionProps,
  className,
  children,
  initial = "hidden",
  whileInView = "visible",
  viewport = { once: true },
  variants,
}: AnimatedElementProps): ReactElement => {
  // @ts-ignore
  const MotionComponent = motion[elementType];

  return (
    <MotionComponent
      initial={initial}
      whileInView={whileInView}
      viewport={viewport}
      variants={variants}
      {...animationProps}
      {...motionProps}
      className={className}
    >
      {children}
    </MotionComponent>
  );
};

export default AnimatedElement;
