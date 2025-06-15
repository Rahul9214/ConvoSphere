import { Link, useLocation } from "react-router";
import { XIcon, HomeIcon, UserIcon, BellIcon, ShipWheelIcon } from "lucide-react";
import useAuthUser from "../hooks/useAuthUser";

const MobileSidebar = ({ isOpen, onClose }) => {
  const location = useLocation();
  const { authUser } = useAuthUser();

  const navItems = [
    { name: "Home", path: "/", icon: <HomeIcon className="w-5 h-5" /> },
    { name: "Friends", path: "/friends", icon: <UserIcon className="w-5 h-5" /> },
    { name: "Notifications", path: "/notifications", icon: <BellIcon className="w-5 h-5" /> },
  ];

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-40 z-40 transition-opacity duration-200 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={onClose}
      />

      {/* Sidebar Panel */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-base-200 z-50 shadow-lg transform transition-transform duration-200 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Top Logo Bar */}
        <div className="flex items-center justify-between px-4 py-4 border-b border-base-300">
          <Link to="/" onClick={onClose} className="flex items-center gap-2">
            <ShipWheelIcon className="w-7 h-7 text-primary" />
            <span className="text-lg font-bold font-mono bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary tracking-wide">
              ConvoSphere
            </span>
          </Link>
          {/* X button only on small screens */}
          <button onClick={onClose} className="lg:hidden">
            <XIcon className="w-6 h-6 text-base-content" />
          </button>
        </div>

        {/* Nav Items */}
        <ul className="flex flex-col py-4 px-2 space-y-2">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                to={item.path}
                className={`flex items-center gap-3 px-4 py-2 rounded-lg transition ${
                  location.pathname === item.path
                    ? "bg-primary text-white"
                    : "hover:bg-base-300"
                }`}
                onClick={onClose}
              >
                {item.icon}
                <span className="text-sm font-medium">{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Footer - Avatar */}
        {authUser && (
          <div className="absolute bottom-0 left-0 w-full px-4 py-4 border-t border-base-300 bg-base-200">
            <div className="flex items-center gap-3">
              <div className="avatar">
                <div className="w-10 rounded-full">
                  <img src={authUser.profilePic} alt="User avatar" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-medium text-sm">{authUser.fullName}</span>
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 rounded-full bg-success"></div>
                  <span className="text-xs text-success">Online</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default MobileSidebar;
