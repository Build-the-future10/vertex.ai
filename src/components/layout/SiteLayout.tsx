import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import ThemeToggle from "@/components/ThemeToggle";
import { useAuth } from "@/contexts/AuthContext";

export default function SiteLayout() {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const navItems = isAuthenticated
    ? [
        { to: "/", label: "Home" },
        { to: "/main", label: "Main" },
        { to: "/notetaker", label: "AI Notetaker + Quiz" },
        { to: "/study-zone", label: "Study Zone" },
        { to: "/chatbot", label: "AI Chatbot" },
        { to: "/planner", label: "Study Planner" },
        { to: "/image-answer", label: "Image Answer" },
        { to: "/paper-maker", label: "IB/IGCSE Paper Maker" },
        { to: "/about", label: "About" },
      ]
    : [
        { to: "/", label: "Home" },
        { to: "/about", label: "About" },
      ];

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <header className="sticky top-0 z-40">
        <nav className="neu-surface/blur border-b backdrop-blur supports-[backdrop-filter]:bg-background/70">
          <div className="container mx-auto flex items-center justify-between py-3">
            <Link to="/" className="flex items-center gap-2 hover-scale">
              <span className="text-xl font-semibold tracking-wide sketch-underline">Vertex</span>
            </Link>

            <ul className="hidden md:flex items-center gap-6 overflow-x-auto">
              {navItems.map((item) => (
                <li key={item.to} className="shrink-0">
                  <NavLink
                    to={item.to}
                    end
                    className={({ isActive }) =>
                      `px-3 py-1 rounded-full sketch-underline ${isActive ? "neu-pressed" : "hover:neu-raised"}`
                    }
                    aria-label={item.label}
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-3">
              {!isAuthenticated ? (
                <>
                  <NavLink to="/login" className="hidden md:inline-block neu-button">Log in</NavLink>
                  <NavLink to="/signup" className="hidden md:inline-block neu-button">Sign up</NavLink>
                </>
              ) : (
                <button
                  onClick={() => { logout(); navigate("/"); }}
                  className="hidden md:inline-block neu-button"
                >
                  Log out
                </button>
              )}
              <ThemeToggle />
            </div>
          </div>
        </nav>
      </header>

      <main className="flex-1 container mx-auto px-4 md:px-6 py-8">
        <Outlet />
      </main>

      <footer className="mt-auto">
        <div className="neu-surface border-t">
          <div className="container mx-auto py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-sm">
            <p className="opacity-80">© {new Date().getFullYear()} Vertex. All rights reserved.</p>
            <div className="flex gap-4">
              <NavLink to="/about" className="sketch-underline">About</NavLink>
              <NavLink to="/" className="sketch-underline">Home</NavLink>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
