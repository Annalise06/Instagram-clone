import { Routes, Route } from "react-router-dom";
import Login from "./login/Login.component";
import Register from "./login/SignUp.component";

const Index = () => {
  return (
    <div className="bg-red-300">
      <h1>I AM THE INDEX</h1>
    </div>
  );
};

const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route index element={<Index />} />
    </Routes>
  );
};

export default App;
