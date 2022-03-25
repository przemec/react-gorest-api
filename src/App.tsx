import "./index.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import HomePage from "./components/HomePage";
import Users from "./routes/Users";
import Posts from "./routes/Posts";
import Todos from "./routes/Todos";

const App = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<HomePage />} />
      <Route path="users" element={<Users />}/>
      <Route path="posts" element={<Posts />}/>
      <Route path="todos" element={<Todos />}/>
    </Route>
  </Routes>
);

export default App;
