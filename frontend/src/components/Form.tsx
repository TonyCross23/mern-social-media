import { Box, Button, TextField } from "@mui/material";
import React, { useRef } from "react";

type FormProps = {
  add: (content: string, file: string, name: string) => void;
};

const Form: React.FC<FormProps> = ({ add }) => {
  const contentRef = useRef<HTMLInputElement | null>(null);
  const fileRef = useRef<HTMLInputElement | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const content = contentRef.current?.value.trim() || "";
    const file = fileRef.current?.value.trim() || "";
    const name = "Alice";
    add(content, file, name);

    e.currentTarget.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box sx={{ mb: 4, textAlign: "right" }}>
        <TextField
          inputRef={contentRef}
          type="text"
          placeholder="Content"
          fullWidth
          multiline
          sx={{ mb: 1 }}
        />
        <TextField inputRef={fileRef} type="file" fullWidth sx={{ mb: 1 }} />
        <Button variant="contained" type="submit">
          Post
        </Button>
      </Box>
    </form>
  );
};

export default Form;
