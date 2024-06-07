export interface HeaderMenuProps {
  handleOpenMenu: () => void;
  toggleMenuIsOpen: boolean;
}

export interface Item {
  label: string;
  url: string;
  component?: JSX.Element;
}
