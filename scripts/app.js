/**
 * Main Application State
 */
window.App = {
    state: {
        view: 'dashboard', // 'dashboard', 'lesson'
        currentModuleId: null,
        user: {
            username: 'Guest Learner',
            xp: 0,
            streak: 1,
            completedModules: [] // Array of IDs
        }
    },

    init: function () {
        console.log('🚀 WebTutor Initializing...');
        // Load State from LocalStorage
        const savedUser = localStorage.getItem('webtutor_user');
        if (savedUser) {
            this.state.user = JSON.parse(savedUser);
        }

        Utils.initTheme();

        // Render Initial Components
        HeaderComponent.render();
        SidebarComponent.render();

        // Router Logic
        this.navigate('dashboard');

        // Global Event Listeners
        Utils.on('navigate', (data) => this.navigate(data.view, data.id));
        Utils.on('module-complete', (id) => this.completeModule(id));

        // Check for Welcome Modal
        setTimeout(() => {
            // Debug: Always show welcome for verification
            // if (!localStorage.getItem('webtutor_welcome_seen')) {
            this.showWelcomeModal();
            // }
        }, 1000);
    },

    showWelcomeModal: function () {
        const modalHtml = `
            <div class="relative overflow-hidden">
                <!-- Decorative Background -->
                <div class="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-brand-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
                <div class="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-lime-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

                <div class="relative z-10 p-8 text-center">
                    <div class="mx-auto w-20 h-20 bg-gradient-to-tr from-brand-400 to-teal-600 rounded-2xl flex items-center justify-center shadow-lg mb-6 animate-scale-in">
                        <span class="text-4xl">🎓</span>
                    </div>

                    <h2 class="text-3xl font-bold text-slate-900 dark:text-white mb-3 animate-fade-in">Welcome to WebTutor!</h2>
                    <p class="text-slate-600 dark:text-slate-300 text-lg mb-8 leading-relaxed max-w-md mx-auto animate-fade-in">
                        Your interactive journey to mastering Web Development starts here. Learn, Code, and Quiz all in one place.
                    </p>

                    <div class="grid grid-cols-2 gap-4 mb-8 text-left max-w-sm mx-auto">
                        <div class="flex items-center gap-3 p-3 rounded-lg bg-slate-50 dark:bg-white/5 card-hover">
                            <span class="text-xl">👩‍💻</span>
                            <div>
                                <h4 class="font-bold text-slate-800 dark:text-white text-sm">Live Editor</h4>
                                <p class="text-xs text-slate-500">Code in real-time</p>
                            </div>
                        </div>
                        <div class="flex items-center gap-3 p-3 rounded-lg bg-slate-50 dark:bg-white/5 card-hover">
                            <span class="text-xl">🏆</span>
                            <div>
                                <h4 class="font-bold text-slate-800 dark:text-white text-sm">Gamified</h4>
                                <p class="text-xs text-slate-500">Earn XP & Badges</p>
                            </div>
                        </div>
                    </div>

                    <div class="flex flex-col gap-3">
                        <button onclick="App.dismissWelcome()" 
                            class="ripple-btn w-full py-4 rounded-xl bg-slate-900 dark:bg-white dark:text-slate-900 text-white font-bold text-lg shadow-xl hover:scale-[1.02] transition-transform">
                            Start Learning 🚀
                        </button>
                        
                        <label class="flex items-center justify-center gap-2 cursor-pointer group mt-2">
                             <input type="checkbox" id="dont-show-welcome" class="rounded border-slate-300 text-brand-600 focus:ring-brand-500" checked>
                             <span class="text-sm text-slate-500 group-hover:text-slate-700 dark:text-slate-400 dark:group-hover:text-slate-300 transition-colors">Don't show this again</span>
                        </label>
                    </div>
                </div>
            </div>
        `;
        Utils.openModal(modalHtml);
    },

    dismissWelcome: function () {
        const checkbox = document.getElementById('dont-show-welcome');
        if (checkbox && checkbox.checked) {
            localStorage.setItem('webtutor_welcome_seen', 'true');
        }
        Utils.closeModal();
        Utils.showToast('Let\'s get coding! selected a course to begin.', 'success');
    },

    navigate: function (view, id = null) {
        this.state.view = view;
        this.state.currentModuleId = id;

        // Render Main Content based on view
        const outlet = document.getElementById('router-outlet');
        outlet.innerHTML = ''; // Clear current

        if (view === 'dashboard') {
            DashboardComponent.render(outlet);
        } else if (view === 'lesson') {
            const module = this.findModule(id);
            if (module) {
                LessonViewComponent.render(outlet, module);
            } else {
                Utils.showToast('Lesson not found', 'error');
                this.navigate('dashboard');
            }
        }

        // Update Sidebar Active State
        SidebarComponent.updateActive(id);
    },

    findModule: function (id) {
        for (const course of CourseData) {
            const module = course.modules.find(m => m.id === id);
            if (module) return { ...module, courseTitle: course.title, courseId: course.id };
        }
        return null;
    },

    completeModule: function (id) {
        if (!this.state.user.completedModules.includes(id)) {
            this.state.user.completedModules.push(id);
            this.state.user.xp += 50; // XP Reward
            this.saveState();
            Utils.showToast('Lesson Completed! +50 XP', 'success');

            // Re-render dashboard if active to show progress
            if (this.state.view === 'dashboard') {
                DashboardComponent.render(document.getElementById('router-outlet'));
            }

            SidebarComponent.render(); // Update sidebar checks
        }
    },

    saveState: function () {
        localStorage.setItem('webtutor_user', JSON.stringify(this.state.user));
    }
};

// Start App when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    App.init();
});
