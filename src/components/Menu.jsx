import TabsMenu from "./TabComponents/TabsMenu"
import { MenuContainer } from "../styles/Menu.styles"
import { menuAtom } from "../atoms/menu-atom"
import { useAtom } from "jotai"

export default function Menu() {
    const [toggle] = useAtom(menuAtom)

    return (
        <MenuContainer open={toggle}>
            <TabsMenu />
        </MenuContainer>
    )
}