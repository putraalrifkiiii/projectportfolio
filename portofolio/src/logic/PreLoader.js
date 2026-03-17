import { useState, useEffect } from "react";

function PreLoaders(time = 1000) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, time);

    return () => clearTimeout(timer);
  }, [time]);

  return loading;
}

export default PreLoaders;
