import styled from "styled-components";

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  margin: 0 auto;
  height: 48px;
`;

const Text = styled.h1`
  font-size: 1.5rem;
  font-weight: 900;
  margin: auto 0;
`;

const Logo = styled.img`
    width: 18px;
    margin-right: 6px;
`

const SmallText = styled.span`
    font-size: 0.75rem;
    font-weight: 400;
`

export { HeaderContainer, Text, Logo, SmallText };
