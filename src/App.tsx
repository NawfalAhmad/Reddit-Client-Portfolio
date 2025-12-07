import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/navBar";

function Home() {
  return <h1>Working on it...</h1>;
}

function Post() {
  return <h1>Working on it...</h1>;
}

export default function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:id" element={<Post />} />
      </Routes>
    </BrowserRouter>
  );
}
