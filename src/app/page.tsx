import { SingleViewLayout } from '@/lf-layouts/SingleViewLayout'
import { GlobalHeader } from '@/lf-templates/header/GlobalHeader'
import { HomeView } from '@/lf-views/home'

export default function Home() {
  return <SingleViewLayout header={<GlobalHeader />} main={<HomeView />} />
}
