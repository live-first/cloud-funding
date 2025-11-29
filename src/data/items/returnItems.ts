export type ReturnItemType = {
  id: string
  img?: string
  amount: number
  title?: string
  detail: string
  date?: string
  maxCount: number[]
}

/**
 * リターン品の情報はここに入れる
 */
export const returnItems: ReturnItemType[] = [
  {
    id: '1',
    img: undefined,
    amount: 3000,
    title: 'オンライントーク3分',
    detail: 'オンラインでトークを実施します。',
    date: '2026年1月中',
    maxCount: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  },
  {
    id: '2',
    img: undefined,
    amount: 5000,
    title: '20秒動画+チェキ1枚',
    detail: '券をお渡しします。他メンバーに変更可能です。',
    date: '2026年1月中',
    maxCount: [1, 2, 3, 4, 5, 6],
  },
  {
    id: '3',
    img: undefined,
    amount: 10000,
    title: 'お礼動画+20秒動画+チェキ券5枚',
    detail: 'チェキ券の使用は他メンバーでも可能です。',
    date: '2026年1月中',
    maxCount: [1, 2, 3],
  },
  {
    id: '4',
    img: undefined,
    amount: 50000,
    title: 'プリ同+私物サイン+チェキ券15枚',
    detail: 'チェキ券の使用は他メンバーでも可能です。',
    date: '2026年1月中',
    maxCount: [1],
  },
  {
    id: '5',
    img: undefined,
    amount: 100000,
    title: '都内2時間個別オフ会+宿題チェキ券1枚+お手紙+チェキ券30枚',
    detail: 'チェキ券の使用は他メンバーでも可能です。',
    date: '2026年1月中',
    maxCount: [1],
  },
]
