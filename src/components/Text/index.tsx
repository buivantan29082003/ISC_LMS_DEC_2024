import React from "react";
import { TextProps } from "./type";
import "./style.css";

const TextComponent: React.FC<TextProps> = ({ text, size, font, color, flex, className, align, weight,italic  }) => {
  return (
    <span
      className={`text-component ${flex ? "flex-1" : ""} ${className || ""}`.trim()}
      style={{
        fontSize: typeof size === "number" ? `${size}px` : size ?? "var(--font-size-Source-Sans-Pro-2)",
        fontFamily: font ?? "var(--font-Mulish)",
        color: color ?? "var(--black-text)",
        lineHeight: "1.5",
        textAlign: align ?? "left",
        fontWeight: weight === "thin" ? "300" :
                    weight === "semibold" ? "600" :
                    weight === "bold" ? "700" :
                      weight === "extrabold" ? "800" : "400",
         fontStyle: italic ? "italic" : "normal",
      }}
    >
      {text}
      </span>
  );
};

export default TextComponent;
