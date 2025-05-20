type ButtonProps = {
  text: string;
};
export const Button = (props: ButtonProps) => {
  return <button type="submit">{props.text}</button>;
};
