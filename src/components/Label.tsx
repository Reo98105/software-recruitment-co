import React from "react";

import style from "@/app/styles/label.module.scss";

export interface labelProps {
  onPress?: () => void;
  styles?: string;
  rightDeco?: JSX.Element;
  children: string;
}

const Label = ({ onPress, styles, rightDeco, children = "" }: labelProps) => {
  const renderSpan = (label: string) => {
    return rightDeco != undefined ? (
      <div className={style.deco}>
        <span onClick={onPress} className={styles}>
          {label}
        </span>
        {rightDeco}
      </div>
    ) : (
      <span onClick={onPress} className={styles}>
        {label}
      </span>
    );
  };

  return renderSpan(children);
};

export default Label;
