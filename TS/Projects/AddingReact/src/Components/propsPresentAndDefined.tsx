type ButtonProps = {
  className: string;
};

type DivProps = {
  color: string;
}

const Button = (props: ButtonProps & DivProps) => {
  return <button className={props.className}></button>;
};

export const Parent = (): JSX.Element => {
  return (
    <div>
      <Button className="my-class" color="green"></Button>
    </div>
  );
};
