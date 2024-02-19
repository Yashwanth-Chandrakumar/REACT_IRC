// App.js
import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import CardComp from './Components/CardComp';
import ClassChild from './Components/Child';
import FunctionChild from './Components/FChild';
import PropPass from './Components/PropPass';
import ReduxCounter from './Components/ReduxCounter';
import { Store, ThemeStore } from './Store/Store';
import ThemeComponent from './Components/Theme';
import ErrorBoundary from './Components/ErrorBoundary';
import Hero from './Components/Hero';

function App() {
  const name = 'yuvan';
  const curtime = new Date().toLocaleString();

  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '150vh' }}>
      <ClassChild />
      <FunctionChild />
      <PropPass name={name} time={curtime} />
      <CardComp />
      <Provider store={Store}>
        <ReduxCounter />
      </Provider>
      <Provider store={ThemeStore}>
        <ThemeComponent />
      </Provider>
      <ErrorBoundary>
        <Hero hero="batman"/>
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero hero="Joker"/>
      </ErrorBoundary>
    </div>
  );
}

export default App;
