import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 50px 100px 50px 100px;
`;

export const FormSection = styled.div`
  width: 60%;
`;

export const ComponentSection = styled.div`
  width: 35%;
`;

export const FormName = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  font-size: 16px;
`;

export const DropZone = styled.div`
  min-height: 100px;
  border: 2px dashed #ccc;
  margin: 10px 0;
  padding: 10px;
  border-radius: 5px;
`;

export const ComponentItem = styled.div`
  margin: 5px;
  padding: 10px;
  border: 1px solid #ddd;
  background-color: #f9f9f9;
  border-radius: 3px;
  cursor: move;
`;

export const SubmitButton = styled.button`
  background-color: #4CAF50;
  display:flex;
  color: white;
  padding: 10px 15px;
  border-radius: 5px;
  font-size: 16px;
  text-decoration: none;
  border-color:transparent;
  transition: background-color 0.3s ease;
  align-items: center;
  &:hover {
    background-color: #48a24b;
  }
  cursor: pointer;
`;