# ink-process

> Use the https://npm.im/ink react renderer to manage exiting processes.

## Install

```
npm install --save ink-process
```

You'll also need to make sure you've installed [ink](https://npm.im/ink) and set up babel with babel-plugin-transform-react-jsx.

## Usage

```
const { h, render, Component, Text } = require("ink");
const {ExitProcess, Process} = require('ink-process');

class App extends Component {
  //... Your ink app here
  // can call this.props.onExit(0)
  //... or
  // this.props.onExit(1)
}

render(
  <Process
    render={(exitCode, onExit) => {
      if (exitCode === null) {
        return <App onExit={onExit} />;
      }
      return (
        <ExitProcess
          withCode={exitCode}
          renderBeforeExit={() => <Text>Exiting now with exit code {exitCode}</Text>}
        />
      );
    }}
  />
);
```