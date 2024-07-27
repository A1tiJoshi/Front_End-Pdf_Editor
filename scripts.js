document.addEventListener('DOMContentLoaded', function () {
    // Ensure SuprSend SDK is loaded
    if (typeof Suprsend !== 'undefined') {
        const suprsend = new Suprsend({
            apiKey: SUPRSEND_WORKSPACE_KEY,
            apiSecret: SUPRSEND_WORKSPACE_SECRET,
            environment: 'production'  // Change to 'development' if using development environment
        });

        suprsend.renderInbox({
            container: '#suprsend-inbox'
        });
    } else {
        console.error('SuprSend SDK is not loaded.');
    }
});
