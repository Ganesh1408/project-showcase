import styled from 'styled-components'

export const ListContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 80%;
`
export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`
export const FailureContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify: center;
  align-items: center;
`

export const IMG = styled.img`
  width: 100%;
  height: 300px;
`
export const ProjectHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 42px;
  color: #475569;
  font-weight: 700;
`
export const Description = styled.p`
  font-family: 'Roboto';
  font-size: 20px;
  color: #cbd5e1;
  font-weight: 400;
`
export const RetryButton = styled.button`
  height: 30px;
  width: 600px;
  background-color: #328af2;
  color: #fff;
  border-radius: 4px;
  border: none;
`
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`
export const InputContainer = styled.div`
  margin-top: 30px;
  margin-bottom: 30px;
  margin-left: 30px;
`

export const Select = styled.select`
  height: 30px;
  width: 400px;
  border-radius: 4px;
`

export const Option = styled.option`
  font-family: 'Roboto';
  font-size: 15px;
  color: #475569;
`
