import './App.css';

import {Footer, Hero, Navbar, NewsLetter, ShowCase,  TryLots} from './components';

function App() {
  return (
    <div className='' >
      <Navbar/>
      <Hero/>
      <ShowCase/>
      <NewsLetter/>
      <TryLots/>
      <Footer/>
    </div>
  );
}

export default App;
