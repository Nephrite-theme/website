import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import "@/index.css";
import Navigation from "@/components/layout/Navigation";

const RootLayout = () => (
  <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
    <Navigation />
    <Outlet />
    <TanStackRouterDevtools />
  </main>
);

export const Route = createRootRoute({ component: RootLayout });
