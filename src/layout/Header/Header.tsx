import { LayoutHeader } from "./header.styles";

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = (props) => {
  return <LayoutHeader>{props.title}</LayoutHeader>;
};

export default Header;
