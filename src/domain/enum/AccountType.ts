export const AccountType = {
  GENERAL: 'GENERAL',
  MEMBER: 'MEMBER',
  OPERATION: 'OPERATION',
  ADMIN: 'ADMIN',
} as const

export type AccountType = (typeof AccountType)[keyof typeof AccountType]

export const AccountTypeToString = (key?: string) => {
  return key === AccountType.GENERAL
    ? '一般'
    : key === AccountType.MEMBER
    ? 'メンバー'
    : key === AccountType.OPERATION
    ? '管理者'
    : key === AccountType.ADMIN
    ? '開発者'
    : ''
}
