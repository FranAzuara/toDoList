type TextFieldProps = {
  value: string;
  onChange: (text: string) => void;
};
export const TextField = (props: TextFieldProps) => {
  return (
    <input
      className="border p-2 rounded border-white"
      placeholder="Enter task name..."
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
