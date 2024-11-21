import React from "react";

export interface labelProps {
  onPress?: () => void;
  styles?: string;
  children: string;
  // maybe add hover checks?
}

const Label = ({ onPress, styles, children = "" }: labelProps) => {
  const renderSpan = (label: string) => (
    <span onClick={onPress} className={styles}>
      {label}
    </span>
  );

  return renderSpan(children);
};

export default Label;
