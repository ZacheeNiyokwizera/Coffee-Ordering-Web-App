// Import the actual implementation of 'react-router-dom' for reference
const actualReactRouterDom = jest.requireActual("react-router-dom");

// Mock implementation of 'react-router-dom' module for testing purposes
module.exports = {
  // Spread the actual implementation to retain the original functionality
  ...actualReactRouterDom,
  // Mock the 'useNavigate' hook to control its behavior during tests
  useNavigate: jest.fn(),
};

// Ensure the module exports are compatible with TypeScript
export {};
