import React from "react";
import NavItem from "./NavItem";
import Button from "./Button";

const Header = () => {
  const navItems = ["Cuisines", "Community", "Receipts", "Contact"];

  return (
    <header className="flex overflow-hidden flex-wrap gap-6 items-center p-8 w-full bg-white border-b border-zinc-300 max-md:px-5 max-md:max-w-full">
      <div className="flex gap-6 items-center self-stretch my-auto w-10">
        <div className="flex justify-center items-center self-stretch my-auto w-10">
          <div className="flex self-stretch my-auto w-6 min-h-[35px]" />
        </div>
      </div>
      <nav className="flex flex-wrap flex-1 shrink gap-2 items-start self-stretch my-auto leading-none whitespace-nowrap basis-0 font-[number:var(--sds-typography-body-font-weight-regular)] min-w-[240px] text-[color:var(--sds-color-text-default-default)] text-[length:var(--sds-typography-body-size-medium)] max-md:max-w-full">
        {navItems.map((item, index) => (
          <NavItem key={index} text={item} isActive={index === 0} />
        ))}
      </nav>
      <div className="flex gap-3 items-center self-stretch my-auto leading-none font-[number:var(--sds-typography-body-font-weight-regular)] text-[length:var(--sds-typography-body-size-medium)] w-[178px]">
        <Button text="Sign in" variant="secondary" />
        <Button text="Register" variant="primary" />
      </div>
    </header>
  );
};

export default Header;
