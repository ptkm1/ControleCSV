import api from "../../../../infra/services/Api";

const BuscarDados: any = async () => {
  try {

    const { data } = await api.get('/csvs')

    return data;

  } catch (error) {

    return console.log(error)

  }
}

export { BuscarDados };
