const { h, render, Component } = require("ink");

class ExitProcess extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }
  render() {
    return this.props.renderBeforeExit(this.props.withCode);
  }
  componentDidMount() {
    process.exit(this.props.withCode);
  }
}
ExitProcess.defaultProps = {
  renderBeforeExit: () => null,
  withCode: 0
};

class Process extends Component {
  constructor(props) {
    super(props);
    this.state = {
      exitCode: null
    };
    this.props = props;
  }

  onExit(exitCode) {
    this.setState({
      exitCode
    });
  }

  render() {
    return this.props.render(this.state.exitCode, this.onExit.bind(this));
  }
}

module.exports = {
    Process,
    ExitProcess
}