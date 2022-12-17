import styled from "styled-components";

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  font-size: 1rem;
  font-weight: 900;
`

const SearchBox = styled.input`
  width: 100%;
  padding: 4px;
  font-size: 1.1rem;
  border: 1px solid ${(props) => props.theme.colors.accent};
  border-radius: 4px;
  margin-bottom: 8px;
`

const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 8px;
`

const TypeButton = styled.button`
  height: 32px;
  width: 32px;
  color: ${(props) => props.theme.colors.white};
  font-weight: 700;
  background-color: ${(props) => props.disabled ? props.theme.colors.accent : props.theme.colors.main};
  border: none;
  border-radius: 4px;
  margin: 2px;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.disabled ? props.theme.colors.accent : props.theme.colors.highlight};
  }
`;
const TypeImg = styled.img`
  display: flex;
  margin: auto;
  width: 90%;
  height: 90%;
`;

const SelectBox = styled.div`
    width: 100%;
    height: 128px;
    overflow-x: scroll;
    overflow-y: hidden;
    display: flex;
    gap: 1rem;
    margin-top: 24px;
`

const SelectOption = styled.div`
    display: flex;
    flex: 0 0 auto;
    flex-direction: column;
    width: 128px;
    align-items: center;
    font-family: "Nunito", sans-serif;
    font-weight: 900;
    text-transform: capitalize;
    cursor: pointer;
`

const OptionImage = styled.img`
    width: 70%;
`

export { FormContainer, SearchBox, ButtonContainer, TypeButton, TypeImg, SelectBox, SelectOption, OptionImage };
