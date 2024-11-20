// Style your elements here
import styled from 'styled-components'

export const ReadMoreAppContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
`

export const Title = styled.h1`
  font-family: 'Roboto';
  font-size: 30px;
  font-weight: 550;
  color: #1e293b;
  margin-bottom: 0px;
`

export const Discription = styled.p`
  font-size: 15px;
  color: #334155;
  width: 650px;
  margin-bottom: 25px;
`
export const SubTitle = styled(Discription)`
  text-align: center;
`

export const ReactHooksImg = styled.img`
  height: 350px;
  width: 650px;
`
export const Btn = styled.button`
  background-color: #1f81ff;
  color: #ffffff;
  padding: 8px;
  padding-left: 15px;
  padding-right: 15px;
  border: none;
  border-radius: 3px; 
`
