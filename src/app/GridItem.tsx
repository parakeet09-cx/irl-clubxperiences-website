/* eslint-disable @typescript-eslint/no-unused-vars */
// src/app/GridItem.tsx
import type { ReactNode } from "react";
import clsx from "clsx"; // install via `npm i clsx`


export type GridItemProps = {
  colStart: keyof typeof colStartMap;
  colEnd: keyof typeof colEndMap;
  rowStart: keyof typeof rowStartMap;
  rowEnd: keyof typeof rowEndMap;
  direction: "left" | "right" | "top" | "bottom";
  children: ReactNode;
  bgClass?: string;
};

const colStartMap = {
  1: "col-start-1",
  2: "col-start-2",
  3: "col-start-3",
  4: "col-start-4",
  5: "col-start-5",
  6: "col-start-6",
  7: "col-start-7",
  8: "col-start-8",
};

const colEndMap = {
  2: "col-end-2",
  3: "col-end-3",
  4: "col-end-4",
  5: "col-end-5",
  6: "col-end-6",
  7: "col-end-7",
  8: "col-end-8",
  9: "col-end-9",
};

const rowStartMap = {
  1: "row-start-1",
  2: "row-start-2",
  3: "row-start-3",
  4: "row-start-4",
  5: "row-start-5",
  6: "row-start-6",
  7: "row-start-7",
  8: "row-start-8",
};

const rowEndMap = {
  2: "row-end-2",
  3: "row-end-3",
  4: "row-end-4",
  5: "row-end-5",
  6: "row-end-6",
  7: "row-end-7",
  8: "row-end-8",
  9: "row-end-9",
};

export function GridItem({
  colStart,
  colEnd,
  rowStart,
  rowEnd,
  direction,
  bgClass = "",
  children,
}: GridItemProps) {
  const classes = clsx(
    bgClass,
    `animate-slide-in-${direction}`,
    "delay-3000",
    "rounded-lg",
    "shadow-lg",
    "flex",
    "items-center",
    "justify-center",
    colStartMap[colStart],
    colEndMap[colEnd],
    rowStartMap[rowStart],
    rowEndMap[rowEnd]
  );

  return <div className={classes}>{children}</div>;
}
