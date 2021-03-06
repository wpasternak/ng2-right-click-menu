export interface IShContextMenuItem {
  label?: string;
  id?: string;
  divider?: boolean;
  onClick?($event: any): void;
  visible?(context: any): boolean;
  disabled?(context: any): boolean;
  subMenu?: boolean;
  subMenuItems?: IShContextMenuItem[];
  data?:any;
}
