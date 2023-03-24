import React from "react";
import { useRouter } from "next/router";

function HeaderLink({ Icon, title, selected, link }) {
  const router = useRouter();

  return (
    <div
      onClick={() => !selected ? router.push(link) : null}
      className={`flex items-center space-x-2 border-b-4 border-transparent hover:border-blue-500 hover:text-blue-500 cursor-pointer pb-3 ${
        selected ? "text-blue-500 border-blue-500" : ""
      }`}
    >
      <Icon className="h-4" />
      <p className="hidden sm:inline-flex">{title}</p>
    </div>
  );
}

export default HeaderLink;
