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
  HOKKAIDO: 'HOKKAIDO',
  TOHOKU: 'TOHOKU',
  KANTO: 'KANTO',
  HOKURIKU: 'HOKURIKU',
  CHUBU: 'CHUBU',
  KINKI: 'KINKI',
  CHUGOKU: 'CHUGOKU',
  SHIKOKU: 'SHIKOKU',
  KYUSHU: 'KYUSHU',
  OKINAWA: 'OKINAWA',
} as const

export type Region = (typeof Region)[keyof typeof Region]

export const regionToString = (key?: string) => {
  return key === Region.HOKKAIDO
    ? '北海道'
    : key === Region.TOHOKU
    ? '東北'
    : key === Region.KANTO
    ? '関東'
    : key === Region.HOKURIKU
    ? '北陸'
    : key === Region.CHUBU
    ? '中部'
    : key === Region.KINKI
    ? '近畿'
    : key === Region.CHUGOKU
    ? '中国'
    : key === Region.SHIKOKU
    ? '四国'
    : key === Region.KYUSHU
    ? '九州'
    : key === Region.OKINAWA
    ? '沖縄'
    : ''
}
