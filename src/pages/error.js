import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_error) {
    return { hasError: true };
  }

  render() {
    const history = window.history;
    const onClickHandler = (e) => {
      e.prevenDefault();
      return history.go("/");
    };

    if (this.state.hasError) {
      return (
        <div className="">
          <h2 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Ups! Algo salió mal
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            ERROR: 400 Bad Request
          </p>
          <button onClick={(e) => onClickHandler(e)}>Ir al inicio</button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
