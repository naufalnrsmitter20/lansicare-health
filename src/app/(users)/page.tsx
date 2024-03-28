import React from "react";
import Homepage from "./component/HomePage";
import Footer from "./component/Footer";

export default function UserPage() {
  return (
    <div>
      <div className="h-screen w-screen">
        <Homepage />
        <Footer />
      </div>
    </div>
  );
}
