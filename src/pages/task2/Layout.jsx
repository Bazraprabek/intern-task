import { Link, useOutlet } from "react-router-dom";

const Layout = ({ children }) => {
  const outlet = useOutlet();
  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="p-4 bg-blue-500 text-white">
        <ul className="flex space-x-4">
          <li>
            <Link to="/todolist">Add To-Do</Link>
          </li>
          <li>
            <Link to="/todolist/pending-todos">Pending To-Dos</Link>
          </li>
          <li>
            <Link to="/todolist/completed-todos">Completed To-Dos</Link>
          </li>
        </ul>
      </nav>
      <div className="p-4">{outlet}</div>
    </div>
  );
};

export default Layout;
