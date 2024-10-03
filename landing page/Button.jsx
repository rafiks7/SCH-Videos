import React from "react";

const Button = ({ text, variant }) => {
  const baseClasses =
    "overflow-hidden flex-1 shrink gap-2 self-stretch p-2 my-auto rounded-lg border border-solid";
  const variantClasses = {
    primary: "bg-zinc-800 border-zinc-800 text-white",
    secondary:
      "bg-neutral-200 border-neutral-500 text-[color:var(--sds-color-text-default-default)]",
  };

  return (
    <button className={`${baseClasses} ${variantClasses[variant]}`}>
      {text}
    </button>
  );
};

export default Button;
