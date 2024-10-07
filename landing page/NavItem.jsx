import React from "react";

const NavItem = ({ text, isActive }) => {
  return (
    <div
      className={`gap-2 self-stretch p-2 rounded-lg ${
        isActive
          ? "bg-neutral-100 text-[color:var(--sds-color-text-brand-on-brand-secondary)]"
          : ""
      }`}
    >
      {text}
    </div>
  );
};

export default NavItem;
