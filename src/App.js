import React from 'react';
import Header from './components/header.jsx';
import Features from './components/features.jsx';
import Blog from './components/blog.jsx';
import Banking from './components/banking.jsx';
import SendMoney from './components/sendMoney.jsx';
import Savings from './components/savings.jsx';
import Notifications from './components/notifications.jsx';
import Cards from './components/cards.jsx';
import Tools from './components/tools.jsx';
import Footer from './components/footer.jsx';
import Webflow from './components/webflow.jsx';
import Testimonials from './components/testimonials.jsx';
import Account from './components/account.jsx';
import Help from './components/help.jsx';
import AppStore from './components/appStore.jsx';

function App() {
  return (
    <div className="App">
      <Header />
      <Features />
      <Banking/>
      <SendMoney/>
      <Savings/>
      <Notifications/>
      <Cards/>
      <Tools/>
      <Account/>
      <Testimonials/>
      <AppStore/>
      <Help/>
      <Blog/>
      <Footer/>
      <Webflow/>
    </div>
  );
}

export default App;