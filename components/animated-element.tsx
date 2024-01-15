"use client";
import { motion, AnimationProps, MotionProps } from "framer-motion";
import React, { ReactElement } from "react";

interface AnimatedElementProps {
  elementType: string;
  animationProps: AnimationProps;
  motionProps?: MotionProps;
  className?: string;
  children: React.ReactNode;
}

const AnimatedElement = ({
  elementType,
  animationProps,
  motionProps,
  className,
  children,
}: AnimatedElementProps): ReactElement => {
  // @ts-ignore
  const MotionComponent = motion[elementType];

  return (
    <MotionComponent {...animationProps} {...motionProps} className={className}>
      {children}
    </MotionComponent>
  );
};

export default AnimatedElement;
