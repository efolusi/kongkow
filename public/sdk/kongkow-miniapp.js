(function () {
    /**
     * Kongkow Mini App SDK
     * 
     * This library provides a bridge for communication between a Kongkow Mini App 
     * (running in an iframe) and the Kongkow parent window.
     */
    const Kongkow = {
        /**
         * Closes the current Mini App modal.
         */
        close: function () {
            window.parent.postMessage({ type: 'kongkow_miniapp_close' }, '*');
        },

        /**
         * Sends data back to the bot that launched the Mini App.
         * This data is typically processed by the bot's callback_query handler.
         */
        sendData: function (data) {
            window.parent.postMessage({ type: 'kongkow_miniapp_send_data', data: data }, '*');
        },

        /**
         * Signals to the parent window that the app is ready and loaded.
         */
        ready: function () {
            window.parent.postMessage({ type: 'kongkow_miniapp_ready' }, '*');
        },

        /**
         * Requests the current text from the host composer.
         * The host will respond with a 'kongkow_miniapp_text_response' message.
         * @returns {Promise<string>} The current composer text.
         */
        getComposerText: function () {
            return new Promise((resolve) => {
                const handler = (event) => {
                    if (event.data && event.data.type === 'kongkow_miniapp_text_response') {
                        window.removeEventListener('message', handler);
                        resolve(event.data.text);
                    }
                };
                window.addEventListener('message', handler);
                window.parent.postMessage({ type: 'kongkow_miniapp_get_text' }, '*');
            });
        },

        /**
         * Sets the text of the host composer.
         * @param {string} text The text to set.
         */
        setComposerText: function (text) {
            window.parent.postMessage({ type: 'kongkow_miniapp_set_text', text: text }, '*');
        },

        /**
         * Inserts text into the host composer at the current cursor position.
         * @param {string} text The text to insert.
         */
        insertComposerText: function (text) {
            window.parent.postMessage({ type: 'kongkow_miniapp_insert_text', text: text }, '*');
        }
    };

    // Expose to global scope
    window.Kongkow = Kongkow;

    // Auto-signal ready once this script finishes loading
    if (document.readyState === 'complete' || document.readyState === 'interactive') {
        Kongkow.ready();
    } else {
        window.addEventListener('DOMContentLoaded', function () {
            Kongkow.ready();
        });
    }
})();
