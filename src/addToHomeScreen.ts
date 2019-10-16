export default function addToHomeScreen() {
  window.addEventListener('beforeinstallprompt', (e: any) => {
    e.preventDefault()
    e.prompt()
  })
}
