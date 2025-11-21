import React, { useState } from "react";

export default function Input() {
  const [text, setText] = useState("");
  const [output, setOutput] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setOutput(text);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Something....."
        value={text}
        onChange={handleChange}
        data-testid="input"
      />
      <button type="submit" data-testid="submit-btn">
        show
      </button>
      <p data-testid="output">{output}</p>
    </form>
  );
}
