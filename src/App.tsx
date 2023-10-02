import React, {useState} from 'react';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import CoverPages from "./components/CoverPages/CoverPages";
import NavbarPages from "./components/NavbarPages/NavbarPages";

interface AppState {
  activePages: string;
}

const AppRouter = () => {
  const [activePages, setActivePages] = useState<string>("");

  return (
    <div className='mainContainer'>
      <CoverPages name={'name'} />
      <div className='content'>
        <Home name={'name'}/>
        <NavbarPages name={'name'}/>
      </div>

    </div>
  );
};

const MainComponent: React.FC<AppState> = ({ activePages }) => {
  switch(activePages) {

    case "one":   return <Home name={'name'}/>;
    case "two":   return <Home name={'name'}/>;
    case "three": return <Home name={'name'}/>;
    case "four":  return <Home name={'name'}/>;

    default:      return <Home name={'name'}/>;
  }
}

export default AppRouter;
