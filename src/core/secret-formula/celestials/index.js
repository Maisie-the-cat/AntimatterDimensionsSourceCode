/* eslint-disable sort-imports */
import { alchemyResources } from "./alchemy";
import { effarigUnlocks } from "./effarig";
import { enslaved } from "./enslaved";
import { pelleGalaxyGeneratorUpgrades } from "./galaxy-generator";
import { celestialNavigation } from "./navigation";
import { finalSigil } from "./navigation-sigils/final-sigil";
import { galaxyIcon } from "./navigation-sigils/galaxy-icon";
import { perkShop } from "./perk-shop";
import { pelleUpgrades } from "./pelle-upgrades";
import { quotes } from "./quotes";
import { ra } from "./ra";
import { pelleRifts } from "./rifts";
import { singularityMilestones } from "./singularity-milestones";
import { pelleStrikes } from "./strikes";
import { teresa } from "./teresa";
import { v } from "./v";
/* eslint-enable sort-imports */

export const celestials = {
  effarig: {
    unlocks: effarigUnlocks
  },
  alchemy: {
    resources: alchemyResources
  },
  pelle: {
    galaxyGeneratorUpgrades: pelleGalaxyGeneratorUpgrades,
    strikes: pelleStrikes,
    upgrades: pelleUpgrades,
    rifts: pelleRifts
  },
  descriptions: {},
  enslaved,
  navigation: celestialNavigation,
  navSigils: {
    ...galaxyIcon,
    ...finalSigil
  },
  perkShop,
  ra,
  singularityMilestones,
  teresa,
  quotes,
  v
};
