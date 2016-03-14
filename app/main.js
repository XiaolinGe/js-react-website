import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './layout';

import Banner from './home';
main();


function main() {
  ReactDOM.render(<Banner />, document.getElementById("app"));
}
