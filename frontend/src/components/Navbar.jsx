import { Link } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";
import { LogOut, MessageSquare, User, Moon, Sun } from "lucide-react";
import { useThemeStore } from "../store/useThemeStore";

const Navbar = () => {
  const { logout, authUser } = useAuthStore();
  const { theme, setTheme } = useThemeStore();

  return (
    <header
      className="bg-base-100 border-b border-base-300 fixed w-full top-0 z-40 
    backdrop-blur-lg bg-base-100/80"
    >
      <div className="container mx-auto px-4 h-16">
        <div className="flex items-center justify-between h-full">
          <div className="flex items-center gap-8">
            <Link
              to="/"
              className="flex items-center gap-2.5 hover:opacity-80 transition-all"
            >
              <div className="size-9 rounded-lg bg-primary/10 flex items-center justify-center">
                <MessageSquare className="w-5 h-5 text-primary" />
              </div>
              <h1 className="text-lg font-bold">QuickTalk</h1>
            </Link>
          </div>

          <div className="flex items-center gap-2">

            <div className="relative flex items-center cursor-pointer bg-base-300 rounded-full w-16 transition-all">
              <div
                className={`absolute w-7 h-7 bg-primary rounded-full shadow-md transform transition-all ${
                  theme === "light" ? "translate-x-0" : "translate-x-8"
                }`}
              ></div>
              <div className="flex items-center justify-between w-full z-10">
                <div
                  className="w-8 h-8 flex items-center justify-center text-yellow-500"
                  onClick={() => setTheme("light")}
                >
                  <Sun className="size-5" />
                </div>

                <div
                  onClick={() => setTheme("dark")}
                  className="w-8 h-8 flex items-center justify-center text-indigo-600"
                >
                  <Moon className="size-5" />
                </div>
              </div>
            </div>

            {authUser && (
              <>
                <Link to={"/profile"} className={`btn btn-sm gap-2`}>
                  <User className="size-5" />
                  <span className="hidden sm:inline">Profile</span>
                </Link>

                <button className="flex gap-2 items-center" onClick={logout}>
                  <LogOut className="size-5" />
                  <span className="hidden sm:inline">Logout</span>
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
export default Navbar;
