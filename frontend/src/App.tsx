import { useState } from "react";
import Items from "./components/Items";

import Form from "./components/Form";
import { useApp } from "./themes/ThemedApp";
import { Box, Container } from "@mui/material";
import Header from "./components/Header";

const App = () => {
  const { showForm } = useApp();
  const [data, setData] = useState([
    { id: 3, content: "Yay, interesting.", name: "Chris" },
    { id: 2, content: "React is fun.", name: "Bob" },
    { id: 1, content: "Hello, World!", name: "Alice" },
  ]);

  const remove = (id: number) => {
    setData(data.filter((item) => item.id !== id));
  };

  const add = (content: string, name: string) => {
    const id = data[data.length - 1].id + 1;
    setData([...data, { id, content, name }]);
  };

  return (
    <Box>
      <Header />
      <Container maxWidth="sm" sx={{ mt: 4 }}>
        {showForm && <Form add={add} />}
        {data.map((item) => {
          return <Items key={item.id} item={item} remove={remove} />;
        })}
      </Container>
    </Box>
  );
};

export default App;
