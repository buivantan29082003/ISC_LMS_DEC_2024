export interface StudentRetentionListTableRowProps {
  item: any;
  index: number;
  isChecked?: boolean;
  onItemChange?: (index: number, event: React.ChangeEvent<HTMLInputElement>) => void;
  onDelete?: (item: any) => void;
}

