import UpArrow from "./decorations/UpArrow";
import { useStore } from "../store/store";
import {
  CardContainer,
  Column,
  CardImage,
  Detail,
  Ability,
  StatsContainer,
  OuterStatBar,
  InnerStatBar,
  StatOverlay,
  StatText,
} from "../styles/Card.styles";
import AbilityDescription from "./AbilityDescription";

export default function Card(props) {
  const selection =
    props.id === 1
      ? useStore((state) => state.selectionOne)
      : useStore((state) => state.selectionTwo);
  const selectionOther =
    props.id === 1
      ? useStore((state) => state.selectionTwo)
      : useStore((state) => state.selectionOne);

  const setDisplayAbilityInfo = useStore(
    (state) => state.setDisplayAbilityInfo
  );

  const setAbilityText = useStore((state) => state.setAbilityText);
  const clearAbilityText = useStore((state) => state.clearAbilityText);

  const typeList = selection.types.map((item) => item.type.name);
  const abilitiesList = selection.abilities
    .map((item) => (
      <Ability
        key={item.ability.name}
        name={item.ability.name}
        onMouseOver={() => {
          setDisplayAbilityInfo();
          setAbilityText(item.ability.name);
        }}
        onMouseLeave={() => {
          setDisplayAbilityInfo();
          clearAbilityText();
        }}
        className={item.is_hidden ? "ha" : ""}
      >
        <AbilityDescription/>
        {item.ability.name.replace("-", " ")}
        {item.is_hidden ? " (HA)" : ""}
      </Ability>
    ))
    .reduce((prev, curr) => [prev, " / ", curr]);

  const statBars = [];

  for (let i = 0; i < 6; i++) {
    const currentStat = selection.stats[i];
    const shortenedName =
      currentStat.stat.name === "special-attack"
        ? "sp attack"
        : currentStat.stat.name === "special-defense"
        ? "sp defense"
        : currentStat.stat.name;

    statBars.push(
      <OuterStatBar key={currentStat.stat.name}>
        <InnerStatBar width={(currentStat.base_stat / 260) * 100} />
        <StatOverlay>
          <StatText>
            {shortenedName}: {currentStat.base_stat}
            {currentStat.base_stat > selectionOther.stats[i].base_stat ? (
              <UpArrow />
            ) : (
              ""
            )}
          </StatText>
        </StatOverlay>
      </OuterStatBar>
    );
  }

  return (
    <CardContainer>
      <Column>
        <CardImage
          src={selection.sprites.other["official-artwork"].front_default}
        />
        {selection.name}
        <Detail>{typeList.join(" / ")}</Detail>
        <Detail>{abilitiesList}</Detail>
      </Column>
      <Column>
        <StatsContainer>{statBars}</StatsContainer>
      </Column>
    </CardContainer>
  );
}
