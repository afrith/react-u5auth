export const AuthContext: React.ComponentClass<{ clientId: string, provider: string }>

export function authenticated<T extends React.Component> (Component: T): T

export function useAuthentication (): { authenticated: false } | { authenticated: true, token: string }

export function getLocalToken (): string | undefined

export function clearLocalToken (): void
