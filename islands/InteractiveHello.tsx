import { useEffect, useState } from "preact/hooks";

const HELLOS = ["Hello", "Hallo", "Bonjour", "Cześć", "Hola", "Привет", "안녕하세요"];

// The target date is passed as a string instead of as a `Date`, because the
// props to island components need to be JSON (de)serializable.
export default function InteractiveHello() {
  const [hello, setHello] = useState(HELLOS[0]);

  useEffect(() => {
    const timer = setInterval(() => {
      setHello(HELLOS[Math.floor(Math.random() * 7)])
    }, 500);
    return () => clearInterval(timer);
  })

  const textDisplay = hello
  return <span>{textDisplay}</span>
}