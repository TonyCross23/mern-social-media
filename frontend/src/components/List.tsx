import { ListProps } from "../utils/tyes";

const List = ({ children }: ListProps) => {
  return (
    <ul
      style={{
        listStyle: "none",
        padding: 0,
        margin: 0,
        border: "1px solid #ddd",
        borderRadius: 8,
        overflow: "hidden",
      }}
    >
      {children}
    </ul>
  );
};

export default List;
