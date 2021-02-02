import styled from 'styled-components';

const Container = styled.div`
  background-color: #fff;
  height: 50px;
  width: 100%;
  position: fixed;

  display: flex;

  justify-content: space-around;
  align-items: center;

  ul {
    display: flex;
    list-style: none;
  }
  li {
    margin: 5px;
    font-weight: bold;
    a {
      text-decoration: none;
      color: #3682F9;
        :hover {
          color: gray;
        }
    }
  }

  img {
    width: 3.5rem;
  }

`;


function Menu() {
  return (
    <Container>
      <img src="http://static.blogdaresenhageral.com.br/wp-content/uploads/2015/08/DPT_BAHIA.png" alt="img" />

      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Tabelas</a></li>
        <li><a href="#">Suporte</a></li>
      </ul>

    </Container>
  );
}
export default Menu