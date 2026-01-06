/**
 * Dashboard Component
 */
window.DashboardComponent = {
    render: function (container) {
        const user = App.state.user;
        const totalModules = CourseData.reduce((acc, course) => acc + course.modules.length, 0);
        const completedCount = user.completedModules.length;
        const percent = Math.round((completedCount / totalModules) * 100);

        // Determine Badges
        const badges = [
            { name: 'Onboarding', icon: '🚀', earned: completedCount >= 1 },
            { name: 'HTML Pro', icon: '🌐', earned: completedCount >= 5 },
            { name: 'CSS Master', icon: '🎨', earned: completedCount >= 10 },
            { name: 'JS Wizard', icon: '⚡', earned: completedCount >= 15 },
            { name: 'Full Stack', icon: '🎓', earned: completedCount >= totalModules }
        ];

        container.innerHTML = `
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-fade-in">
                
                <!-- Welcome Banner -->
                <div class="bg-gradient-to-r from-brand-600 to-teal-800 rounded-3xl p-8 text-white shadow-xl mb-10 relative overflow-hidden card-hover">
                    <div class="relative z-10">
                        <h2 class="text-3xl font-bold mb-2">Welcome back, ${user.username}! 👋</h2>
                        <p class="text-brand-100 text-lg mb-6">You're on a ${user.streak} day streak. Keep it up!</p>
                        <button onclick="Utils.emit('navigate', {view: 'lesson', id: 'js-variables'})" 
                            class="bg-white text-brand-600 hover:bg-brand-50 font-bold py-3 px-6 rounded-xl transition-colors shadow-lg">
                            Continue Learning
                        </button>
                    </div>
                    <div class="absolute right-0 bottom-0 opacity-10 transform translate-x-10 translate-y-10">
                        <svg class="w-64 h-64" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zm0 9l2.5-1.25L12 8.75l-2.5 1.25L12 11zm0 2.5l-5-2.5-5 2.5L12 22l10-8.5-5-2.5-5 2.5z"/></svg>
                    </div>
                </div>

                <!-- Stats Grid -->
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                    <!-- Progress Card -->
                    <div class="bg-white dark:bg-dark-panel p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-dark-border card-hover">
                        <h3 class="text-slate-500 dark:text-slate-400 font-medium text-sm uppercase tracking-wide mb-4">Overall Progress</h3>
                        <div class="flex items-end justify-between mb-2">
                            <span class="text-4xl font-bold text-slate-900 dark:text-white">${percent}%</span>
                            <span class="text-sm text-slate-500 mb-1">${completedCount}/${totalModules} modules</span>
                        </div>
                        <div class="w-full bg-slate-100 dark:bg-slate-700 h-2.5 rounded-full overflow-hidden">
                            <div class="bg-emerald-500 h-full rounded-full transition-all duration-1000" style="width: ${percent}%"></div>
                        </div>
                    </div>

                    <!-- XP Card -->
                    <div class="bg-white dark:bg-dark-panel p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-dark-border card-hover">
                        <h3 class="text-slate-500 dark:text-slate-400 font-medium text-sm uppercase tracking-wide mb-4">Total XP</h3>
                        <div class="flex items-center gap-4">
                            <div class="p-3 bg-brand-50 dark:bg-brand-900/30 rounded-xl">
                                <span class="text-2xl">🏆</span>
                            </div>
                            <div>
                                <span class="text-3xl font-bold text-slate-900 dark:text-white block">${user.xp}</span>
                                <span class="text-xs text-slate-500">Points Earned</span>
                            </div>
                        </div>
                    </div>

                    <!-- Certificates (Mock) -->
                     <div class="bg-white dark:bg-dark-panel p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-dark-border card-hover">
                        <h3 class="text-slate-500 dark:text-slate-400 font-medium text-sm uppercase tracking-wide mb-4">Certificates</h3>
                        <div class="flex items-center justify-between opacity-50">
                            <span class="text-sm text-slate-500">No certificates yet</span>
                            <span class="text-2xl">📜</span>
                        </div>
                        <button class="mt-4 w-full py-2 text-sm text-brand-600 font-medium hover:bg-brand-50 dark:hover:bg-white/5 rounded-lg transition-colors border border-dashed border-brand-200 dark:border-brand-900/50">
                            View Requirements
                        </button>
                    </div>
                </div>

                <!-- Badges & Achievements -->
                <div class="bg-white dark:bg-dark-panel rounded-2xl shadow-sm border border-slate-200 dark:border-dark-border p-8 card-hover">
                    <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-6">Achievements</h3>
                    <div class="grid grid-cols-2 md:grid-cols-5 gap-6">
                        ${badges.map(badge => `
                            <div class="flex flex-col items-center text-center group">
                                <div class="w-20 h-20 rounded-full flex items-center justify-center text-4xl mb-3 shadow-inner
                                    ${badge.earned
                ? 'bg-gradient-to-br from-amber-100 to-orange-100 border-2 border-amber-300'
                : 'bg-slate-100 dark:bg-slate-800 grayscale opacity-40'}">
                                    ${badge.icon}
                                </div>
                                <span class="text-sm font-semibold text-slate-700 dark:text-slate-300 group-hover:text-brand-600 transition-colors">${badge.name}</span>
                                ${badge.earned ? '<span class="text-[10px] text-emerald-500 font-bold mt-1">UNLOCKED</span>' : '<span class="text-[10px] text-slate-400 mt-1">LOCKED</span>'}
                            </div>
                        `).join('')}
                    </div>
                </div>

            </div>
        `;
    }
};
