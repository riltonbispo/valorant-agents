export interface AgentType {
  uuid: number;
  displayName: string;
  description: string;
  fullPortrait: string;
  displayIcon: string;
  role: {
    uuid: string;
    displayName: string;
  };
}
