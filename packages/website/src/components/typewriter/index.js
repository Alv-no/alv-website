import React, { useState, useEffect } from 'react';

export const Typewriter = ({ linesAndClasses, delay }) => {
  const [linesCompleted, setLinesCompleted] = useState(0);

  const callback = () => {
    setLinesCompleted((prev) => prev + 1);
  };

  return (
    <>
      {linesAndClasses.slice(0, linesCompleted + 1).map((el) => {
        return (
          <>
            <LineTyper
              lineToType={el.line}
              delay={delay}
              classes={el.classes}
              callback={callback}
              dot={el.dot}
            />
          </>
        );
      })}
    </>
  );
};

const LineTyper = ({ lineToType, delay, callback, classes, dot }) => {
  const [text, setText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [completed, setCompleted] = useState(false);
  useEffect(() => {
    if (currentIndex < lineToType.length) {
      setTimeout(() => {
        setText(text + lineToType[currentIndex]);
        setCurrentIndex(currentIndex + 1);
      }, delay);
    } else {
      setTimeout(() => {
        setCompleted(true);
        return callback();
      }, 400);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex]);
  return (
    <div className={classes}>
      {text}
      {dot && completed ? (
        <span className="text-theme-accent font-bold">.</span>
      ) : (
        ''
      )}
    </div>
  );
};
