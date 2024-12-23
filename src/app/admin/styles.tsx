import Link from 'next/link';
import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
`;

export const TableHeader = styled.th`
  background-color: #f4f4f4;
  color: #333;
  font-weight: bold;
  padding: 12px;
  text-align: left;
  border: 1px solid #ddd;
`;

export const TableRow = styled.tr<{ isEven: boolean }>`
  background-color: ${props => props.isEven ? '#f8f8f8' : 'white'};
  &:hover {
    background-color: #f1f1f1;
  }
`;

export const TableCell = styled.td`
  padding: 12px;
  border: 1px solid #ddd;
`;

export const StyledLink = styled(Link)`
  color: #0070f3;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export const ErrorMessage = styled.h1`
  color: #ff0000;
  text-align: center;
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
`;

export const Button = styled.a`
  display:flex;
  background-color: #0070f3;
  color: white;
  padding: 10px 15px;
  border-radius: 5px;
  text-decoration: none;
  transition: background-color 0.3s ease;
  align-items: center;
  &:hover {
    background-color: #0056b3;
  }
`;