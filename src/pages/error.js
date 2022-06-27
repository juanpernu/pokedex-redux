import React from "react";
import { Button } from "../components";

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
        <div className="flex flex-col mt-8">
          <h2 className="text-xl leading-8 font-extrabold text-center text-white mt-2 leading-8 font-extrabold tracking-tight sm:text-4xl">
            Ups! Algo salió mal
          </h2>
          <p className="mt-4 text-lg text-white lg:mx-auto">
            ERROR: 400 Bad Request
          </p>
          <Button className="w-full mx-4" onClick={(e) => onClickHandler(e)}>
            <p>Ir al inicio</p>
          </Button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
