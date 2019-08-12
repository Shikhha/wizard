import React from "react";
import { AppContext } from "../container/AppProvider";

const Steps = () => {
  return (
    <AppContext.Consumer>
      {({ step }) => {
        return (
          <div className="progress-container text-center mt-4">
            <span
              className={
                step === 1
                  ? "progress-container__step active"
                  : "progress-container__step"
              }
            />
            <span
              className={
                step === 2
                  ? "progress-container__step active"
                  : "progress-container__step"
              }
            />
            <span
              className={
                step === 3
                  ? "progress-container__step active"
                  : "progress-container__step"
              }
            />
          </div>
        );
      }}
    </AppContext.Consumer>
  );
};

export default Steps;
