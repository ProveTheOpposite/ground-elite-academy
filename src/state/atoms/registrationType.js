import { atomWithStorage } from "jotai/utils";

// atom to store the registration type in storage
export const registrationTypeAtom = atomWithStorage(
  "registrationType",
  "", // no registration type selected by default
);
