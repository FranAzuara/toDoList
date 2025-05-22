import { useState } from "react";
import { Button } from "../Button/button";
import { TextField } from "../TextField/textField";
import { DescriptionField } from "../TextField/descriptionField";

type CreateTaskFormProps = {
  onAddNewTask: (name: string, description: string) => void;
};

export const CreateTaskForm = (props: CreateTaskFormProps) => {
  const [newName, setNewName] = useState<string>("");
  const [newDescription, setNewDescription] = useState<string>("");
  const [nameError, setNameError] = useState<string | null>(null);

  const handleChange = (text: string) => {
    const maxLength = 50;
    if (text.length > maxLength) {
      alert(`El texto supera los ${maxLength} caracteres`);
      return;
    }
    setNewName(text);
  };
  const handleDescriptionChange = (desc: string) => {
    setNewDescription(desc);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    let hasError = false;

    if (!newName.trim()) {
      setNameError("Task name is required");
      hasError = true;
    }
    if (hasError) return;

    props.onAddNewTask(newName, newDescription);

    setNewName("");
    setNewDescription("");
    setNameError(null);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 max-w-md mx-auto p-4"
    >
      <div className="flex flex-col">
        <label htmlFor="taskName" className="mb-1 font-semibold">
          Task title
        </label>
        <TextField onChange={handleChange} value={newName} />
        <span className="text-red-500 text-sm mt-1">{nameError}</span>
      </div>

      <div className="flex flex-col">
        <label htmlFor="taskDescription" className="mb-1 font-semibold">
          Task description
        </label>
        <DescriptionField
          onChange={handleDescriptionChange}
          value={newDescription}
        />
      </div>

      <Button text="Create" />
    </form>
  );
};
