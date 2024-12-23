'use client'

import styled from 'styled-components';

const Button = styled.button`
  background: ${(props) => props.theme.colors.primary};
  color: white;
  border: none;
  padding: 0.5em 1em;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background: #0056b3;
  }
`;

const Home = () => (
  <div>
    <h1>Olá, Next.js!</h1>
    <Button>Clique em mim</Button>
  </div>
);

export default Home;