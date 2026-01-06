# 🎓 WebTutor - Interactive Learning Platform

**WebTutor** is a modern, interactive e-learning platform designed to teach Web Development (HTML, CSS, JavaScript, React, MERN) through a gamified and hands-on experience. 

It is built as a **Single Page Application (SPA)** using **Vanilla JavaScript** and **Tailwind CSS**, requiring **no build step** or backend server to run.

---

## 🚀 Key Features & Capabilities

### 1. Interactive Learning Experience
- **Structured Curriculum**: Comprehensive modules covering HTML, CSS, JS, React, MERN Stack, and Projects.
- **Dynamic Content Engine**: Lessons are rendered dynamically from a central data file (`data.js`).
- **Live Code Simulation**: Users can write and execute JavaScript code directly in the browser with a simulated console.

### 2. Gamification & Progress
- **Quiz System**: Every lesson ends with a "Knowledge Check" popup quiz.
- **XP & Leveling**: Users earn **XP** for completing modules and quizzes.
- **Progress Tracking**: The system remembers which lessons you've completed (saved via `localStorage`).
- **Badges**: Users unlock badges (e.g., "JS Novice", "Html Master") as they progress.

### 3. Modern UI/UX
- **Glassmorphism Design**: A premium, frosted-glass aesthetic using transparent layers and blurs.
- **Welcome Onboarding**: A friendly animated welcome modal for first-time visitors.
- **Dark Mode**: Fully supported dark/light theme switching.
- **Responsive**: Works seamlessly on mobile, tablet, and desktop.
- **Smooth Animations**: Page transitions, modal headers, and button ripple effects.

---

## 🛠️ Technical Architecture

The project follows a **Component-Based Architecture** implemented in pure JavaScript, without frameworks like React or Vue, but mimicking their structure.

### File Structure
```
WebTutor/
├── index.html            # Main entry point (Shell)
├── styles/
│   └── custom.css        # Animations, Scrollbars, Glassmorphism
├── scripts/
│   ├── app.js            # Core Logic (Router, Global State)
│   ├── data.js           # The "Database" (Course Content JSON)
│   ├── utils.js          # Helpers (Modals, Toasts, Events)
│   └── components/       # UI Components
│       ├── header.js     # Top Navigation
│       ├── sidebar.js    # Course Menu
│       ├── lessonView.js # Content Renderer & Quiz Logic
│       └── dashboard.js  # User Profile & Stats
```

### Code Logic Breakdown

#### 1. Global State Management (`app.js`)
- **`App.state`**: Holds the "Single Source of Truth" for the app.
    - `user`: Stores XP, Name, and Completed Modules.
    - `view`: Tracks the current page ('dashboard' or 'lesson').
- **`App.navigate()`**: Handles routing. It swaps the content inside `<div id="router-outlet">` without reloading the page.

#### 2. The Content Engine (`data.js`)
- A large JSON-like structure (`window.CourseData`) contains all the syllabus data.
- **Why?**: This makes adding new courses easy. Just add an object to this file, and the Sidebar and Lessons update automatically.

#### 3. Component Rendering
- **`LessonViewComponent.render()`**: correctly takes a module ID, finds the data, and generates the HTML string for the lesson.
- It injects the "Explanation", sets up the "Code Editor" with the example code, and prepares the "Quiz" button.

#### 4. Event System (`utils.js`)
- Uses a simple **Pub/Sub (Publish/Subscribe)** pattern.
- Example: When a user finishes a quiz, `LessonView` emits a `module-complete` event. `App.js` listens for this and saves the progress.

---

## 📖 How to Use

1.  **Start**: Open `index.html` in any browser.
2.  **Onboarding**: You will see a Welcome Modal. Click "Start Learning".
3.  **Navigate**: Use the **Sidebar** to choose a topic (e.g., *HTML > Introduction*).
4.  **Learn**: Read the explanation and look at the code examples.
5.  **Practice**:
    - Type code in the **Editor** on the right.
    - Click **"Run Code"** to see the output in the simulated console.
6.  **Test**: Click **"Take Quiz 📝"** at the bottom.
    - Answer questions correctly to earn XP and mark the module as "Completed" ✅.
7.  **Track**: Go to the **Dashboard** to see your Total XP and Badges.

---

## 🎨 Customization

- **Themes**: Click the 🌙/☀️ icon in the header to toggle themes.
- **Data**: Edit `scripts/data.js` to change lesson text, code examples, or quiz questions.
