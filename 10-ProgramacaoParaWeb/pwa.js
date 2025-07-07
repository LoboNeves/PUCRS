async function registrarServiceWorker() {
    if (navigator.serviceWorker) {
        try {
            await navigator.serviceWorker.register('pwa-serviceWorker.js');
        } catch (error) {
            console.error('Erro ao registrar o Service Worker:', error);
        }
    }
}