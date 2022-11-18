import React from 'react';
import Header from './components/Header';
import Main from './components/Main';

const App: React.FC = () => {
  return (
    <div className="app">
      <div className="min-h-full bg-gray-200">
        <Header />
        <Main />
      </div>
    </div>
  );
};
export default App;
