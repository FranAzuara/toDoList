type DescriptionFieldProps = {
  value?: string;
  onChange: (text: string) => void;
};
export const DescriptionField = (props: DescriptionFieldProps) => {
  return (
    <input
      className="border border-white p-2 rounded"
      placeholder="Add a description..."
      type="text"
      id="taskDescription"
      value={props.value ?? ""}
      onChange={(e) => {
        console.log("DescriptionField onChange", e);
        const text = e.target.value;
        props.onChange(text);
      }}
    />
  );
};
