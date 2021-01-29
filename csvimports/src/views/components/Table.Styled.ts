import styled from 'styled-components';

const colors = {
  background: "gray",
  text: "#000"
}

export const TableComponent = styled.div`
  width: 100%;
  height: max-content;
  padding-bottom: 15px;
  background: ${colors.background};

  display: flex;
`;

export const Rg = styled.div`
  width: 15%;
  h3{
    font-size: 1.2rem;
  }
`
export const Nome = styled.div`
  width: 25%;
  h3{
    font-size: 1.2rem;
  }
`

export const Ficha = styled.div`
  width: 25%;
  h3{
    font-size: 1.2rem;
  }
`

export const Identificador = styled.div`
  width: 25%;
  h3{
    font-size: 1.2rem;
  }
`

export const DtIdentficacao = styled.div`
  width: 25%;
  h3{
    font-size: 1.2rem;
  }
`