import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { ScrollToTop } from "./ScrollToTop";

export function Layout() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#080c18",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <ScrollToTop />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      
    </div>
  );
}