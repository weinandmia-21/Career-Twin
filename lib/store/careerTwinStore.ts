import { create } from "zustand";
import { persist } from "zustand/middleware";

import type { CareerTwinProfile } from "@/lib/ai/schemas";

type CareerTwinState = {
  profile: CareerTwinProfile | null;

  setProfile: (profile: CareerTwinProfile) => void;

  clearProfile: () => void;
};

export const useCareerTwinStore = create<CareerTwinState>()(
  persist(
    (set) => ({
      profile: null,

      setProfile: (profile) => {
        console.log("✅ Saving profile:", profile);

        set({
          profile,
        });
      },

      clearProfile: () => {
        set({
          profile: null,
        });
      },
    }),
    {
      name: "career-twin-profile",
    }
  )
);