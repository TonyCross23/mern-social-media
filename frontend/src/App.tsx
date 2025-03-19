import { useState } from "react";
import Items from "./components/Items";
import List from "./components/List";
import { ItemType } from "./utils/tyes";
import Form from "./components/Form";

const App = () => {
  const [data, setData] = useState<ItemType[]>([
    { id: 1, content: "Hello, World!", name: "Alice" },
    { id: 2, content: "React is fun.", name: "Bob" },
    { id: 3, content: "Yay, interesting.", name: "Chris" },
  ]);

  const remove = (id: number) => {
    setData(data.filter((item) => item.id !== id));
  };

  const add = (content: string, name: string) => {
    const id = data[data.length - 1].id + 1;
    setData([...data, { id, content, name }]);
  };

  return (
    <div style={{ maxWidth: 600, margin: "20px auto" }}>
      <Form add={add} />
      <h1>Yaycha</h1>
      <List>
        {data?.map((item) => (
          <Items key={item.id} item={item} remove={remove} />
        ))}
      </List>
    </div>
  );
};

export default App;
