import { SingleViewLayout } from '@/lf-layouts/SingleViewLayout'
import { UnLoginHeader } from '@/lf-views/header/UnLogintHeader'
import { LoginView } from '@/lf-views/login'

export default function Login() {
  return <SingleViewLayout header={<UnLoginHeader />} main={<LoginView />} />
}
