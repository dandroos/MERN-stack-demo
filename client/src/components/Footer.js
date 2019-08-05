import React from "react";

export default function Footer() {
  return (
    <footer className="m-4 text-center">
      <small>&copy; {new Date().getFullYear()} <a href="mailto:dandrewsuk82@gmail.com">David Andrews</a></small>
    </footer>
  );
}
