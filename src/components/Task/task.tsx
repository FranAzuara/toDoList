type TaskProps = {
  name: string;
  isCompleted: boolean;
  onToggle: (state: boolean) => void;
};

export const Task = (props: TaskProps) => {
  const { name, isCompleted, onToggle } = props;
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "2px 5px",
        borderBottom: "1px solid #ccc",
        backgroundColor: isCompleted ? "#f0f0f0" : "#fff",
        width: "300px",
      }}
    >
      <input
        type="checkbox"
        checked={isCompleted}
        onChange={(e) => {
          const state = e.target.checked;
          onToggle(state);
        }}
      />
      <p
        className="break-words w-full"
        style={{
          textDecoration: isCompleted ? "line-through" : "none",
          margin: 0,
          color: "black",
        }}
      >
        {name}
      </p>
    </div>
  );
};
