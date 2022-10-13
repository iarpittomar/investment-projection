interface IPayload {
  name: string;
  value: number;
  payload: any;
  color: string;
}

export interface ITooltip {
  active?: boolean;
  payload?: IPayload[];
  label?: string;
}
