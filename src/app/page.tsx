'use client'

import { Container } from './form/[id]/styles';
import { Button } from './admin/styles';

const Home = () => (
  <Container>
    <h1>Admin Section</h1>
    <Button href='/admin/form/'>Enter</Button>
  </Container>
);

export default Home;