/**
 * Sidebar Component
 */
window.SidebarComponent = {
    render: function () {
        const sidebar = document.getElementById('app-sidebar');
        const completed = App.state.user.completedModules;

        sidebar.innerHTML = `
            <div class="p-4 space-y-1">
                <div class="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 px-2">Course Menu</div>
                ${CourseData.map(course => `
                    <div class="course-group mb-2">
                        <!-- Course Header -->
                        <button onclick="SidebarComponent.toggleGroup('${course.id}')" 
                            class="w-full flex items-center justify-between px-3 py-2 text-sm font-semibold rounded-lg text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-dark-panel transition-colors group">
                            <div class="flex items-center gap-3">
                                <span class="${course.color} text-lg opacity-80 group-hover:opacity-100 transition-opacity">${course.icon}</span>
                                <span>${course.title}</span>
                            </div>
                            <svg id="arrow-${course.id}" class="w-4 h-4 text-slate-400 transition-transform ${course.isOpen ? 'rotate-90' : ''}" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                            </svg>
                        </button>
                        
                        <!-- Modules List -->
                        <div id="group-${course.id}" class="mt-1 ml-4 space-y-0.5 border-l-2 border-slate-100 dark:border-dark-border ${course.isOpen ? 'block' : 'hidden'}">
                            ${course.modules.map(module => `
                                <button onclick="Utils.emit('navigate', {view: 'lesson', id: '${module.id}'})"
                                    id="nav-${module.id}"
                                    class="w-full text-left pl-4 pr-3 py-2 text-sm rounded-r-lg border-l-2 -ml-[2px] transition-all flex items-center justify-between group
                                    ${module.isLocked ? 'opacity-50 cursor-not-allowed' : 'hover:bg-slate-50 dark:hover:bg-white/5 border-transparent hover:border-slate-300 dark:hover:border-slate-600'}">
                                    <span class="text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white transition-colors truncate">
                                        ${module.title}
                                    </span>
                                    ${completed.includes(module.id)
                ? `<svg class="w-4 h-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>`
                : module.isLocked ? `<span class="text-xs">🔒</span>` : ''}
                                </button>
                            `).join('')}
                        </div>
                    </div>
                `).join('')}
            </div>
            
            <div class="mt-auto p-4 border-t border-slate-200 dark:border-dark-border">
                <div class="bg-gradient-to-br from-brand-500 to-emerald-800 rounded-xl p-4 text-white shadow-lg overflow-hidden relative group cursor-pointer card-hover" 
                    onclick="Utils.emit('navigate', {view: 'dashboard'})">
                    <div class="absolute top-0 right-0 w-16 h-16 bg-white opacity-10 rounded-full blur-xl transform translate-x-4 -translate-y-4 group-hover:scale-150 transition-transform duration-500"></div>
                    <h3 class="font-bold mb-1 relative z-10">Daily Challenge</h3>
                    <p class="text-xs text-blue-100 mb-3 relative z-10">Solve the daily algorithm to win a badge!</p>
                    <div class="w-full bg-white/20 h-1.5 rounded-full overflow-hidden">
                        <div class="bg-white h-full w-2/3"></div>
                    </div>
                </div>
            </div>
        `;
    },

    toggleGroup: function (courseId) {
        const course = CourseData.find(c => c.id === courseId);
        if (course) {
            course.isOpen = !course.isOpen;
            this.render(); // Re-render to animate/toggle
        }
    },

    updateActive: function (moduleId) {
        // Clear all active states
        document.querySelectorAll('[id^="nav-"]').forEach(el => {
            el.classList.remove('bg-brand-50', 'dark:bg-brand-900/20', 'border-brand-500', 'text-brand-700', 'dark:text-brand-400');
            el.classList.add('border-transparent');
        });

        if (moduleId) {
            const activeEl = document.getElementById(`nav-${moduleId}`);
            if (activeEl) {
                // Ensure parent group is open
                // (Logic can be added here if needed to auto-expand parent)

                activeEl.classList.remove('border-transparent');
                activeEl.classList.add('bg-brand-50', 'dark:bg-brand-900/20', 'border-brand-500', 'text-brand-700', 'dark:text-brand-400');
            }
        }
    },

    toggleMobile: function () {
        const sidebar = document.getElementById('app-sidebar');
        sidebar.classList.toggle('hidden');
        sidebar.classList.toggle('fixed');
        sidebar.classList.toggle('z-40');
        sidebar.classList.toggle('inset-0');
        sidebar.classList.toggle('w-full'); // Full width on mobile
        sidebar.classList.add('pt-16'); // Account for header
    }
};
