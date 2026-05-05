import React from "react";
import Button from "./Button";

const Navbar = () => {
  return (
    <div className="max-w-7xl border-b border-zinc-700 mx-auto py-4 flex justify-between items-center px-4 font-regular">
      <div className="flex">
        <svg className="w-6 h-6 text-white" viewBox="0 0 15 19" fill="none">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0.491027 5.74153C1.14573 5.12319 2.20721 5.1232 2.86191 5.74153L14.0384 16.2971C14.6931 16.9154 14.6931 17.9179 14.0384 18.5363C13.3837 19.1546 12.3222 19.1546 11.6675 18.5363L0.491027 7.9807C-0.163676 7.36237 -0.163676 6.35985 0.491027 5.74153Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 1.58333C0 0.708882 0.750582 0 1.67647 0H12.8529C13.7788 0 14.5294 0.708882 14.5294 1.58333C14.5294 2.45778 13.7788 3.16667 12.8529 3.16667H1.67647C0.750582 3.16667 0 2.45778 0 1.58333Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3.35294 8.44444V17.4167C3.35294 18.2911 2.60236 19 1.67647 19C0.750583 19 0 18.2911 0 17.4167V6.86111C0 6.44119 0.176628 6.03846 0.491027 5.74153C0.805426 5.44459 1.23184 5.27778 1.67647 5.27778H12.8529C13.7788 5.27778 14.5294 5.98666 14.5294 6.86111C14.5294 7.73556 13.7788 8.44444 12.8529 8.44444H3.35294Z"
            fill="currentColor"
          />
        </svg>
        <div className="Links flex gap-14 text-sm ml-20">
          {["Home", "Work", "culture", "", "News"].map((elem, index) => (
            <a key={index} href="#" className="flex items-center gap-2">
              {elem.length === 0 ? (
                <span className="inline-block w-0.5 h-7 bg-zinc-700"></span>
              ) : null}
              {elem === "Work" && (
                <span className="inline-block w-1 h-1 bg-green-400 rounded-full shadow-[0_0_10px_#4ade80]"></span>
              )}

              {elem}
            </a>
          ))}
        </div>
      </div>

      <Button />
    </div>
  );
};

export default Navbar;
