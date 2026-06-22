import { useState, useEffect } from "react";

/**
 * useTypewriter
 * Animates text one character at a time.
 *
 * @param {string} text  - The full string to reveal.
 * @param {number} speed - Milliseconds between each character (default: 80).
 * @returns {{ displayed: string, done: boolean }}
 */
export function useTypewriter(text, speed = 80) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    setDisplayed("");
    setDone(false);

    let i = 0;
    const interval = setInterval(() => {
      if (i < text.length) {
        setDisplayed(text.slice(0, i + 1));
        i++;
      } else {
        setDone(true);
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return { displayed, done };
}
