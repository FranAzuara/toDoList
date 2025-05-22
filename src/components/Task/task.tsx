type TaskProps = {
  name: string;
  description?: string;
  isCompleted: boolean;
  onToggle: (state: boolean) => void;
};

export const Task = (props: TaskProps) => {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderColor: "black",
        borderRadius: "8px",
        boxShadow: "0 2px 4px rgb(255, 255, 255)",
        padding: "10px",
        borderBottom: "1px solid #ccc",
        backgroundColor: props.isCompleted ? "#f0f0f0" : "#fff",
        width: "600px",
        display: "flex",
        flexDirection: "column",
        gap: "2px",
        marginBottom: "10px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <input
          type="checkbox"
          checked={props.isCompleted}
          onChange={(e) => props.onToggle(e.target.checked)}
        />
        <p
          style={{
            textDecoration: props.isCompleted ? "line-through" : "none",
            margin: 0,
            color: "black",
            flex: 1,
            marginLeft: "8px",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          {props.name}
        </p>
      </div>

      {props.description && (
        <p
          style={{
            fontSize: "0.85rem",
            color: "#555",
            margin: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            wordBreak: "break-word",
          }}
        >
          {props.description}
        </p>
      )}
    </div>
  );
};
