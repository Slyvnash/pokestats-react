import { MenuButtonSVG } from "../styles/MenuButton.styles";
import { useAtom } from "jotai";
import { menuAtom } from "../atoms/menu-atom";

//Menu button for mobile view
export default function MenuButton() {
  const [toggle, setToggle] = useAtom(menuAtom);

  const handleClick = () => {
    setToggle(!toggle);
  };

    return (
      <MenuButtonSVG
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-menu-2"
        width="44"
        height="44"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
        onClick={handleClick}
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <line x1="4" y1="6" x2="20" y2="6" />
        <line x1="4" y1="12" x2="20" y2="12" />
        <line x1="4" y1="18" x2="20" y2="18" />
      </MenuButtonSVG>
    );
}
