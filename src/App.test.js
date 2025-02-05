/*
File Name: App.test.js
Student Name: Hitesh Sakamuri
Student ID: 301427484
Date: January 27, 2025
*/

/* Importing necessary utilities from testing library and the main App component */
import { render, screen } from '@testing-library/react';
import App from './App';

/* 
 * Test Case: Check if 'learn react' link is rendered correctly 
 * Description: This test renders the App component and checks whether a link element with 
 * the text 'learn react' is present in the document. 
 */
test('renders learn react link', () => {
  render(<App />);// Render the App component
  const linkElement = screen.getByText(/learn react/i);// Find element containing 'learn react'
  expect(linkElement).toBeInTheDocument();// Assert that the element is in the document
});
