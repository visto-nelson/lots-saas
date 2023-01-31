import './App.css';

import {Footer, Hero, Navbar, NewsLetter, ShowCase,  TryLots, Login} from './components';

function App() {
  const user ="null";
  return (
    <div className='' >
      {!user?(<Login/>
      ):(
        <>
        <Navbar/>
      <Hero/>
      <ShowCase/>
      <NewsLetter/>
      <TryLots/>
      <Footer/>
        </>
      )}
      
    </div>
  );
}

export default App;
