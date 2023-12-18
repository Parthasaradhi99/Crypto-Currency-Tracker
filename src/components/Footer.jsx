import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-[100%] bg-blue_nav text-white flex flex-col gap-2 items-center p-4 bottom-0">
      <h1 className="font-semibold text-xl opacity-60">Cryptoverse</h1>
      <h2>All Rights Reserved</h2>
      <div className="flex gap-7">
        <Link to="/">Home</Link>
        <Link to="/exchanges">Exchanges</Link>
        <Link to="/news">News</Link>
      </div>
    </div>
  );
};

export default Footer;
