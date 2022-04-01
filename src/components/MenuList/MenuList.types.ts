export interface IMenuItem {
  description: string;
  name: string;
  url: string;
  price: number;
}

export type TMenuListItem = {
  categoryMenuTitle: string;
  menuItemData: Array<IMenuItem>;
};
