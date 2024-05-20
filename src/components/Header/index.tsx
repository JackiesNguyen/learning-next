import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <div>
      <ul className="flex items-center gap-5">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/service">Service</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
