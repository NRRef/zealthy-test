'use client'

import { getSubmissions } from "@/services";
import { useEffect, useState } from "react";
import { Spinner } from "@/styles";
import { Form, Submission } from "@prisma/client";
import { ButtonContainer, ErrorMessage, HeaderContainer, Table, TableCell, TableHeader, TableRow, Button, Container } from "../styles";

type FullSubmission = Submission & {
  form: Form;
}

const SubmissionListPage = () => {
  const [submissions, setSubmissions] = useState<FullSubmission[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | undefined>();

  useEffect(() => {
    getSubmissions()
      .then(data => {
        setSubmissions(data);
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
        <ErrorMessage>Error: {error}</ErrorMessage>
      </Container>
    );
  }

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