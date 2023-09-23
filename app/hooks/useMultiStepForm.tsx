"use client";
import React, { ReactElement } from "react";

const useMultiStepForm = (formSteps: ReactElement[]) => {
  const [currentIndex, setCurrentIndex] = React.useState(1);

  const goForword = () => {
    if (currentIndex === formSteps?.length - 1) return;
    setCurrentIndex((prev) => prev + 1);
  };

  const goBackWords = () => {
    if (currentIndex === 0) return;
    setCurrentIndex((prev) => prev - 1);
  };

  return {
    formSteps,
    currentIndex,
    currentStep: formSteps?.[currentIndex],
    goBackWords,
    goForword,
    isFirst: currentIndex === 0,
    isLast: currentIndex === formSteps?.length - 1,
  };
};

export default useMultiStepForm;
