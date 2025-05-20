type TextFieldProps = {
  value: string;
  onChange: (text: string) => void;
};
export const TextField = (props: TextFieldProps) => {
  return (
    <input
      className="border border-white p-2 rounded"
      type="text"
      value={props.value}
      onChange={(e) => {
        console.log("TextField onChange", e);
        const text = e.target.value;
        props.onChange(text);
      }}
    />
  );
};
