/**
 * Utility Functions
 */
window.Utils = {
    // Toast Notification
    showToast: function (message, type = 'info') {
        const container = document.getElementById('toast-layer');
        if (!container) return;

        const toast = document.createElement('div');

        let colors = 'bg-white dark:bg-dark-panel border-l-4 border-brand-500';
        let icon = 'ℹ️';

        if (type === 'success') { colors = 'bg-emerald-50 dark:bg-emerald-900/20 border-l-4 border-emerald-500'; icon = '✅'; }
        if (type === 'error') { colors = 'bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500'; icon = '❌'; }
        if (type === 'warning') { colors = 'bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500'; icon = '⚠️'; }

        toast.className = `max-w-xs w-full shadow-lg rounded-r-lg pointer-events-auto flex items-center p-4 ring-1 ring-black/5 ${colors} transform transition-all duration-300 translate-x-full opacity-0`;

        toast.innerHTML = `
            <span class="text-xl mr-3">${icon}</span>
            <p class="text-sm font-medium text-slate-800 dark:text-slate-100">${message}</p>
        `;

        container.appendChild(toast);

        // Animate In
        requestAnimationFrame(() => {
            toast.classList.remove('translate-x-full', 'opacity-0');
        });

        // Auto Dismiss
        setTimeout(() => {
            toast.classList.add('translate-x-full', 'opacity-0');
            setTimeout(() => toast.remove(), 300);
        }, 3000);
    },

    // Modal Management
    openModal: function (contentHtml) {
        const modalLayer = document.getElementById('modal-layer');
        if (!modalLayer) return;

        modalLayer.classList.remove('pointer-events-none');
        modalLayer.innerHTML = `
            <div class="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity opacity-0 z-50 flex items-center justify-center p-4 modal-backdrop" id="modal-backdrop">
                <div class="bg-white dark:bg-dark-panel w-full max-w-2xl rounded-2xl shadow-2xl transform scale-95 opacity-0 modal-content overflow-hidden relative" id="modal-content">
                    <button onclick="Utils.closeModal()" class="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 dark:hover:text-white rounded-full hover:bg-slate-100 dark:hover:bg-white/10 transition-colors z-10">
                        <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
                    </button>
                    ${contentHtml}
                </div>
            </div>
        `;

        // Animation Frame
        requestAnimationFrame(() => {
            const backdrop = document.getElementById('modal-backdrop');
            const content = document.getElementById('modal-content');
            if (backdrop) backdrop.classList.remove('opacity-0');
            if (content) content.classList.remove('scale-95', 'opacity-0');
        });
    },

    closeModal: function () {
        const backdrop = document.getElementById('modal-backdrop');
        const content = document.getElementById('modal-content');
        const layer = document.getElementById('modal-layer');

        if (backdrop && content) {
            backdrop.classList.add('opacity-0');
            content.classList.add('scale-95', 'opacity-0');

            setTimeout(() => {
                layer.innerHTML = '';
                layer.classList.add('pointer-events-none');
            }, 300);
        }
    },

    // Simple Event Bus Wrapper
    emit: function (eventName, detail = {}) {
        window.dispatchEvent(new CustomEvent(eventName, { detail }));
    },

    on: function (eventName, callback) {
        window.addEventListener(eventName, (e) => callback(e.detail));
    },

    // Theme Manager
    initTheme: function () {
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    },

    toggleTheme: function () {
        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
            localStorage.theme = 'light';
        } else {
            document.documentElement.classList.add('dark');
            localStorage.theme = 'dark';
        }
    }
};
