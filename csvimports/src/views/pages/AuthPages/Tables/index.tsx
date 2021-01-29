import React, { useEffect, useState } from 'react';
import api from '../../../../infra/services/Api';
import { DtIdentficacao, Ficha, Identificador, Nome, Rg, TableComponent } from '../../../components/Table.Styled';
import { Container } from './styles';

const Tables: React.FC = () => {


  const [ List, setList  ] = useState<object | any>();
  console.log(List)

  useEffect(()=>{
    const BuscarDados: any = async () => {
      try {

        const { data } = await api.get('/csvs')

        return setList(data);

      } catch (error) {

        return console.log(error)

      }
    }
    BuscarDados()
  },[])

  return (
    <Container>
        <h1>Teste</h1>
        <TableComponent>
          <Nome>Nome</Nome>
        </TableComponent>
        { List.map( (e:any) => (
          <TableComponent>
            <Nome>{e.NOME}</Nome>
            <Rg>{e.RG}</Rg>
            <Ficha>{e.FICHA}</Ficha>
            <Identificador>{e.IDENTIFICADOR}</Identificador>
            <DtIdentficacao>{e.DTIDENTIFICACAO}</DtIdentficacao>
          </TableComponent>
        )) }
    </Container>
  )
}

export default Tables;
