import React, {useState} from 'react';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Bride from './pages/Bride/Bride';
import Event from './pages/Event/Event';
import Location from './pages/Location/Location';
import CoverPages from "./components/CoverPages/CoverPages";
import NavbarPages from "./components/NavbarPages/NavbarPages";

interface AppState {
  activePages: string;
}

const AppRouter = () => {
  const [activePages, setActivePages] = useState<string>("wedding");

  const handleSetActivePages = (message: string) => {
    setActivePages(message)
  };

  return (
    <div className='mainContainer'>
      <CoverPages name={'name'} />
      <div className='content'>
        <MainComponent activePages={activePages}/>
        <NavbarPages onNavClick={handleSetActivePages} activeNav={activePages}/>
      </div>

    </div>
  );
};

const MainComponent: React.FC<AppState> = ({ activePages }) => {
  switch(activePages) {

    case "wedding":   return <Home name={'name'}/>;
    case "brides":   return <Bride name={'name'}/>;
    case "event": return <Event name={'name'}/>;
    case "location":  return <Location name={'name'}/>;

    default:      return <Home name={'name'}/>;
  }
}

export default AppRouter;
