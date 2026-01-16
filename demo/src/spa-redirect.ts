// GitHub Pages SPA redirect handling
// This handles the redirect from 404.html
export function handleSpaRedirect() {
  const { redirect } = sessionStorage
  if (redirect) {
    delete sessionStorage.redirect
    const url = new URL(redirect)
    const path = url.pathname + url.search + url.hash
    window.history.replaceState(null, '', path)
  }
}
