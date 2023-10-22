import { Record } from '@/app/common/models/record.model'

export interface Expense extends Record {
  expenseType: string
}
