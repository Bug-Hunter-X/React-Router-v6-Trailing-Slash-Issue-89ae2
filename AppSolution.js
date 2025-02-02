import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* This route will be handled correctly now */}
        <Route path="/about/" element={<AboutWithTrailingSlash />} />
      </Routes>
    </BrowserRouter>
  );
}

function Home() { return <div>Home</div>; }

function About() { 
  let location = useLocation();
  return (
    <div>About {location.pathname}</div>
  );
}

function AboutWithTrailingSlash() {
  return <About/>;
}
