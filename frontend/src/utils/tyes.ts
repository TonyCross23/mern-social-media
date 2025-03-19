export type ListProps = {
  children: React.ReactNode;
};

export type ItemType = {
  id: number;
  name: string;
  content: string;
};

export type ItemProps = {
  item: ItemType;
  remove: (id: number) => void;
};
