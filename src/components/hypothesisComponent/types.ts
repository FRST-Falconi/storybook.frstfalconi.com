
export enum HypothesisEnum {
  PRIORITIZE = "prioritize",
  RAISED = "raised",
  SUGGESTED = "suggested",
}

export type Tests = {
  action_id: string;
  description: string;
  hypothese_id: string;
  successValue: number;
}
export type ActionPlan = {
  id: string;
  who: string;
  who_id: string;
  what: string;
  when: string;
  tests?: Tests[];
  isTested?: boolean;
  expectedResult: string;
  action_completed: string;
  ratings: Rating[];
  who_data: {
    name: string,
    uuid: string,
    email: string,
    avatar?: string
  }
}
export type HypothesisType = {
  id: string;
  new: boolean;
  changed: boolean;
  actionPlan: ActionPlan[]
  description: string;
  isPriorized: boolean;
  title: string;
  type: HypothesisEnum;
  votes: Vote[]

}

export type Rating = {
  id: number,
  anonymous: boolean,
  user_uuid: string,
  obj_code: string,
  obj_type: string,
  rating: number,
  description?: string,
  user: {
    name: string,
    uuid: string,
    email: string,
    avatar?: string
  }
}

export type Vote = {
  id: number,
  user_uuid: string,
  obj_code: string,
  obj_type: string,
  user: {
    name: string,
    uuid: string,
    email: string,
    avatar?: string
  }
}
