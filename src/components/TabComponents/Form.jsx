import { useStore } from "../../store/store";
import { typeData, generationData } from "./data";
import {
  FormContainer,
  SearchBox,
  ButtonContainer,
  TypeButton,
  TypeImg,
  SelectBox,
  SelectOption,
  OptionImage,
} from "../../styles/Form.styles";

export default function Form(props) {
  const isLoading = useStore((state) => state.isLoading);
  const updateFilter = useStore((state) => state.filters.updateFilter);
  const runFilter = useStore((state) => state.filters.runFilter);
  const filteredList =
    props.id === "tabOne"
      ? useStore((state) => state.filteredListOne)
      : useStore((state) => state.filteredListTwo);
  const searchVal = useStore((state) => state.filters[props.id].search);
  const typeVal = useStore((state) => state.filters[props.id].type);
  const generationVal = useStore((state) => state.filters[props.id].generation);
  const selectPokemon = useStore((state) => state.selectPokemon);

  function buildButtons(data, store, dataType) {
    const buttons = data.map((obj) => (
      <TypeButton
        key={obj.name}
        disabled={store === obj.name ? true : false}
        onClick={() => {
          updateFilter(props.id, dataType, obj.name)
          runFilter(props.id)
        }}
      >
        {dataType === "type" ? <TypeImg src={obj.value} /> : `${obj.value}`}
      </TypeButton>
    ));

    return buttons;
  }

  const list = filteredList.map((item) => (
    <SelectOption
      key={item.id}
      onClick={() => selectPokemon(props.id, item.id)}
    >
      <OptionImage src={item.sprites.other["official-artwork"].front_default} />
      {item.name}
    </SelectOption>
  ));

  if (isLoading) return <div>Loading...</div>;

  return (
    <FormContainer>
      <SearchBox
        type="text"
        placeholder={`Search...`}
        value={searchVal}
        onChange={(e) => {
          updateFilter(props.id, "search", e.currentTarget.value);
          runFilter(props.id);
        }}
      />
      Type:
      <ButtonContainer>
        <TypeButton
          key={"all"}
          disabled={typeVal === "all" ? true : false}
          onClick={() => {
            updateFilter(props.id, "type", "all");
            runFilter(props.id);
          }}
        >
          <TypeImg src={"./all.svg"} />
        </TypeButton>
        {buildButtons(typeData, typeVal, "type")}
      </ButtonContainer>
      Generation:
      <ButtonContainer>
        <TypeButton
          key={"all"}
          disabled={generationVal === "all" ? true : false}
          onClick={() => {
            updateFilter(props.id, "generation", "all");
            runFilter(props.id);
          }}
        >
          <TypeImg src={"./all.svg"} />
        </TypeButton>
        {buildButtons(generationData, generationVal, "generation")}
      </ButtonContainer>
      <SelectBox>{list}</SelectBox>
    </FormContainer>
  );
}
