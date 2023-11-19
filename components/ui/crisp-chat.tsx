"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("e53b3db9-4a60-43c5-9e8e-81fc6e779665");
  }, []);

  return null;
};