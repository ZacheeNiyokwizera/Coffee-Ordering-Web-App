import { useEffect, useState } from "react";

const generateUniqueId = (): string => {
  return "_" + Math.random().toString(36).substr(2, 9);
};

const useUserId = (): string => {
  const [userId, setUserId] = useState<string>("");

  useEffect(() => {
    let storedUserId = localStorage.getItem("userId");
    if (!storedUserId) {
      storedUserId = generateUniqueId();
      localStorage.setItem("userId", storedUserId);
    }
    setUserId(storedUserId);
  }, []);

  return userId;
};

export default useUserId;
