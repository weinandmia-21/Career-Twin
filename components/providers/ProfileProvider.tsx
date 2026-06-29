"use client";

import { useEffect } from "react";

import type { CareerTwinProfile } from "@/lib/ai/schemas";
import { useCareerTwinStore } from "@/lib/store/careerTwinStore";

type ProfileProviderProps = {
  profile: CareerTwinProfile | null;
};

export default function ProfileProvider({
  profile,
}: ProfileProviderProps) {
  const setProfile = useCareerTwinStore(
    (state) => state.setProfile
  );

  useEffect(() => {
    if (profile) {
      console.log("🚀 Hydrating Career Twin:", profile);
      setProfile(profile);
    }
  }, [profile, setProfile]);

  return null;
}