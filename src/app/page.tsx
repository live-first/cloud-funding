import { SingleViewLayout } from '@/layouts/SingleViewLayout'
import { ContentsView } from '@/views/contents'
import { TopView } from '@/views/top'

export default function Home() {
  return <SingleViewLayout allView={<TopView />} main={<ContentsView />} />
}
