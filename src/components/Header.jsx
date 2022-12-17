import { HeaderContainer, Text, Logo, SmallText } from "../styles/Header.styles"
import MenuButton from "./MenuButton"

export default function Header() {

    return (
        <HeaderContainer>
            <Text><Logo src={"./logo_white.svg"} />Pokéstats<SmallText>.info</SmallText></Text>
            <MenuButton />
        </HeaderContainer>
    )
}