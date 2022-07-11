import { useEffect, useState } from "react";

type Props = {
  attempts: string[][];
};

const Box = () => {
  return (
    <div className="box">
      <h1>{}</h1>
    </div>
  );
};

const grid = (props: Props) => {
  return (
    <div className="flex justify-center items-center flex-col gap-2">
      {props.attempts.map((word, id) => {
        return (
          <div key={id} className="flex justify-content items-center gap-2">
            {word.map((letter) => {
              return <div className="box">{letter}</div>;
            })}
          </div>
        );
      })}
    </div>
  );
};

export default grid;
