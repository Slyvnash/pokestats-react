import styled from "styled-components";

const FooterContainer = styled.footer`
  text-align: center;
  font-size: 0.75rem;
  width: 100%;
  min-width: 327px;
  padding: 2em 0;

  & a {
    text-decoration: none;
    color: inherit;
    font-weight: 700;
  }

  @media only screen and (min-width: 480px) {
    font-size: 0.9rem;
  }
`;

export { FooterContainer};
