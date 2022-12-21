import { FooterContainer, ApiLink } from "../styles/Footer.styles"

export default function Footer() {

    return (
        <FooterContainer >
            © Pokéstats 2022 | Made Possible with <ApiLink href="https://pokeapi.co/" target="_blank">PokeAPI</ApiLink>
        </FooterContainer>
    )
}