import styled from 'styled-components'

export const HomeBgContainer = styled.div`
    padding-left: 10px;
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: ${props => (props.lightTheme ? '#ffffff' : '#0f0f0f')};
`
