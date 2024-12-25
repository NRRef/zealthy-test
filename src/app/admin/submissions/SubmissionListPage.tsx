'use client'

import { useState } from "react";
import { Form, Submission } from "@prisma/client";
import { ButtonContainer, HeaderContainer, Table, TableCell, TableHeader, TableRow, Button, Container } from "../styles";

type FullSubmission = Submission & {
  form: Form;
}

interface SubmissionListPageProps {
  initialSubmissions: FullSubmission[];
}

const SubmissionListPage: React.FC<SubmissionListPageProps> = ({ initialSubmissions }) => {
  const [submissions] = useState<FullSubmission[]>(initialSubmissions);

  return (
    <Container>
      <HeaderContainer>
        <h1>Submission List</h1>
        <ButtonContainer>
          <Button href="/admin/form">View Forms</Button>
        </ButtonContainer>
      </HeaderContainer>
      <Table>
        <thead>
          <tr>
            <TableHeader>Email</TableHeader>
            <TableHeader>Birthday</TableHeader>
            <TableHeader>City</TableHeader>
            <TableHeader>State</TableHeader>
            <TableHeader>Zip Code</TableHeader>
            <TableHeader>About Me</TableHeader>
            <TableHeader>Form Name</TableHeader>
          </tr>
        </thead>
        <tbody>
          {submissions.map((submission, index) => (
            <TableRow key={submission.id} isEven={index % 2 === 0}>
              <TableCell>{submission.email}</TableCell>
              <TableCell>{new Date(submission.birthday as Date).toLocaleDateString()}</TableCell>
              <TableCell>{submission.city}</TableCell>
              <TableCell>{submission.state}</TableCell>
              <TableCell>{submission.zipCode}</TableCell>
              <TableCell>{submission.aboutMe?.substring(0, 50) ??  ''}...</TableCell>
              <TableCell>{submission.form.name}</TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default SubmissionListPage;