import React from "react";

import { WarriorPage } from "./GuidePages/Warrior/WarriorPage";
import { MagicianPage } from "./GuidePages/Magician/MagicianPage";
import { HunterPage } from "./GuidePages/Hunter/HunterPage";
import { FighterPage } from "./GuidePages/Fighter/FighterPage";
import { AssasinPage } from "./GuidePages/Assasin/AssasinPage";

const AllPage = () => {
  return (
    <>
      <WarriorPage />
      <MagicianPage />
      <HunterPage />
      <FighterPage />
      <AssasinPage />
    </>
  );
};

export default AllPage;
