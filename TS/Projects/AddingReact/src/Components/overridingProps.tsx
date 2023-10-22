import { ComponentProps } from "react";

type OverriddenProps<T, TOverridden> = Omit<T, keyof TOverridden> & TOverridden;

type InputProps = OverriddenProps<
  ComponentProps<"input">,
  { onchange: (value: string) => void; className: string }
>;

const Input = (props: InputProps) => {
  return (
    <>
      <input
        {...props}
        className={props.className}
        onChange={(e) => {
          props.onchange(e.target.value);
        }}
      />
    </>
  );
};

const ParentInput = () => {
  return (
    <>
      <Input className="my-class" onchange={() => " "} />
    </>
  );
};
