export interface TrainingItem {
  id?: number;
  organization?: string;
  specialization?: string;
  startDate?: string;
  endDate?: string;
  degree?: string;
  form?: string;
  onClick?: () => void;
}
