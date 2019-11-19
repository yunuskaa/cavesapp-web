import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';
import * as CounterActions from 'shared/redux/actions';

function App() {
  const [t] = useTranslation('translations');

  return (
    <>
      <p>{t('welcome')}</p>
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
