import styled from 'styled-components';

const colors = {
  background: "gray",
  text: "#000"
}

export const FormTable = styled.form`
  position: absolute;
  height: 80vh;
  width: 75%;
  display: 'flex';
  flex-direction: "column";
  align-items: "center";
  overflow: scroll;
`

export const TableComponent = styled.div`
  width: 98%;
  height: 85px;
  background: ${colors.background};

  display: flex;
  margin: 0 auto;
  
  background: ${ (props:any) => props.bg || "#F9FAFC"};
  box-shadow: 0px 0px 4px rgba(196, 196, 196, 0.25);
  border-radius: 9px;
  margin-top: 15px;
  justify-content: space-around;
  align-items: center;
  color: #3682F9;
  font-weight: bold;
`;

export const Rg = styled.div`
  width: 15%;
  height: 100%;
  display: flex;
  justify-content:center;
  align-items: center;
  h3{
    font-size: 1.2rem;
  }
`
export const Nome = styled.div`
  width: 25%;
  height: 100%;
  display: flex;
  justify-content:center;
  align-items: center;
  text-align: center;
  h3{
    font-size: 1.2rem;
  }
`

export const Ficha = styled.div`
  width: 25%;
  height: 100%;
  display: flex;
  justify-content:center;
  align-items: center;
  h3{
    font-size: 1.2rem;
  }
`

export const Identificador = styled.div`
  width: 25%;
  height: 100%;
  display: flex;
  justify-content:center;
  align-items: center;
  h3{
    font-size: 1.2rem;
  }
`

export const DtIdentficacao = styled.div`
  width: 25%;
  height: 100%;
  display: flex;
  justify-content:center;
  align-items: center;
  h3{
    font-size: 1.2rem;
  }
`
export const Checkmark = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: #eee;
  border-radius: 15px;

  :after {
    content: "";
    position: absolute;
    display: none;
  }
`

export const CheckboxTitle = styled.div`
  width: 25%;
  height: 100%;
  display: flex;
  justify-content:center;
  align-items: center;
  h3{
    font-size: 1.2rem;
  }
`

export const Checkbox = styled.label`
  width: 0%;
  height: 30%;
  display: block;
  position: relative;
  padding-left: 35px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  

  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }  

  h3{
    font-size: 1.2rem;
  }

  :hover input ~ ${Checkmark} {
    background-color: #ccc;
  }

  input:checked ~ ${Checkmark} {
    background-color: #2196f3;
  }

  input:checked ~ ${Checkmark}:after {
    display: block;
  }

  ${Checkmark}:after {
    left: 9px;
    top: 5px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }

`

