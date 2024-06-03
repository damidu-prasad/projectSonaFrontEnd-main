import React from "react";
import { Input, Checkbox, Typography } from "@material-tailwind/react";

const RegisterStep01 = () => {
  return (
    <div className="text-start w-[80%] ">
      <div className="flex-row sm:h-[50%] ">
        <h3 className="text-[24px] font-bold text-secondary">
          Welcome to Rage!
        </h3>
        <p className="text-[14px]">
          There is no power for change greater than a community
          <br />
          discovering what it cares about.
        </p>
        <div className="flex w-[384px] text-[14px] flex-col gap-2 ">
          <div className="my-4 flex items-center gap-4">
            <div>
              <label className="font-bold">Frist Name</label>
              <Input
                label="Frist name"
                maxLength={5}
                onChange={(event) => setCardExpires(event.target.value)}
                containerProps={{ className: "min-w-[72px]" }}
              />
            </div>
            <div>
              <label className="font-bold">Last Name</label>

              <Input
                label="Last name"
                maxLength={4}
                containerProps={{ className: "min-w-[72px]" }}
              />
            </div>
          </div>

          <label className="font-bold">Email</label>
          <Input label="Enter email" />

          <label className="font-bold">Password</label>
          <Input type="password" label="Enter password" />

          <label className="font-bold">Conform Password</label>
          <Input type="password" label="Enter conform password" />

          <Checkbox
            label={
              <Typography color="blue-gray" className="flex font-normal">
                I agree with the terms and conditions
              </Typography>
            }
          />
        </div>
      </div>
    </div>
  );
};

export default RegisterStep01;
