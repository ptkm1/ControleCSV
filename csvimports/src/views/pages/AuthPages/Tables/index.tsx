import React, { FormEvent, useEffect, useState } from 'react';
import api from '../../../../infra/services/Api';
import { ButtonSend } from '../../../components/Buttons.Styled';
import { CommomInput } from '../../../components/Inputs.Styled';
import { Checkbox, Checkmark, DtIdentficacao, Ficha, FormTable, Identificador, Nome, Rg, TableComponent } from '../../../components/Table.Styled';
import { Container } from './styles';

const Tables: React.FC = () => {

  const [CheckRef,setCheckRef]:any = useState([])
  const [ List, setList  ] = useState<object | any>([]);


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


  const Submeter:any = async (evt:FormEvent) => {
    evt.preventDefault()

      //const {data} = await api.patch("/", { cpf: CPFRef })

      // const data = CPFs.map( (e:any) => {
      //   return {
      //     CPFCNPJ: e.cpf
      //   }
      // } )

    const obj = await List.map( (e:any) => {
        const data: any = document.getElementById(`cpf${e.ID}`)
        return {
          cpf: data
        }
      })
      if(obj) obj.map( (e:any)=> console.log(e.cpf.value) )

  }


  return (
    <Container>
        <FormTable onSubmit={ Submeter } >
        <h1>Valor Total:</h1>
        <TableComponent id="tableTitles">
          <Nome>Nome</Nome>
          <Rg>RG</Rg>
          <Ficha>Ficha</Ficha>
          <Identificador>Identificador</Identificador>
          <DtIdentficacao>D. Identificação</DtIdentficacao>
          <DtIdentficacao>CPF/CNPJ</DtIdentficacao>
        </TableComponent>
        { List.map( (e:any) => (
          <TableComponent key={e.ID}>
            <Nome>{e.NOME}</Nome>
            <Rg>{e.RG}</Rg>
            <Ficha>{e.FICHA}</Ficha>
            <Identificador>{e.IDENTIFICADOR}</Identificador>
            <DtIdentficacao>{e.DTIDENTIFICACAO}</DtIdentficacao>
            <div style={{ width: "25%", height: "100%", display: 'flex', alignItems: 'center', justifyContent: "center" }}>
            <Checkbox>
              <input
                type="checkbox"
                onChange={
                () => setCheckRef(
                  (oldArray:any) => {
                  let result = CheckRef.find( (idProp:any) => idProp.ID === e.ID)
                    if (result === undefined) {
                      return [ ...oldArray, {ID: e.ID} ]
                    } else {
                      let Remove = [...oldArray]
                      Remove.splice(Remove.indexOf({ID:e.ID}),1)
                      return Remove
                    }
                  })
                }
              />
              <Checkmark />
            </Checkbox>

            { CheckRef.find( (idProp:any) => idProp.ID === e.ID) &&
            (<CommomInput type="text" placeholder="Digite o numero"  id={`cpf${e.ID}`} />) }

            </div>
          </TableComponent>
        )) }

          <ButtonSend type="submit" >Enviar</ButtonSend>
        </FormTable>
    </Container>
  )
}

export default Tables
