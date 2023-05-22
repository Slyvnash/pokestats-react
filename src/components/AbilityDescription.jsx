
import { useStore } from "../store/store";
import { AbilityDescriptionContainer } from "../styles/Card.styles";

//Contains the tooltis for abilities
export default function AbilityDescription() {
    const abilityText = useStore((state) => state.abilityText)

    return (
        <AbilityDescriptionContainer>
            {abilityText}
        </AbilityDescriptionContainer>
    )
}