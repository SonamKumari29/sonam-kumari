import Link from "next/link";
import { MoonIcon } from "lucide-react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground spring">
      <header className="border-b border-border">
        <nav className="container mx-auto px-4 py-6 flex items-center justify-between">
          <Link
            href="/"
            className="text-2xl font-bold bg-gradient-to-r from-violet-400 via-fuchsia-400 to-indigo-400 bg-clip-text text-transparent"
          >
            Sonam Kumari
          </Link>
          <div className="flex items-center gap-6">
            
            <Link href="/about" className="hover:text-primary transition-colors">
              About
            </Link>
            <MoonIcon className="w-5 h-5 text-primary" />
          </div>
        </nav>
      </header>
      <main>{children}</main>
      <footer className="border-t border-border mt-20">
        <div className="container mx-auto px-4 py-6 text-center text-muted-foreground">
          © {new Date().getFullYear()} Sonam Kumari . All rights reserved.
        </div>
      </footer>
    </div>
  );
}
