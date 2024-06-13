import { Footer } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";

function FooterCom() {
  return (
    <Footer className="border border-t-8 border-teal-500">
      <div className="">
        <div className="">
          <div className="">
            <Link to="/" className="py-3  font-bold dark:text-white text-4xl">
              <span className="px-2 py-1 bg-gradient-to-r from-yellow-400 to-red-400 rounded-lg text-white">
                {/*// eslint-disable-next-line react/no-unescaped-entities */}
                BIT's
              </span>
              Blog
            </Link>
          </div>
        </div>
      </div>
    </Footer>
  );
}

export default FooterCom;
