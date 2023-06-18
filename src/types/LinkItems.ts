import { IconType } from "react-icons";
import SubmenuItemProps from "./SubmenuItem";

export default interface LinkItemProps {
    name: string;
    icon: IconType;
    link?: string;
    submenu?: Array<SubmenuItemProps>;
  }