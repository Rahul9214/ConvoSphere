import { Link, useLocation } from "react-router";
import useAuthUser from "../hooks/useAuthUser";
import { BellIcon, LogOutIcon, MenuIcon, ShipWheelIcon } from "lucide-react";
import ThemeSelector from "./ThemeSelector";
import useLogout from "../hooks/useLogout";
import { useState } from "react";
import MobileSidebar from "./MobileSidebar";
import { useQuery } from "@tanstack/react-query";
import { getFriendRequests } from "../lib/api";

const Navbar = () => {
  const { authUser } = useAuthUser();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();
  const isChatPage = location.pathname?.startsWith("/chat");

    //This is how we did it at first, without using our custom hook
   // const queryClient = useQueryClient();
  //  const { mutate: logoutMutation } = useMutation({
  //    mutationFn: logout,
  //    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["authUser"] })
  //  }); 

   // This is how we did it using our custom hook - optimized version (hooks/useLogout.js)
  const { logoutMutation } = useLogout();

   const { data: friendRequests } = useQuery({
    queryKey: ["friendRequests"],
    queryFn: getFriendRequests,
  });

  const incomingRequests = friendRequests?.incomingRequests || [];
  const notificationCount = incomingRequests.length;

  const shouldShowMenu =
    location.pathname === "/" ||
    location.pathname.startsWith("/friends") ||
    location.pathname.startsWith("/notifications");

  return (
    <nav className="bg-base-200 border-b border-base-300 sticky top-0 z-30 h-16 flex items-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-end w-full">
          {/* LOGO - ONLY IN THE CHAT PAGE */}
          {isChatPage && (
            <div className="pl-5">
              <Link to="/" className="flex items-center gap-2.5">
                <ShipWheelIcon className="size-9 text-primary" />
                <span className="text-3xl font-bold font-mono bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary tracking-wider">
                  ConvoSphere
                </span>
              </Link>
            </div>
          )}

          {/* Hamburger Icon - Small screens only */}
          {shouldShowMenu && (
            <button
              className="lg:hidden"
              onClick={() => setIsSidebarOpen(true)}
            >
              <MenuIcon className="size-7 text-primary" />
            </button>
          )}


          <div className="flex items-center gap-3 sm:gap-4 ml-auto">
            <Link to={"/notifications"}  className="relative">
              <button className="btn btn-ghost btn-circle relative">
                <BellIcon className="h-6 w-6 text-base-content opacity-70" />
                {/* Notification Badge */}
                 {notificationCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    {notificationCount}
                  </span>
                )}
              </button>
            </Link>
          </div>
        
          <ThemeSelector />

          <div className="avatar">
            <div className="w-9 rounded-full">
              <img src={authUser?.profilePic} alt="User Avatar" rel="noreferrer" />
            </div>
          </div>

          {/* LOGOUT BUTTON */}
          <button className="btn btn-ghost btn-circle" onClick={logoutMutation}>
            <LogOutIcon className="h-6 w-6 text-base-content opacity-70" />
          </button>
        </div>
      </div>

      {/* Sidebar Overlay for small screens */}
      <MobileSidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
    </nav>
  );
};

export default Navbar;