// components/Button.js
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: #2e7d32; /* Green */
  color: white;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: #1b5e20; /* Darker green */
    transform: scale(1.05);
  }

  &:active {
    background-color: #145a15; /* Even darker green */
    transform: scale(0.95);
  }
`;

const Button = ({ onClick, children }) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
};

export default Button;
