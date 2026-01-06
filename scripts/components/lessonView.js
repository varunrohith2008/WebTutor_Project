/**
 * Lesson View Component
 */
window.LessonViewComponent = {
    currentModule: null,

    render: function (container, module) {
        this.currentModule = module;
        const defaultCode = module.content?.example || '// Type your code here\nconsole.log("Hello World");';

        container.innerHTML = `
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-fade-in">
                <!-- Header -->
                <div class="mb-6 flex items-center justify-between">
                    <div>
                        <div class="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 mb-1">
                            <span>${module.courseTitle}</span>
                            <svg class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
                            <span>${module.title}</span>
                        </div>
                        <h2 class="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">${module.title}</h2>
                    </div>
                    <button onclick="App.navigate('dashboard')" class="px-4 py-2 text-sm font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-dark-panel rounded-lg transition-colors flex items-center gap-2">
                        <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/></svg>
                        Dashboard
                    </button>
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 h-[calc(100vh-200px)]">
                    
                    <!-- Left Column: Content -->
                    <div class="overflow-y-auto custom-scrollbar pr-2 space-y-8 flex flex-col">
                        
                        <!-- Explanation Card -->
                        <div class="bg-white dark:bg-dark-panel rounded-2xl shadow-sm border border-slate-200 dark:border-dark-border p-6 prose dark:prose-invert max-w-none hover:shadow-md transition-shadow">
                            ${module.content?.explanation || '<p class="text-slate-500 italic">Content coming soon...</p>'}
                        </div>

                         <!-- Action Footer -->
                        <div class="mt-auto pt-8 pb-20">
                            <div class="bg-brand-50 dark:bg-brand-900/10 rounded-2xl p-6 border border-brand-100 dark:border-brand-900/30 flex flex-col sm:flex-row items-center justify-between gap-4">
                                <div>
                                    <h4 class="font-bold text-brand-900 dark:text-brand-100 mb-1">Ready to test your knowledge?</h4>
                                    <p class="text-sm text-brand-700 dark:text-brand-300">Take the quick quiz to earn XP and complete this lesson.</p>
                                </div>
                                <button onclick="LessonViewComponent.openQuizModal()" 
                                    class="ripple-btn px-8 py-3 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-bold shadow-lg shadow-brand-500/30 transform hover:-translate-y-1 transition-all whitespace-nowrap">
                                    Take Quiz 📝
                                </button>
                            </div>
                        </div>
                    </div>

                    <!-- Right Column: Code Editor -->
                    <div class="flex flex-col gap-4 h-full">
                        <div class="bg-slate-900 rounded-xl overflow-hidden flex flex-col flex-1 shadow-2xl ring-1 ring-slate-900/5 transition-transform hover:ring-slate-700">
                            <!-- Editor Header -->
                            <div class="flex items-center justify-between px-4 py-2 bg-slate-800 border-b border-slate-700 select-none">
                                <span class="text-xs font-mono text-slate-400 flex items-center gap-2">
                                    <span class="w-2 h-2 rounded-full bg-red-500"></span>
                                    <span class="w-2 h-2 rounded-full bg-yellow-500"></span>
                                    <span class="w-2 h-2 rounded-full bg-green-500"></span>
                                    script.js
                                </span>
                                <div class="flex gap-2">
                                     <button onclick="LessonViewComponent.resetCode()" class="p-1.5 text-slate-400 hover:text-white rounded hover:bg-slate-700 transition-colors" title="Reset Code">
                                        <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>
                                    </button>
                                    <button onclick="LessonViewComponent.runCode()" class="ripple-btn flex items-center gap-2 px-3 py-1 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded transition-all shadow-lg shadow-emerald-900/20">
                                        <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd"/></svg>
                                        Run Code
                                    </button>
                                </div>
                            </div>
                            
                            <!-- Editor Input -->
                            <div class="relative flex-1 group">
                                <textarea id="code-editor" 
                                    class="absolute inset-0 w-full h-full bg-slate-900 text-slate-300 font-mono text-sm p-4 resize-none focus:outline-none custom-scrollbar leading-relaxed"
                                    spellcheck="false">${defaultCode}</textarea>
                            </div>
                        </div>

                        <!-- Console/Output -->
                        <div class="h-1/3 bg-slate-900 rounded-xl overflow-hidden flex flex-col border-t-4 border-slate-800 shadow-xl">
                            <div class="px-4 py-2 bg-slate-800 text-xs font-mono text-slate-400 mb-0 flex justify-between select-none">
                                <span>Console Output</span>
                                <button onclick="document.getElementById('console-output').innerHTML = ''" class="hover:text-white transition-colors">Clear</button>
                            </div>
                            <div id="console-output" class="flex-1 p-4 font-mono text-sm text-emerald-400 overflow-y-auto custom-scrollbar space-y-1">
                                <span class="text-slate-500 opacity-50 select-none">// Output will appear here...</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        `;
    },

    openQuizModal: function () {
        const quiz = this.currentModule.content?.quiz;
        if (!quiz) return;

        const quizHtml = `
            <div class="p-0">
                <div class="bg-gradient-to-r from-brand-600 to-indigo-600 p-6">
                    <h3 class="text-2xl font-bold text-white mb-1">Knowledge Check 📝</h3>
                    <p class="text-brand-100 text-sm">Answer correctly to unlock the next lesson!</p>
                </div>
                

                <div class="p-6 max-h-[60vh] overflow-y-auto custom-scrollbar">
                    <div class="space-y-8">
                        ${quiz.map((q, idx) => `
                            <div class="quiz-question" id="q-${idx}">
                                <p class="font-semibold text-slate-800 dark:text-slate-200 mb-3 text-lg">${idx + 1}. ${q.q}</p>
                                <div class="space-y-3">
                                    ${q.options.map((opt, optIdx) => {
            // Escape HTML tags to prevent them from rendering as elements
            const safeOpt = opt.replace(/</g, "&lt;").replace(/>/g, "&gt;");
            return `
                                        <label class="flex items-center gap-4 p-4 rounded-xl border-2 border-slate-100 dark:border-white/5 cursor-pointer hover:bg-slate-50 dark:hover:bg-white/5 hover:border-brand-200 dark:hover:border-brand-500/30 transition-all group">
                                            <div class="relative flex items-center">
                                                <input type="radio" name="q-${idx}" value="${optIdx}" class="peer h-4 w-4 border-slate-300 text-brand-600 focus:ring-brand-500">
                                            </div>
                                            <span class="text-slate-600 dark:text-slate-300 font-medium group-hover:text-slate-900 dark:group-hover:text-white">${safeOpt}</span>
                                        </label>
                                    `}).join('')}
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>

                <div class="p-6 border-t border-slate-100 dark:border-dark-border bg-slate-50 dark:bg-black/20 flex flex-col items-center">
                    <button onclick="LessonViewComponent.checkQuiz()" class="ripple-btn w-full py-4 bg-slate-900 dark:bg-white dark:text-slate-900 text-white font-bold rounded-xl hover:shadow-xl hover:scale-[1.02] transition-all text-lg">
                        Submit Answers
                    </button>
                     <div id="quiz-result" class="mt-4 hidden font-bold text-lg animate-scale-in"></div>
                </div>
            </div>
        `;

        Utils.openModal(quizHtml);
    },

    checkQuiz: function () {
        const quiz = this.currentModule.content?.quiz;
        if (!quiz) return;

        let score = 0;
        let allCorrect = true;

        quiz.forEach((q, idx) => {
            const selected = document.querySelector(`input[name="q-${idx}"]:checked`);
            const container = document.getElementById(`q-${idx}`);

            // Clear previous styles: simple remove classes
            container.querySelectorAll('label').forEach(l => {
                l.classList.remove('bg-green-50', 'border-green-500', 'bg-red-50', 'border-red-500', 'dark:bg-green-900/20', 'dark:bg-red-900/20');
            });

            if (selected) {
                if (parseInt(selected.value) === q.correct) {
                    score++;
                    selected.closest('label').classList.add('bg-green-50', 'dark:bg-green-900/20', 'border-green-500');
                } else {
                    allCorrect = false;
                    selected.closest('label').classList.add('bg-red-50', 'dark:bg-red-900/20', 'border-red-500');
                }
            } else {
                allCorrect = false;
            }
        });

        const resultDiv = document.getElementById('quiz-result');
        resultDiv.classList.remove('hidden', 'text-green-600', 'text-red-600');

        if (allCorrect) {
            resultDiv.innerHTML = `
                <div class="flex flex-col items-center gap-2">
                    <span class="text-3xl">🎉 Can't stop, won't stop!</span>
                    <span class="text-green-600 dark:text-green-400">Perfect Score! +50 XP</span>
                    <button onclick="Utils.closeModal(); LessonViewComponent.markComplete('${this.currentModule.id}')" class="mt-2 px-6 py-2 bg-green-500 text-white rounded-lg text-sm hover:bg-green-600">Continue</button>
                </div>
            `;
        } else {
            resultDiv.innerHTML = `
                <div class="flex flex-col items-center gap-2">
                    <span class="text-3xl">😅 Almost there!</span>
                    <span class="text-red-500">You got ${score}/${quiz.length}. Try again?</span>
                </div>
            `;
        }
    },

    runCode: function () {
        const code = document.getElementById('code-editor').value;
        const outputDiv = document.getElementById('console-output');

        outputDiv.innerHTML = ''; // Clear previous

        // Mock Console
        const mockConsole = {
            log: (...args) => {
                const line = document.createElement('div');
                line.className = 'border-b border-white/5 pb-0.5 animate-fade-in';
                line.textContent = args.map(a => typeof a === 'object' ? JSON.stringify(a) : String(a)).join(' ');
                outputDiv.appendChild(line);
                outputDiv.scrollTop = outputDiv.scrollHeight;
            },
            error: (...args) => {
                const line = document.createElement('div');
                line.className = 'text-red-400 border-b border-white/5 pb-0.5 animate-fade-in';
                line.textContent = 'Error: ' + args.join(' ');
                outputDiv.appendChild(line);
            }
        };

        try {
            const execute = new Function('console', `
                try {
                    ${code}
                } catch(e) {
                    console.error(e.message);
                }
            `);

            execute(mockConsole);
            Utils.showToast('Code executed successfully', 'success');
        } catch (e) {
            mockConsole.error(e.message);
        }
    },

    resetCode: function () {
        if (this.currentModule && this.currentModule.content) {
            document.getElementById('code-editor').value = this.currentModule.content.example;
            Utils.showToast('Code reset to example', 'info');
        }
    },

    markComplete: function (id) {
        Utils.emit('module-complete', id);
    }
};
