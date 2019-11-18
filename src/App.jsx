import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';
import * as CounterActions from 'shared/redux/actions';

function App({ increment, incrementIfOdd, incrementAsync, decrement, counter}) {
  const [t] = useTranslation('translations');
  
  return (
    <>
      <p>{t('welcome')}</p>
      Clicked: {counter} times
      {' '}
      <button onClick={increment}>+</button>
      {' '}
      <button onClick={decrement}>-</button>
      {' '}
      <button onClick={incrementIfOdd}>Increment if odd</button>
      {' '}
      <button onClick={() => incrementAsync()}>Increment async</button>
    </>
  );
}

const mapStateToProps = state => ({
  counter: state.counter,
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators(CounterActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
