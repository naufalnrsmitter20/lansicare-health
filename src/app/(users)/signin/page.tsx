import React from "react";
import SigninUser from "../component/SigninUser";
import Footer from "../component/Footer";

export default function SigninPage() {
  return (
    <div className="h-screen w-screen">
      <SigninUser />
      <div className=" my-20 lg:my-0"></div>
      <Footer />
    </div>
  );
}
