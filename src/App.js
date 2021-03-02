import React from 'react';
import Layout from './Layout/Layout';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

function App() {
  return (
      <Layout>
        {/* header */}
        <Header />
        {/* main */}
        <Main />
       
        {/* footer */}
        <Footer />
      </Layout>
  );
}

export default App;
