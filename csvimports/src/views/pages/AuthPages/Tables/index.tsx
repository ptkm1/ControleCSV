import React, { useEffect, useRef, useState } from 'react';
import { FormEvent } from 'react';
import api from '../../../../infra/services/Api';
import { ButtonSend } from '../../../components/Buttons.Styled';
import { CommomInput } from '../../../components/Inputs.Styled';
import { Checkbox, Checkmark, DtIdentficacao, Ficha, Identificador, Nome, Rg, TableComponent } from '../../../components/Table.Styled';
import { Container } from './styles';

const Tables: React.FC = () => {

  const [CheckRef,setCheckRef]:any = useState([])

  const data:object = [
    {
      id:1,
      NOME:'Patrick',
      RG:5,
      FICHA:5050505050,
      IDENTIFICADOR: "ptkm1",
      DTIDENTIFICACAO: '0000-00-00',
    },
    {
      id:2,
      NOME:'Sande',
      RG:5,
      FICHA:5050505050,
      IDENTIFICADOR: "ptkm1",
      DTIDENTIFICACAO: '0000-00-00',
    },
    {
      id:3,
      NOME:'Raile',
      RG:5,
      FICHA:5050505050,
      IDENTIFICADOR: "ptkm1",
      DTIDENTIFICACAO: '0000-00-00',
    }
  ]


  const [ List, setList  ] = useState<object | any>(data);
  console.log(List)


  // useEffect(()=>{
  //   const BuscarDados: any = async () => {
  //     try {

  //       //const { data } = await api.get('/csvs')

       

  //       return setList(data);

  //     } catch (error) {

  //       return console.log(error)

  //     }
  //   }
  //   BuscarDados()
  // },[])

  // Refs
  const CPFRef = useRef<HTMLInputElement | any>()

  const Submeter:any = async (evt:FormEvent) => {
    evt.preventDefault()

    try {
      //const {data} = await api.patch("/", { cpf: CPFRef })

      const data = CPFRef.current?.value
      
      console.log(data)
    } catch (error) {
      console.log(error)
    }


  }


  return (
    <Container>
        <h1>Valor Total:</h1>
        <form style={{ display: 'flex', flexDirection: "column", alignItems: "center" }} onSubmit={ Submeter } >
        <TableComponent id="tableTitles">
          <Nome>Nome</Nome>
          <Rg>RG</Rg>
          <Ficha>Ficha</Ficha>
          <Identificador>Identificador</Identificador>
          <DtIdentficacao>D. Identificação</DtIdentficacao>
          <DtIdentficacao>CPF/CNPJ</DtIdentficacao>
        </TableComponent>
        { List.map( (e:any) => (
          <TableComponent key={e.id}>
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
                  let result = CheckRef.find( (idProp:any) => idProp.id === e.id)
                    if (result === undefined) {
                      return [ ...oldArray, {id: e.id} ] 
                    } else {
                      let Remove = [...oldArray]
                      Remove.splice(Remove.indexOf({id:e.id}),1)
                      return Remove
                    }  
                  }) 
                }   
              />
              <Checkmark />
            </Checkbox>

            { CheckRef.find( (idProp:any) => idProp.id === e.id) && (<CommomInput type="text" ref={CPFRef} />) }

            </div>
          </TableComponent>
        )) }

          <ButtonSend type="submit" >Enviar</ButtonSend>
        </form>
    </Container>
  )
}

export default Tables;
