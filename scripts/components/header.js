/**
 * Header Component
 */
window.HeaderComponent = {
    render: function () {
        const header = document.getElementById('app-header');
        header.innerHTML = `
            <!-- Left: Logo & Mobile Menu -->
            <div class="flex items-center gap-4">
                <button class="md:hidden p-2 text-slate-500 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-dark-border rounded-lg" onclick="SidebarComponent.toggleMobile()">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
                </button>
                
                <div class="flex items-center gap-2 cursor-pointer" onclick="Utils.emit('navigate', {view: 'dashboard'})">
                    <div class="bg-brand-600 text-white p-1.5 rounded-lg">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/></svg>
                    </div>
                    <div>
                        <h1 class="font-bold text-xl tracking-tight text-slate-800 dark:text-white">WebTutor</h1>
                        <span class="text-xs text-brand-600 dark:text-brand-500 font-semibold uppercase tracking-wider hidden sm:block">Master Coding</span>
                    </div>
                </div>
            </div>

            <!-- Center: Search (Optional) -->
            <div class="hidden md:block w-96">
                <div class="relative group">
                    <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg class="h-5 w-5 text-slate-400 group-focus-within:text-brand-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                        </svg>
                    </div>
                    <input type="text" 
                        class="block w-full pl-10 pr-3 py-2 border border-slate-200 dark:border-dark-border rounded-xl leading-5 bg-slate-50 dark:bg-dark-panel text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500/50 focus:border-brand-500 transition-all sm:text-sm" 
                        placeholder="Search for lessons (e.g. 'Loops')...">
                </div>
            </div>

            <!-- Right: Actions -->
            <div class="flex items-center gap-2 sm:gap-4">
                <!-- Theme Toggle -->
                <button id="theme-btn" class="p-2 text-slate-500 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-dark-border rounded-full transition-colors relative overflow-hidden" onclick="Utils.toggleTheme()">
                   <span class="block dark:hidden">🌙</span>
                   <span class="hidden dark:block">☀️</span>
                </button>

                <!-- Profile Badge -->
                <div class="flex items-center gap-3 pl-4 border-l border-slate-200 dark:border-dark-border">
                    <div class="text-right hidden sm:block">
                        <p class="text-xs font-bold text-slate-900 dark:text-white" id="user-name">Guest</p>
                        <p class="text-[10px] text-slate-500 dark:text-slate-400" id="user-xp">0 XP</p>
                    </div>
                    <div class="h-9 w-9 bg-brand-100 dark:bg-brand-900/30 rounded-full flex items-center justify-center text-brand-600 dark:text-brand-500 font-bold border-2 border-white dark:border-dark-border shadow-sm">
                        G
                    </div>
                </div>
            </div>
        `;

        this.updateUser();
    },

    updateUser: function () {
        const user = App.state.user;
        const nameEl = document.getElementById('user-name');
        const xpEl = document.getElementById('user-xp');
        if (nameEl) nameEl.textContent = user.username.split(' ')[0];
        if (xpEl) xpEl.textContent = `${user.xp} XP`;
    }
};
