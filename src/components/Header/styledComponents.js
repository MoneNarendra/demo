import styled from 'styled-components'

export const NavContiainer = styled.div`
  background-color: ${props => (props.lightTheme ? '#ffffff' : '#212121')};
  padding: 18px;
`
export const BtnICons = styled.button`
  border-width: 0px;
  background-color: transparent;
  color: ${props => (props.lightTheme ? '#212121' : '#ffffff')};
`

export const ModelCon = styled.div`
  width: 100%;
  min-height: 100px;
  margin: 0px;
  padding: 10px;
  background-color: ${props => (props.lightTheme ? '#ffffff' : '#474745')};
  border-radius: 8px;
  outline: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const ModelHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 12px;
  text-align: center;
  font-weight: 500;
  color: ${props => (props.lightTheme ? '#212121' : '#ffffff')};
`
export const ModelBtn = styled.button`
  margin: 10px;
  padding: 6px;
`

export const CanceBtn = styled(ModelBtn)`
  border: 2px solid ${props => (props.lightTheme ? '#212121' : '#ffffff')};
  background-color: transparent;
  color: ${props => (props.lightTheme ? '#212121' : '#ffffff')};
`

export const ConfirmBtn = styled(ModelBtn)`
  border-width: 0px;
  background-color: #4f46e5;
  color: #ffffff;
`
