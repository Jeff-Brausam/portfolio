import React from 'react';
import Layout from './Layout/Layout';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

const App: React.FC = () => {
  return (
    <Layout>
      <Header />
      <Main />
      <Footer />
    </Layout>
  );
};

export default App;
