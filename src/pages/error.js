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
    const onClickHandler = () => {
      return history.go("/");
    };

    if (this.state.hasError) {
      return (
        <div className="md:w-1/2 md:px-0 px-2 w-full flex flex-col justify-center m-auto mt-8">
          <h2 className="text-3xl leading-8 font-extrabold text-center text-white mt-2 leading-8 tracking-tight sm:text-4xl">
            Ups! Algo salió mal
          </h2>
          <p className="mt-4 text-base text-white text-center lg:mx-auto">
            ERROR: 400 Bad Request
          </p>
          <Button className="w-full" onClick={onClickHandler}>
            <p>Ir al inicio</p>
          </Button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
