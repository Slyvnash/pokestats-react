import styled from "styled-components";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 1em 0;
  min-width: 327px;

  @media only screen and (min-width: 1280px) {
    justify-content: center;
  }
`;

const Text = styled.h1`
  font-size: 1.5rem;
  font-weight: 900;
  margin: auto 0;

  .small {
    font-size: 0.75rem;
    font-weight: 400;
  }

  @media only screen and (min-width: 480px) {
    font-size: 1.75rem;

    .small {
      font-size: 1rem;
    }
  }

  @media only screen and (min-width: 480px) {
    font-size: 2rem;

    .small {
      font-size: 1.1rem;
    }
  }
`;

const Logo = styled.img`
    width: 1.1rem;
    height: 1.1rem;
    margin-right: 0.35em;

    @media only screen and (min-width: 480px) {
      width: 1.25rem;
      height: 1.25rem;
    }

    @media only screen and (min-width: 480px) {
      width: 1.5rem;
      height: 1.5rem;
    }
`

export { HeaderContainer, Text, Logo};
