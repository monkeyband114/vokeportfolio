import { useEffect } from "react";

export default function useDarkmode() {
  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove("dark");
  }, []);
}
