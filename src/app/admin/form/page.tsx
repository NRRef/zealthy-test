'use client';

import { useEffect, useState } from 'react';
import { Button, ButtonContainer, Container, HeaderContainer, StyledLink, Table, TableCell, TableHeader, TableRow } from '../styles';
import { Spinner } from '@/styles';
import { getForms } from '@/services';

interface Form {
  id: string;
  name: string;
  createdAt: string;
}

const FormListPage = () => {
  const [forms, setForms] = useState<Form[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | undefined>();

  useEffect(() => {
    getForms()
      .then(data => {
        setForms(data);
      })
      .catch(e => {
        setError(e.message);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <Container>
        <Spinner />
      </Container>
    );
  }

  if (error) {
    return (
      <Container>
        <h1>Error: {error}</h1>
      </Container>
    );
  }

  return (
    <Container>
      <HeaderContainer>
        <h1>Form List</h1>
        <ButtonContainer>
          <Button href="/admin/submissions">View Submissions</Button>
          <Button href="/admin/form/new">Create New Form</Button>
        </ButtonContainer>
      </HeaderContainer>
      <Table>
        <thead>
          <tr>
            <TableHeader>ID</TableHeader>
            <TableHeader>Name</TableHeader>
            <TableHeader>Created At</TableHeader>
            <TableHeader>Action</TableHeader>
          </tr>
        </thead>
        <tbody>
          {forms.map((form, index) => (
            <TableRow key={form.id} isEven={index % 2 === 0}>
              <TableCell>{form.id}</TableCell>
              <TableCell>{form.name}</TableCell>
              <TableCell>{new Date(form.createdAt).toLocaleString()}</TableCell>
              <TableCell>
                <StyledLink href={`/form/${form.id}`} passHref legacyBehavior>
                  <a target="_blank" rel="noopener noreferrer">View Form</a>
                </StyledLink>
              </TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default FormListPage;