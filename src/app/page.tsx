import { SingleViewLayout } from '@/layouts/SingleViewLayout'
import { GlobalHeader } from '@/views/header/GlobalHeader'
import { HomeView } from '@/views/home'

export default function Home() {
  return (
    <SingleViewLayout header={<GlobalHeader />} main={<HomeView />} />
  )
}
