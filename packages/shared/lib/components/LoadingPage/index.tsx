import { Spin } from "../Spin";
import React from "react";

export function LoadingPage() {
  return (
    <div className="flex items-center justify-center flex-1">
      <Spin size="lg" />
    </div>
  );
}
