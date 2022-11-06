// import "./styles.css";
import { Routes, Route } from "react-router-dom";

import ReducerCounter from "./component/ReducerCounter";
import HooksCounter from "./component/HooksCounter";
import NotFound from "./component/NotFound";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<ReducerCounter />} />
      <Route path="/hooks-count" element={<HooksCounter />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
