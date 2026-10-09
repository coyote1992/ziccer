"use client";

import { usePathname } from "next/navigation";
import { DotSpace } from "@/kits/dot-space/engine/react/DotSpace";
import { FONT, HOME_STEPS, PALETTE } from "@/lib/space-config";

/** One dot field behind every page: the shapes on the homepage, a quiet starfield elsewhere. */
export function SpaceBackground() {
  const home = usePathname() === "/";
  return <DotSpace key={home ? "home" : "quiet"} steps={home ? HOME_STEPS : undefined} palette={PALETTE} font={FONT} />;
}
