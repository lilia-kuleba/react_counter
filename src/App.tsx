import React from 'react';
import './App.scss';

type State = {
  count: number;
};

class App extends React.Component<{}, State> {
  state = {
    count: 0,
  };

  addOne = () => {
    this.setState(({ count }) => ({ count: count + 1 }));
  };

  add100 = () => {
    this.setState(({ count }) => ({ count: count + 100 }));
  };

  increase = () => {
    this.addOne();

    if (this.state.count % 5 === 0) {
      this.add100();
    }
  };

  render() {
    return (
      <>
        <h1>{`Count: ${this.state.count}`}</h1>
        <button
          type="button"
          onClick={() => {
            this.addOne();
          }}
        >
          Add 1
        </button>
        <button
          type="button"
          onClick={() => {
            this.add100();
          }}
        >
          Add 100
        </button>
        <button
          type="button"
          onClick={() => {
            this.increase();
          }}
        >
          Increase
        </button>
        <button
          type="button"
          onClick={() => {
            this.setState({ count: 0 });
          }}
        >
          Reset
        </button>
      </>
    );
  }
}

export default App;
