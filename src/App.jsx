import { useState } from "react";
import viteLogo from "/vite.svg";
import { Link, Outlet } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";

function App() {
  const [count, setCount] = useState(0);

  return (
    <HelmetProvider>
      <Helmet>
        <title>Firebase Authentication Learning</title>
      </Helmet>

      <>
        <div>This is Home Page</div>
        <div className="my-4">
          <Link to="/login">
            <button className="btn btn-success">Go to Login Page</button>
          </Link>
        </div>

        <Outlet></Outlet>
      </>
    </HelmetProvider>
  );
}

export default App;
