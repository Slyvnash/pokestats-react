import styled from "styled-components";

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25em;
  font-size: 1rem;
  font-weight: 900;

  p {
    margin: 0;
  }

  .activeVal {
    color: ${({ theme }) => theme.colors.main};
    text-transform: capitalize;
  }
`

const SearchBox = styled.input`
  width: 100%;
  padding: 0.25em;
  font-size: 1.1rem;
  border: 1px solid ${(props) => props.theme.colors.accent};
  border-radius: 4px;
  margin-bottom: 0.5em;
`

const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 0.5em;
`

const TypeButton = styled.button`
  height: 2rem;
  width: 2rem;
  color: ${(props) => props.theme.colors.white};
  font-weight: 700;
  background-color: ${(props) => props.disabled ? props.theme.colors.accent : props.theme.colors.main};
  border: none;
  border-radius: 4px;
  margin: 0.125em;
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
    height: 25%;
    overflow-x: scroll;
    scroll-snap-type: x mandatory;
    overflow-y: hidden;
    display: flex;
    gap: 1rem;
    margin-top: 24px;
`

const SelectOption = styled.div`
    display: flex;
    scroll-snap-align: start;
    flex: 0 0 auto;
    flex-direction: column;
    width: 48%;
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
