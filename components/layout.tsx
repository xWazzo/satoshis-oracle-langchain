interface LayoutProps {
  children?: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="mx-auto flex flex-col space-y-4 bg-gray-900 min-h-screen">
      <header className="w-full sticky top-0 z-40 bg-slate-950 text-white">
        <div className="h-16 border-b border-b-black py-4">
          <nav className="ml-4 pl-6">
            <a href="#" className="hover:text-slate-300 cursor-pointer text-white">
              Home
            </a>
          </nav>
        </div>
      </header>
      <div>
        <main className="flex w-full flex-1 flex-col overflow-hidden">
          {children}
        </main>
      </div>
    </div>
  );
}
