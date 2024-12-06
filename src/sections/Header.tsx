
export const Header = () => {
  return <div className="flex justify-center items-center sticky top-3 w-full z-10">
    <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
    <a className="nav-item transition duration-500 ease-in-out" href="#home">Home</a>
    <a className="nav-item transition duration-500 ease-in-out" href="#projects">Projects</a>
    <a className="nav-item transition duration-500 ease-in-out" href="#about">About</a>
    <a className="nav-item transition duration-500 ease-in-out bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900" href="#contact">Contact</a>
  </nav>
  </div>
};
