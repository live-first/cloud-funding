/**
 * Region 地域
 *
 * HOKKAIDO: 北海道
 * TOHOKU: 東北
 * KANTO: 関東
 * HOKURIKU: 北陸
 * CHUBU: 中部
 * KINKI: 近畿
 * CHUGOKU: 中国
 * SHIKOKU: 四国
 * KYUSHU: 九州
 * OKINAWA: 沖縄
 */
export const Region = {
  HOKKAIDO: 0,
  TOHOKU: 1,
  KANTO: 2,
  HOKURIKU: 3,
  CHUBU: 4,
  KINKI: 5,
  CHUGOKU: 6,
  SHIKOKU: 7,
  KYUSHU: 8,
  OKINAWA: 9,
} as const

export type Region = (typeof Region)[keyof typeof Region]
