import styled from "styled-components";

const TabsContainer = styled.div`
    width: 100%;
    background-color: ${({ theme }) => theme.colors.accent};
    border-radius: 8px 0 0 8px;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.5);
`

const TabList = styled.ul`
    display: flex;
    justify-content: space-around;
    width: 100%;
    height: 38px;
    padding: 0;
    margin: 0;

    & li:first-child {
        border-top-left-radius: 8px;
    }
`

const TabListItem = styled.li`
    list-style-type: none;
    cursor: pointer;
    padding-top: 8px;
    padding-bottom: 8px;
    width: 50%;
    text-align: center;
    font-weight: 700;
    font-size: 1rem;
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.accent};

    &:hover {
        background-color: ${({ theme }) => theme.colors.highlight};
    }

    &.active {
        background-color: ${({ theme }) => theme.colors.accent};
        color: ${({ theme }) => theme.colors.white};
    }
`
const TabBody = styled.div`
display: flex;
    padding: 12px;
    width: 100%;
    height: 100%;
`
const TabContentContainer = styled.div`
    margin: 0;
    color: ${({ theme }) => theme.colors.accent};
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 8px;
    width: 100%;
    height: calc(100% - 38px);
    padding: 12px;
`

export {TabsContainer, TabList, TabListItem, TabBody, TabContentContainer}