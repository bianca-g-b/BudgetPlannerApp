import { useEffect } from 'react'

/*AUTH HOOKS*/

// Hook to redirect user to dashboard if already logged in
export function useRedirect({user, isAuthenticated, navigate}) {
    useEffect(()=>{
        if (user && isAuthenticated) {
            navigate("/dashboard")
        }
    },[user, isAuthenticated, navigate])
}

// Token and uidb64 hook
export function useParamValues({uidb64, token}) {
    useEffect(()=>{
    },[uidb64, token])
}
