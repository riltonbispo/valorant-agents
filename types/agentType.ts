export interface AgentType {
  uuid: string;
  displayName: string;
  description: string;
  developerName: string;
  characterTags: null | any[];
  displayIcon: string;
  displayIconSmall: string;
  bustPortrait: string;
  fullPortrait: string;
  fullPortraitV2: string;
  killfeedPortrait: string;
  background: string;
  backgroundGradientColors: string[];
  assetPath: string;
  isFullPortraitRightFacing: boolean;
  isPlayableCharacter: boolean;
  isAvailableForTest: boolean;
  isBaseContent: boolean;
  role: {
    uuid: string;
    displayName: string;
    description: string;
    displayIcon: string;
    assetPath: string;
  };
  recruitmentData: null | any;
  abilities: Ability[];
  voiceLine: null | any;
}

type Ability = {
  slot: string;
  displayName: string;
  description: string;
  displayIcon: string;
};