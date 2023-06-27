import Hero from "./components/Hero";
import Demo from "./components/Demo";
import Account from "./components/Account";
import "./App.css";

const Home = () => {
  return (
    <main>
      {/* <Account /> */}
      
      <div className='main'>
        <div className='gradient' />
      </div>
      

      <div className='app'>
        <Hero />
        <Demo />
        
        
      </div>
    </main>
  );
};

export default Home;
