import React from 'react';
import { connect } from 'react-redux';
import createHashHistory from 'history/lib/createHashHistory';
import { getInfo } from './actions/actions';

import Layout from './layout';
import Home from './home';
import About from './about';
import Portfolio from './portfolio';
import Services from './services';
import Faq from './faq';
import Contact from './contact';


let history = createHashHistory();


export default class App extends React.Component {
    constructor() {
    super();
  }
    componentDidMount() {
       
    const {dispatch} = this.props;
    //dispatch 可以触发一个 action,action是一个普通的map
    // 也可以触发一个action,action是一个function.function 第一个参数是dispatch,第二个参数是state,常用来做异步数据获取。

    dispatch(getInfo());

  }

  render() {
    return (
      <Layout />
    );
  }
};

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps)(App);
