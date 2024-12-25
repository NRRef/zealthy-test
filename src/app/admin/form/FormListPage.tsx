'use client';

import { useState } from 'react';
import { Button, ButtonContainer, Container, HeaderContainer, StyledLink, Table, TableCell, TableHeader, TableRow } from '../styles';

interface Form {
  id: string;
  name: string;
  createdAt: string;
}

interface FormListPageProps {
  initialForms: Form[];
}

const FormListPage: React.FC<FormListPageProps> = ({ initialForms }) => {
  const [forms] = useState<Form[]>(initialForms);

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