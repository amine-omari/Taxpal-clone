import HeaderContainer from "@/components/HeaderContainer";
import { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState();
  return (
    <div>
      <HeaderContainer menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    </div>
  );
}
