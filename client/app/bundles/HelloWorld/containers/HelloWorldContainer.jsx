import React, { PropTypes } from 'react';
import HelloWorld from '../components/HelloWorld';

// Simple example of a React "smart" component
export default class HelloWorldContainer extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired, // this is passed from the Rails view
  };

  constructor(props) {
    super(props);

    // How to set initial state in ES6 class syntax
    // https://facebook.github.io/react/docs/reusable-components.html#es6-classes
    this.state = { name: this.props.name, lang: this.props.lang };
  }

  updateName = (name) => { this.setState({ name }); };
  updateLang = (lang) => { this.setState({ lang }); };


  render() {
    return (
      <HelloWorld name={this.state.name} lang={this.state.lang} updateName={this.updateName} updateLang={this.updateLang} />
    );
  }
}
