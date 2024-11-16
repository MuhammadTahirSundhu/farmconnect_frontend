// components/AuthForm.js
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

// Styled Components
const FormWrapper = styled.div`
  background-color: rgba(255, 255, 255, 255); /* Transparent white */
  border-radius: 8px;
  width: 100%;
  max-width: 400px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  margin: auto;
  backdrop-filter: blur(8px); /* Adds a blur effect for glassmorphism */
  border: 1px solid rgba(255, 255, 255, 0.3); /* Subtle border to enhance the glass effect */
`;


const Title = styled.h2`
  color: #2e7d32; /* Dark green */
  text-align: center;
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  margin: 0.5rem 0;
  border: 1px solid #cce6cc; /* Subtle greenish border */
  border-radius: 4px;
  outline: none;
  &:focus {
    border-color: #2e7d32; /* Focus color */
    box-shadow: 0 0 3px rgba(46, 125, 50, 0.5);
  }
`;

const Button = styled.button`
  background-color: #2e7d32; /* Green background */
  color: white;
  width: 100%;
  padding: 0.75rem;
  border: none;
  border-radius: 4px;
  margin-top: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #1b5e20; /* Darker green */
  }
`;

const SwitchLink = styled.span`
  display: block;
  margin-top: 1rem;
  text-align: center;
  color: #2e7d32; /* Green */
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

// Component
const AuthForm = () => {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(true);
  const [role, setRole] = useState(null);

  // Extract role from the URL path
  useEffect(() => {
    const path = router.pathname.toLowerCase();
    if (path.includes('farmer')) {
      setRole('farmer');
    } else if (path.includes('customer')) {
      setRole('customer');
    }
  }, [router.pathname]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      if (role === 'farmer') {
        router.push('/farmerdashboard');
      } else if (role === 'customer') {
        router.push('/customerUI');
      } else {
        alert('Role not identified. Please check the URL.');
      }
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-0">
      {/* Background */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center opacity-60"
        style={{ backgroundImage: 'url("/back1.jpg")' }}
      ></div>

      {/* Form */}
      <FormWrapper>
        <Title>{isLogin ? 'Login' : 'Sign Up'}</Title>
        <form onSubmit={handleSubmit}>
          {!isLogin && <Input type="text" placeholder="Full Name" required />}
          <Input type="email" placeholder="Email" required />
          <Input type="password" placeholder="Password" required />
          {!isLogin && (
            <Input type="password" placeholder="Confirm Password" required />
          )}
          <Button type="submit">{isLogin ? 'Login' : 'Sign Up'}</Button>
        </form>
        <SwitchLink onClick={() => setIsLogin(!isLogin)}>
          {isLogin
            ? "Don't have an account? Sign Up"
            : 'Already have an account? Login'}
        </SwitchLink>
      </FormWrapper>
    </div>
  );
};

export default AuthForm;
