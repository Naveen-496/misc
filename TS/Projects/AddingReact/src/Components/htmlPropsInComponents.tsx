import React, { ComponentProps } from "react";

const ButtonEle = ({ className, ...rest }: ComponentProps<"button"> & { children: React.ReactNode }) => {
  return (
    <button className={`default-${className}`} {...rest}>
      {rest.children}
    </button>
  );
};

const ParentComponent = () => {
  return (
    <>
      <ButtonEle onClick={() => {}} className="my-class">
        Children
      </ButtonEle>
    </>
  );
};
