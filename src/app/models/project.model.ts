export class Project {
  public currentFunding: number = 0;
  constructor(public projectName: string, public managers: string, public fundingGoal: string, public fundingUse: string, public description: string, public rewards: string){}
}
