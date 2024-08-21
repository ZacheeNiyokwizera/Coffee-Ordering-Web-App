// src/components/ErrorBoundary.tsx

import React, { Component, ErrorInfo } from "react";

interface ErrorBoundaryProps {
  children: React.ReactNode; // The children components that this boundary will protect
}

interface ErrorBoundaryState {
  hasError: boolean; // State to track if an error has been caught
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false }; // Initialize state with no error
  }

  static getDerivedStateFromError(): ErrorBoundaryState {
    // Update state to render fallback UI if an error occurs
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    // Log the error to an error reporting service
    console.error("Error caught by ErrorBoundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Render fallback UI if there is an error
      return <div>Something went wrong.</div>;
    }

    // Render children if no error
    return this.props.children;
  }
}

export default ErrorBoundary;
