import React from 'react';
import ReactOnRails from 'react-on-rails';

import ProductTable from '../components/ProductTable';

// _railsContext is the Rails context, providing contextual information for rendering
const ProductTableApp = (props, _railsContext) => (
  <ProductTable {...props} />
);

// This is how react_on_rails can see the HelloWorldApp in the browser.
ReactOnRails.register({ ProductTableApp });
