import { Link } from "react-router-dom";
export default function NotFound() {
  return (
    <div>
      <h1>Oops! No match Found.</h1>
      <p>Here are some helpful links:</p>
      <Link to="/">Reducer Counter</Link>
      <Link to="/hooks-count">Hooks Counter</Link>
    </div>
  );
}
