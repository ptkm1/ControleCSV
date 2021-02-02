import styled from 'styled-components';

export const Container = styled.div`
  background: #EEF3F9;
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 10px 15%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BlockLogin = styled.div`
  width: 70%;
  height: 70%;
  position: absolute;
  background: white;
  display: grid;
  grid-template-columns: 1fr 2fr;
  border-radius: 7px;
`;

export const ImageLogin = styled.div`
  background: #3682F9;
  width: 100%;
  height: 100%;
  border-radius: 7px 0 0 7px;
  img{
    object-fit: cover;
  }
`
export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 100%;
  label {
    width: 60%;
    color: #3682F9;
  }

`;