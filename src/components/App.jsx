// import { Header } from "./components/Header";
import { ThemeProvider } from 'styled-components';
// import { Todos } from "./components/Todos";
import { Component } from 'react';
// import { DARK, LIGHT } from "./constants/theme";
// import { theme } from "./theme";

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <p>Please leave your feedback</p>
        <button>Good</button>
        <button>Neutral</button>
        <button>Bad</button>
      </div>
    );
  }
}
