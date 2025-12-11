import { SingleViewLayout } from '@/layouts/SingleViewLayout'
import { Footer } from '@/views/footer'
import { Header } from '@/views/header'
import { OutlineView } from '@/views/outline'
import { ReturnView } from '@/views/returns'
import { TopView } from '@/views/top'

export default function Home() {
  return (
    <SingleViewLayout
      header={<Header />}
      allView={<TopView />}
      main={<OutlineView />}
      bottomView={<ReturnView />}
      footer={<Footer />}
    />
  )
}
