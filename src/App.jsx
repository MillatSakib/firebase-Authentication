import { useState } from "react";
import viteLogo from "/vite.svg";
import { Link, Outlet } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>This is Home Page</div>
      <div className="my-4">
        <Link to="/login">
          <button className="btn btn-success">Go to Login Page</button>
        </Link>
      </div>

      <Outlet></Outlet>
    </>
  );
}

export default App;
