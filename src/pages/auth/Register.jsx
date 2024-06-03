import React from "react";
import { RegisterStep01 } from '../../components/index'
import {
  UserIcon,
  BuildingLibraryIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/outline";
import { Stepper, Step, Button, Typography } from "@material-tailwind/react";

function Regiter() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [isLastStep, setIsLastStep] = React.useState(false);
  const [isFirstStep, setIsFirstStep] = React.useState(false);

  const handleNext = () => !isLastStep && setActiveStep((cur) => cur + 1);
  const handlePrev = () => !isFirstStep && setActiveStep((cur) => cur - 1);

  return (
    <div className="flex w-full h-screen ">
      <div className="items-center  justify-center">
        <div className="bg-primary absolute w-[100%] md:w-[70%] h-screen order-1   item-center">
          <div className="md:px-20 mt-7 md:mt-0 px-4 md:py-6 md:w-[80%]">
            <Stepper
              activeStep={activeStep}
              isLastStep={(value) => setIsLastStep(value)}
              isFirstStep={(value) => setIsFirstStep(value)}
              className="px-5"
            >
              <Step onClick={() => setActiveStep(0)}>
                <DocumentTextIcon className="h-5 w-5 " />
                <div className="absolute -bottom-[2rem] w-max text-center">
                  <Typography
                    className="hidden sm:flex"
                    variant="h6"
                    color={activeStep === 0 ? "blue-gray" : "gray"}
                  >
                    Create Account
                  </Typography>
                </div>
              </Step>
              <Step onClick={() => setActiveStep(1)}>
                <UserIcon className="h-5 w-5" />
                <div className="absolute -bottom-[2rem] w-max text-center">
                  <Typography
                    className="hidden sm:flex"
                    variant="h6"
                    color={activeStep === 1 ? "blue-gray" : "gray"}
                  >
                    Profile
                  </Typography>
                </div>
              </Step>
              <Step onClick={() => setActiveStep(2)}>
                <BuildingLibraryIcon className="h-5 w-5" />
                <div className="absolute -bottom-[2rem] w-max text-center">
                  <Typography
                    className="hidden sm:flex"

                    variant="h6"
                    color={activeStep === 2 ? "blue-gray" : "gray"}
                  >
                    Confarmation
                  </Typography>
                </div>
              </Step>
              <Step onClick={() => setActiveStep(3)}>
                <BuildingLibraryIcon className="h-5 w-5" />
                <div className="absolute -bottom-[2rem] w-max text-center">
                  <Typography
                    className="hidden sm:flex"

                    variant="h6"
                    color={activeStep === 3 ? "blue-gray" : "gray"}
                  >
                    All done
                  </Typography>
                </div>
              </Step>
            </Stepper>
            <div className="mt-10">
              <RegisterStep01 />
              {/* <Step2 /> */}
              {/* <Step3 /> */}
            </div>

            <div className=" mt-3 flex justify-between">
              <Button onClick={handlePrev} disabled={isFirstStep}>
                Prev
              </Button>
              <Button onClick={handleNext} disabled={isLastStep}>
                Next
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="md:flex hidden   h-screen order-2 w-screen ">
        <div className="flex-1 ">hhh</div>
        <div className="w-[70%]">
          <img src='/src/assets/image/index.jpg' className="" />
        </div>
      </div>
    </div>
  );
}

export default Regiter;
