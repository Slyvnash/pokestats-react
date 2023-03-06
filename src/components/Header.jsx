import { HeaderContainer, Text, Logo } from "../styles/Header.styles"
import MenuButton from "./MenuButton"

export default function Header() {

    return (
        <HeaderContainer>
            <Text><Logo src={"./logo_white.svg"} alt="Pokestats Logo"/>Pokéstats<span className="small">.info</span></Text>
            <MenuButton />
        </HeaderContainer>
    )
}