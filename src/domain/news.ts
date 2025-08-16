import { ImgType } from "./img"

type UrlType = {
  title: string
  url: string
}

export type NewsType = {
  id: number
  date: string
  title: string
  context: string[]
  urls: UrlType[]
  img: ImgType[]
}
