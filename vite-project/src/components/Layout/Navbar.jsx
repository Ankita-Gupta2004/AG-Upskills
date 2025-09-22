import { useState } from "react";
import { FiMenu, FiX, FiChevronDown, FiCheckCircle } from "react-icons/fi";
import ThemeToggle from "../../ThemeToggle";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [toolsOpen, setToolsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  const links = [
    { name: "Home", href: "#" },
    { name: "Notes", href: "#" },
    { name: "CodeCraft", href: "#" },
  ];

  const tools = [
    { name: "AI Summarization", href: "#" },
    { name: "Resume Creator", href: "#" },
    { name: "Expense Calculator", href: "#" },
  ];

  return (
    <nav className="bg-white dark:bg-black text-black dark:text-teal-300 shadow-md sticky top-0 z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center font-bold text-xl">
            <span className="text-black dark:text-teal-500">MyLogo</span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-4">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setActiveLink(link.name.toLowerCase())}
                className={`px-3 py-2 rounded-md font-medium hover:bg-teal-100 dark:hover:bg-teal-800 transition-colors ${
                  activeLink === link.name.toLowerCase()
                    ? "bg-teal-100 dark:bg-teal-800"
                    : ""
                }`}
              >
                {link.name}
              </a>
            ))}

            {/* Tools Dropdown */}
            <div className="relative">
              <button
                onClick={() => setToolsOpen(!toolsOpen)}
                className="px-3 py-2 rounded-md font-medium hover:bg-teal-100 dark:hover:bg-teal-800 flex items-center gap-1 transition-colors"
              >
                Tools <FiChevronDown />
              </button>

              {toolsOpen && (
                <div className="absolute mt-2 w-48 bg-white dark:bg-black shadow-lg rounded-md py-2 z-50">
                  {tools.map((tool) => (
                    <a
                      key={tool.name}
                      href={tool.href}
                      className="block px-4 py-2 text-black dark:text-teal-500 hover:bg-teal-100 dark:hover:bg-teal-900 transition-colors"
                    >
                      {tool.name}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* To-Do Icon */}
            <button className="p-2 rounded-full bg-teal-700 dark:bg-teal-800 hover:bg-teal-600 dark:hover:bg-teal-900 transition-colors">
              <FiCheckCircle size={20} />
            </button>

            {/* Theme Toggle */}
            <ThemeToggle></ThemeToggle>

            {/* Sign In */}
            <a
              href="#"
              className="px-3 py-2 rounded-md font-medium bg-white text-teal-500 dark:bg-teal-500 dark:text-black hover:bg-teal-100 dark:hover:bg-teal-700 transition-colors"
            >
              Sign In
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-white dark:text-teal-500 focus:outline-none"
            >
              {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-teal-500 dark:bg-black px-2 pt-2 pb-3 space-y-1">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => {
                setActiveLink(link.name.toLowerCase());
                setMenuOpen(false);
              }}
              className={`block px-3 py-2 rounded-md font-medium hover:bg-teal-400 dark:hover:bg-teal-900 transition-colors ${
                activeLink === link.name.toLowerCase()
                  ? "bg-teal-700 dark:bg-teal-800"
                  : ""
              }`}
            >
              {link.name}
            </a>
          ))}

          {/* Mobile Tools Dropdown */}
          <div className="block">
            <button
              onClick={() => setToolsOpen(!toolsOpen)}
              className="w-full text-left px-3 py-2 rounded-md font-medium hover:bg-teal-400 dark:hover:bg-teal-900 flex items-center justify-between transition-colors"
            >
              Tools <FiChevronDown />
            </button>
            {toolsOpen && (
              <div className="pl-4 mt-1 space-y-1">
                {tools.map((tool) => (
                  <a
                    key={tool.name}
                    href={tool.href}
                    className="block px-3 py-2 rounded-md text-black dark:text-teal-500 hover:bg-teal-100 dark:hover:bg-teal-900 transition-colors"
                  >
                    {tool.name}
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Mobile To-Do, Theme, Sign In */}
          <div className="flex items-center space-x-2 mt-2">
            <button className="p-2 rounded-full bg-teal-700 dark:bg-teal-800 hover:bg-teal-600 dark:hover:bg-teal-900 transition-colors">
              <FiCheckCircle size={20} />
            </button>
            <ThemeToggle />
            <a
              href="#"
              className="px-3 py-2 rounded-md font-medium bg-white text-teal-500 dark:bg-teal-500 dark:text-black hover:bg-teal-100 dark:hover:bg-teal-700 transition-colors"
            >
              Sign In
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
