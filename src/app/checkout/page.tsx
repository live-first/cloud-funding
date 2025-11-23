import { SingleViewLayout } from '@/layouts/SingleViewLayout'
import { CheckoutView } from '@/views/checkout'
import { Header } from '@/views/header'

export default function CheckoutPage() {
  return <SingleViewLayout header={<Header />} allView={<CheckoutView />} />
}
