export interface IMenuItem {
  description: string;
  name: string;
  url: string;
  price: number;
}

export type THomeViewProps = {
  itemData: Array<{
    name: string;
    items: Array<IMenuItem>;
  }>;
};
