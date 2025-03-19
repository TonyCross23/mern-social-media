import React, { useContext, useRef } from "react";
import { AppContext } from "../themes/ThemedApp";

type FormProps = {
  add: (content: string, name: string) => void;
};

const Form: React.FC<FormProps> = ({ add }) => {
  const context = useContext(AppContext);
  const mode = context?.mode || "dark";
  const contentRef = useRef<HTMLInputElement | null>(null);
  const nameRef = useRef<HTMLInputElement | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const content = contentRef.current?.value.trim() || "";
    const name = nameRef.current?.value.trim() || "";
    add(content, name);

    e.currentTarget.reset();
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 3,
        padding: 10,
        borderRadius: 8,
        marginBottom: 20,
        background: mode === "dark" ? "#555" : "#def",
      }}
    >
      <input
        type="text"
        placeholder="Content"
        style={{ padding: 5 }}
        ref={contentRef}
      />
      <input
        type="text"
        placeholder="Name"
        style={{ padding: 5 }}
        ref={nameRef}
      />
      <button
        type="submit"
        style={{
          padding: 8,
          background: "#0d6efd",
          color: "white",
          border: "0 none",
        }}
      >
        Post
      </button>
    </form>
  );
};

export default Form;
