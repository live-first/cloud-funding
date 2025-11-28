export const cn = (...classes: (string | false | null | undefined)[]) => {
  return classes.filter(Boolean).join(' ')
}

export const getVercelEnv = () => {
  return process.env.VERCEL_ENV ?? 'development'
}
