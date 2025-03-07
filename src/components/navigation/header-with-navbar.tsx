import NavBar from "./navbar";

export default function HeaderWithNavBar() {
  return (
    <header className="p-3 sticky top-0 bg-background/75 z-[100] backdrop-blur-lg transition-all shadow-sm mb-5">
      <NavBar></NavBar>
    </header>
  );
}
