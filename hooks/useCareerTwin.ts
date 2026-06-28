"use client";

import { useCareerTwinStore } from "@/lib/store/careerTwinStore";

export function useCareerTwin() {
  return useCareerTwinStore((state) => state.profile);
}