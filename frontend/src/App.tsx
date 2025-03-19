import { useContext, useState } from "react";
import Items from "./components/Items";
import List from "./components/List";
import { ItemType } from "./utils/tyes";
import Form from "./components/Form";
import { AppContext } from "./themes/ThemedApp";

const App = () => {
  const context = useContext(AppContext);
  const { mode, setMode } = context || {};
  const [data, setData] = useState<ItemType[]>([
    { id: 1, content: "Hello, World!", name: "Alice" },
    { id: 2, content: "React is fun.", name: "Bob" },
    { id: 3, content: "Yay, interesting.", name: "Chris" },
  ]);
  const [showForm, setShowForm] = useState(false);

  const remove = (id: number) => {
    setData(data.filter((item) => item.id !== id));
  };

  const add = (content: string, name: string) => {
    const id = data[data.length - 1].id + 1;
    setData([...data, { id, content, name }]);
  };

  return (
    <div
      style={{
        minHeight: 1500,
        background: mode === "dark" ? "black" : "white",
        color: mode === "dark" ? "white" : "black",
        paddingTop: 20,
      }}
    >
      <div style={{ maxWidth: 600, margin: "20px auto" }}>
        <h1
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          Yaycha
          <div>
            <button
              onClick={() => setShowForm(!showForm)}
              style={{
                width: 32,
                height: 32,
                borderRadius: 50,
                border: "0 none",
                background: showForm ? "#dc3545" : "#0d6efd",
                color: "white",
              }}
            >
              {showForm ? "×" : "+"}
            </button>
            <button
              onClick={() =>
                setMode && setMode(mode === "dark" ? "light" : "dark")
              }
              style={{
                marginLeft: 8,
                padding: "0 10px",
                height: 35,
                borderRadius: 100,
                border: "0 none",
                background: mode === "dark" ? "#333" : "#ddd",
                color: mode === "dark" ? "white" : "black",
              }}
            >
              {mode === "dark" ? "🌞" : "🌙"}
            </button>
          </div>
        </h1>
        {showForm && <Form add={add} />}
        <List>
          {data?.map((item) => (
            <Items key={item.id} item={item} remove={remove} />
          ))}
        </List>
      </div>
    </div>
  );
};

export default App;
