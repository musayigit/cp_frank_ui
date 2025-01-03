import { ReactNode } from "react";
import NavigationBar from "./NavigationBar";
interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-white flex flex-col w-screen">
      <NavigationBar/>

      <main className="container mx-auto px-4 py-4 flex-grow">
        {children}
      </main>

      <footer className="bg-gray-800 py-4">
        <div className="w-full px-4">
          <p className="text-center text-white">&copy; 2024 All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}
