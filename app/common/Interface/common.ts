export default interface ITab {
  name: string;
  iconPath: string;
  activeIconPath?: string;
  onTabPress: (tabName: string) => void;
}
