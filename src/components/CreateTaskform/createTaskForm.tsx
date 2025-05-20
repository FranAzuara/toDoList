import { useState } from "react";
import { Button } from "../Button/button";
import { TextField } from "../TextField/textField";

type CreateTaskFormProps = {
  onAddNewTask: (name: string) => void;
};

export const CreateTaskForm = (props: CreateTaskFormProps) => {
  const [newName, setNewName] = useState<string>("");

  const handleChange = (text: string) => {
    const maxLength = 50;
    if (text.length > maxLength) {
      alert(`Text exceeds ${maxLength} characters`);
      return;
    }
    setNewName(text);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    props.onAddNewTask(newName);
    setNewName("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField onChange={handleChange} value={newName} />
      <Button text="Create" />
    </form>
  );
};
