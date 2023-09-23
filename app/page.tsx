"use client";
import React from "react";
import BillingForm from "./components/BillingForm";
import Button from "./components/Button";
import InfoForm from "./components/InfoForm";
import StepCounter from "./components/StepCounter";
import useMultiStepForm from "./hooks/useMultiStepForm";
import AddonsForm from "./components/AddonsForm";
import FinishUpForm from "./components/FinishUpForm";

export default function Home() {
  const [counterData, setCounterData] = React.useState([
    { id: 1, counter: 1, title: "YOUR INFO", isActive: true },
    { id: 2, counter: 2, title: "SELECT PLAN", isActive: false },
    { id: 3, counter: 3, title: "ADD-ONS", isActive: false },
    { id: 4, counter: 4, title: "SUMMARY", isActive: false },
  ]);

  const {
    currentStep,
    goBackWords,
    currentIndex,
    formSteps,
    isLast,
    isFirst,
    goForword,
  } = useMultiStepForm([
    <InfoForm key={1} />,
    <BillingForm key={2} />,
    <AddonsForm key={3} />,
    <FinishUpForm key={4} />,
  ]);
  return (
    <main>
      <div className="flex  w-[70vw]  mt-4 mx-auto   gap-5  relative p-4 bg-white rounded">
        <div className=" min-h-[80vh]    rounded   bg-no-repeat  cover-photo p-4">
          {counterData?.map((counter) => {
            return (
              <StepCounter
                key={counter.id}
                counter={counter.counter}
                step={`step ${counter.counter}`}
                title={counter.title}
                active={currentIndex + 1 === counter.counter}
              />
            );
          })}
        </div>
        <div className="flex flex-col justify-between  items-center  w-[50%] mx-auto  h-auto mt-4 ">
          {currentStep}
          <div className="flex items-center justify-between w-full  ">
            {!isFirst ? (
              <Button title="Go back" onClick={goBackWords} />
            ) : (
              <div />
            )}
            <Button
              title={isLast ? "Confirm" : "Next Step"}
              primary
              onClick={goForword}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
