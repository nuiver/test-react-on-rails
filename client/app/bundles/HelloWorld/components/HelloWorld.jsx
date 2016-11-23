import React, { PropTypes } from 'react';

// Simple example of a React "dumb" component
const HelloWorld = ({ name, lang, updateName, updateLang }) => (
  <div className="container">
    <h3>
      Hello, {name}!
    </h3>
    <h3>Welcome to {lang}!</h3>
    <hr />
    <form className="form-horizontal">
      <label htmlFor="name">
        Say hello to:
      </label>
      <input
        type="text" value={name} id="name"
        onChange={(e) => updateName(e.target.value)}
      />
    </form>
    <form className="form-horizontal">
      <label htmlFor="lang">
        Welcome to:
      </label>
      <input
        type="text" value={lang} id="lang"
        onChange={(e) => updateLang(e.target.value)}
      />
    </form>
  </div>
);

HelloWorld.propTypes = {
  // If you have lots of data or action properties, you should consider grouping them by
  // passing two properties: "data" and "actions".
  updateName: PropTypes.func.isRequired,
  updateLang: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  lang: PropTypes.string.isRequired,
};

export default HelloWorld;
