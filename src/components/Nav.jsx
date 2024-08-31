import { FiTriangle } from "react-icons/fi";
function Nav() {
  return (
    <>
      <div className="navbar bg-[#2B2D2C] flex justify-between  py-4">
        <div className="left-icon ml-8">
          <FiTriangle className="text-white text-3xl" />
        </div>
        <div className=" right">
          <ul className="flex gap-10 mr-20 text-white ">
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Portfolio</li>
            <li>Troubles</li>
            <li>Blog</li>
            <li>Context</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Nav;
