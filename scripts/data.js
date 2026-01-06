/**
 * Course Syllabus and Content Data
 * Populates the Sidebar and Main Content Area
 */
window.CourseData = [
    {
        id: 'html',
        title: 'HTML',
        icon: '🌐',
        color: 'text-orange-500',
        modules: [
            {
                id: 'html-intro',
                title: 'Introduction',
                isLocked: false,
                content: {
                    explanation: `
                        <h3>What is HTML?</h3>
                        <p>HTML stands for <strong>H</strong>yper<strong>T</strong>ext <strong>M</strong>arkup <strong>L</strong>anguage. It is the code that allows us to create websites.</p>
                        <p>Think of HTML as the <strong>skeleton</strong> of a webpage. It gives the page its structure.</p>
                        <ul>
                            <li><strong>HyperText</strong>: Links that connect web pages.</li>
                            <li><strong>Markup</strong>: Text wrapped in "tags" to tell the browser how to display it.</li>
                        </ul>
                    `,
                    example: `<!-- This is a standard HTML Structure -->
<!DOCTYPE html>
<html>
    <body>
        <h1>Hello World!</h1>
        <p>I am learning HTML.</p>
    </body>
</html>`,
                    quiz: [
                        { q: "What does HTML stand for?", options: ["High Text Maker Language", "HyperText Markup Language", "Hyper Tool Markup Language"], correct: 1 },
                        { q: "HTML is considered the ____ of a webpage?", options: ["Skin", "Brain", "Skeleton"], correct: 2 }
                    ]
                }
            },
            {
                id: 'html-basic',
                title: 'Basic Tags',
                isLocked: false,
                content: {
                    explanation: `
                        <h3>Common HTML Tags</h3>
                        <p>We use tags to create elements. Most tags have a starting tag <code>&lt;tag&gt;</code> and an ending tag <code>&lt;/tag&gt;</code>.</p>
                        <ul>
                            <li><code>&lt;h1&gt;</code>: The main heading (Largest).</li>
                            <li><code>&lt;p&gt;</code>: A paragraph of text.</li>
                            <li><code>&lt;button&gt;</code>: A clickable button.</li>
                        </ul>
                    `,
                    example: `<h1>My Website</h1>
<p>Welcome to my page. This is a paragraph.</p>
<button>Click Me</button>`,
                    quiz: [
                        { q: "Which tag creates a paragraph?", options: ["<para>", "<p>", "<text>"], correct: 1 },
                        { q: "Which tag is the largest heading?", options: ["<h1>", "<h6>", "<head>"], correct: 0 }
                    ]
                }
            },
            {
                id: 'html-forms',
                title: 'Forms',
                isLocked: false,
                content: {
                    explanation: `
                        <h3>HTML Forms</h3>
                        <p>Forms allow users to send data to a website (like logging in).</p>
                        <p>We use the <code>&lt;input&gt;</code> tag to create fields.</p>
                        <ul>
                            <li><code>type="text"</code>: A normal text box.</li>
                            <li><code>type="password"</code>: Hides the text (dots).</li>
                            <li><code>type="date"</code>: A date picker.</li>
                        </ul>
                    `,
                    example: `<label>Username:</label>
<input type="text" placeholder="Enter name">

<br><br>

<label>Password:</label>
<input type="password" placeholder="Secret code">`,
                    quiz: [
                        { q: "Which attribute sets the input type?", options: ["style", "class", "type"], correct: 2 },
                        { q: "What tag is used to label an input?", options: ["<label>", "<name>", "<title>"], correct: 0 }
                    ]
                }
            },
            {
                id: 'html-tables',
                title: 'Tables',
                isLocked: false,
                content: {
                    explanation: `
                        <h3>Tables</h3>
                        <p>Tables organize data into rows and columns, just like Excel.</p>
                        <ul>
                            <li><code>&lt;table&gt;</code>: The wrapper.</li>
                            <li><code>&lt;tr&gt;</code>: Table Row.</li>
                            <li><code>&lt;td&gt;</code>: Table Data (The actual cell).</li>
                        </ul>
                    `,
                    example: `<table border="1">
  <tr>
    <td>Row 1, Cell 1</td>
    <td>Row 1, Cell 2</td>
  </tr>
  <tr>
    <td>Row 2, Cell 1</td>
    <td>Row 2, Cell 2</td>
  </tr>
</table>`,
                    quiz: [
                        { q: "Which tag creates a new row?", options: ["<td>", "<tr>", "<row>"], correct: 1 }
                    ]
                }
            },
            {
                id: 'html-media',
                title: 'Media',
                isLocked: false,
                content: {
                    explanation: `
                        <h3>Images & Links</h3>
                        <p>Websites need pictures and links to be interesting!</p>
                        <p><strong>Images</strong>: Use the <code>&lt;img&gt;</code> tag. It needs a <code>src</code> (source) to know which image to show.</p>
                        <p><strong>Links</strong>: Use the <code>&lt;a&gt;</code> tag. It needs an <code>href</code> to know where to go.</p>
                    `,
                    example: `<!-- Image -->
<img src="https://via.placeholder.com/100" alt="Cube">

<!-- Link -->
<p>
  Visit <a href="#">Google</a>
</p>`,
                    quiz: [
                        { q: "Which attribute defines the image source?", options: ["href", "link", "src"], correct: 2 },
                        { q: "What tag creates a link?", options: ["<a>", "<link>", "<href>"], correct: 0 }
                    ]
                }
            }
        ]
    },
    {
        id: 'css',
        title: 'CSS',
        icon: '🎨',
        color: 'text-blue-500',
        modules: [
            {
                id: 'css-colors',
                title: 'Colors',
                isLocked: false,
                content: {
                    explanation: `
                        <h3>CSS Colors</h3>
                        <p>CSS allows us to change the color of text and backgrounds.</p>
                        <ul>
                            <li><strong>color</strong>: Changes text color.</li>
                            <li><strong>background-color</strong>: Changes the background.</li>
                        </ul>
                        <p>You can use names like <code>red</code>, <code>blue</code>, or Hex codes like <code>#ff0000</code>.</p>
                    `,
                    example: `/* Simulating CSS in JS for the demo */
const style = document.createElement('style');
style.innerHTML = \`
  .my-text { color: blue; font-size: 20px; }
  .my-box { background-color: gold; padding: 10px; }
\`;
document.head.appendChild(style);

document.body.innerHTML += \`
  <div class="my-box">
    <p class="my-text">Hello Blue Text!</p>
  </div>
\`;`,
                    quiz: [
                        { q: "Which property changes text color?", options: ["text-color", "color", "font-color"], correct: 1 }
                    ]
                }
            },
            {
                id: 'css-box-model',
                title: 'Box Model',
                isLocked: false,
                content: {
                    explanation: `
                        <h3>The Box Model</h3>
                        <p>Everything in CSS is a box. It has 4 layers:</p>
                        <ol>
                            <li><strong>Content</strong>: The text or image inside.</li>
                            <li><strong>Padding</strong>: Space *inside* the border.</li>
                            <li><strong>Border</strong>: The line around the box.</li>
                            <li><strong>Margin</strong>: Space *outside* the box (pushing other things away).</li>
                        </ol>
                    `,
                    example: `// Inspect this element in your mind
const box = \`
  <div style="
    border: 5px solid red;
    padding: 20px;
    margin: 20px;
    background: #ddd;
  ">
    I am Content
  </div>
\`;
document.body.innerHTML += box;`,
                    quiz: [
                        { q: "Which is the outermost layer?", options: ["Padding", "Border", "Margin"], correct: 2 }
                    ]
                }
            },
            {
                id: 'css-flexbox',
                title: 'Flexbox',
                isLocked: false,
                content: {
                    explanation: `
                        <h3>Flexbox</h3>
                        <p>Flexbox is a layout mode that makes it easy to align things side-by-side or center them.</p>
                        <p>Set <code>display: flex;</code> on the parent container.</p>
                    `,
                    example: `const flex = \`
  <div style="display: flex; gap: 10px;">
    <div style="background: red; padding: 10px;">Item 1</div>
    <div style="background: blue; padding: 10px;">Item 2</div>
    <div style="background: green; padding: 10px;">Item 3</div>
  </div>
\`;
document.body.innerHTML += flex;`,
                    quiz: [
                        { q: "What property turns on Flexbox?", options: ["display: flex", "position: flex", "float: left"], correct: 0 }
                    ]
                }
            },
            {
                id: 'css-grid',
                title: 'Grid',
                isLocked: false,
                content: {
                    explanation: `
                        <h3>CSS Grid</h3>
                        <p>Grid is like a more powerful table layout. It works in 2D (rows and columns).</p>
                        <p>Use <code>display: grid;</code> and <code>grid-template-columns</code>.</p>
                    `,
                    example: `const grid = \`
  <div style="display: grid; grid-template-columns: 100px 100px; gap: 5px;">
    <div style="background: #ccc">1</div>
    <div style="background: #ccc">2</div>
    <div style="background: #ccc">3</div>
    <div style="background: #ccc">4</div>
  </div>
\`;
document.body.innerHTML += grid;`,
                    quiz: [
                        { q: "Grid is best for...?", options: ["1D layout", "2D layout", "Text color"], correct: 1 }
                    ]
                }
            },
            {
                id: 'css-responsive',
                title: 'Responsive Design',
                isLocked: false,
                content: {
                    explanation: `
                        <h3>Responsive Design</h3>
                        <p>Making websites look good on Phones, Tablets, and Desktops.</p>
                        <p>We use <strong>Media Queries</strong> <code>@media</code> to change styles based on screen size.</p>
                    `,
                    example: `const css = \`
  <style>
    .responsive-box { background: red; width: 100px; height: 100px; }
    @media (max-width: 600px) {
      .responsive-box { background: blue; }
    }
  </style>
  <div class="responsive-box">Resize window to see me change color!</div>
\`;
document.body.innerHTML += css;`,
                    quiz: [
                        { q: "What allows CSS to detect screen size?", options: ["Sensors", "Media Queries", "JavaScript"], correct: 1 }
                    ]
                }
            }
        ]
    },
    {
        id: 'js',
        title: 'JavaScript',
        icon: '⚡',
        color: 'text-yellow-400',
        isOpen: true,
        modules: [
            {
                id: 'js-variables',
                title: 'Variables',
                desc: 'Storing Data',
                isLocked: false,
                content: {
                    explanation: `
                        <h3>Variables</h3>
                        <p>Variables are like containers. They hold information for us.</p>
                        <ul>
                            <li><code>let</code>: Creates a container we can change later.</li>
                            <li><code>const</code>: Creates a container that CANNOT change (Constant).</li>
                        </ul>
                    `,
                    example: `let name = "WebTutor";
console.log("Original:", name);

name = "Student";
console.log("Changed:", name);

const pi = 3.14;
// pi = 5; // This would be an error!
console.log("PI:", pi);`,
                    quiz: [
                        { q: "Which variable cannot be updated?", options: ["var", "let", "const"], correct: 2 },
                        { q: "Used to print to the console?", options: ["print()", "console.log()", "log.this()"], correct: 1 }
                    ]
                }
            },
            {
                id: 'js-datatypes',
                title: 'Data Types',
                desc: 'Types of Info',
                isLocked: false,
                content: {
                    explanation: `
                        <h3>Data Types</h3>
                        <p>JavaScript needs to know what *kind* of data you are using.</p>
                        <ul>
                            <li><strong>String</strong>: Text wrapped in quotes ("Hello")</li>
                            <li><strong>Number</strong>: Math numbers (10, 3.5)</li>
                            <li><strong>Boolean</strong>: True or False (Yes/No)</li>
                        </ul>
                    `,
                    example: `let text = "Hello";
let number = 100;
let isLearning = true;

console.log(typeof text);
console.log(typeof number);
console.log(typeof isLearning);`,
                    quiz: [
                        { q: "What type is '500' (with quotes)?", options: ["Number", "String", "Boolean"], correct: 1 }
                    ]
                }
            },
            {
                id: 'js-operators',
                title: 'Operators',
                desc: 'Math & Logic',
                isLocked: false,
                content: {
                    explanation: `
                        <h3>Operators</h3>
                        <p>Symbols that do work for us.</p>
                        <ul>
                            <li><strong>Math</strong>: + (Plus), - (Minus), * (Multiply), / (Divide).</li>
                            <li><strong>Comparison</strong>: > (Greater than), < (Less than), === (Equals).</li>
                        </ul>
                    `,
                    example: `let apples = 5;
let oranges = 3;

let total = apples + oranges;
console.log("Total Fruits:", total);

let isMore = apples > oranges;
console.log("More apples?", isMore);`,
                    quiz: [
                        { q: "What is 10 * 2?", options: ["20", "12", "5"], correct: 0 },
                        { q: "Symbol for 'Strict Equal'?", options: ["=", "==", "==="], correct: 2 }
                    ]
                }
            },
            {
                id: 'js-conditions',
                title: 'Conditions (If/Else)',
                desc: 'Making Decisions',
                isLocked: false,
                content: {
                    explanation: `
                        <h3>If / Else</h3>
                        <p>Code needs to make decisions. "If this is true, do that. Otherwise, do something else."</p>
                    `,
                    example: `let age = 18;

if (age >= 18) {
    console.log("You can vote!");
} else {
    console.log("Too young to vote.");
}`,
                    quiz: [
                        { q: "If the condition is FALSE, which block runs?", options: ["if", "else", "none"], correct: 1 }
                    ]
                }
            },
            {
                id: 'js-loops',
                title: 'Loops',
                desc: 'Repeating things',
                isLocked: false,
                content: {
                    explanation: `
                        <h3>Loops (For Loop)</h3>
                        <p>Don't repeat yourself! Use loops to run code multiple times.</p>
                        <p>Syntax: <code>for (start; end; change)</code></p>
                    `,
                    example: `// Count from 1 to 5
for (let i = 1; i <= 5; i++) {
    console.log("Count:", i);
}`,
                    quiz: [
                        { q: "What happens if you never stop the loop?", options: ["It crashes (Infinite Loop)", "It stops automatically"], correct: 0 }
                    ]
                }
            },
            {
                id: 'js-arrays',
                title: 'Arrays',
                desc: 'Lists of Data',
                isLocked: false,
                content: {
                    explanation: `
                        <h3>Arrays</h3>
                        <p>An Array is a list of items stored in one variable. We use square brackets <code>[]</code>.</p>
                        <p>We access items using their index (starting at 0).</p>
                    `,
                    example: `let fruits = ["Apple", "Banana", "Cherry"];

console.log(fruits[0]); // Apple
console.log(fruits[1]); // Banana

// Add one
fruits.push("Date");
console.log(fruits);`,
                    quiz: [
                        { q: "What is the index of the first item?", options: ["1", "0", "-1"], correct: 1 },
                        { q: "Method to add item to end?", options: ["push()", "add()", "plus()"], correct: 0 }
                    ]
                }
            },
            {
                id: 'js-objects',
                title: 'Objects',
                desc: 'Complex Data',
                isLocked: false,
                content: {
                    explanation: `
                        <h3>Objects</h3>
                        <p>Objects describe "things" using <strong>Key-Value</strong> pairs.</p>
                        <p>Example: A Car object has color (key) and red (value).</p>
                    `,
                    example: `let player = {
    name: "Mario",
    lives: 3,
    powerUp: "Mushroom"
};

console.log(player.name);
console.log("Lives:", player.lives);`,
                    quiz: [
                        { q: "Objects use which brackets?", options: ["[]", "{}", "()"], correct: 1 }
                    ]
                }
            },
            {
                id: 'js-functions',
                title: 'Functions',
                desc: 'Reusable Actions',
                isLocked: false,
                content: {
                    explanation: `
                        <h3>Functions</h3>
                        <p>A function is a block of code designed to perform a particular task. You can "call" it whenever you need it.</p>
                    `,
                    example: `function sayHello(name) {
    return "Hello " + name + "!";
}

let msg1 = sayHello("Alice");
let msg2 = sayHello("Bob");

console.log(msg1);
console.log(msg2);`,
                    quiz: [
                        { q: "To execute a function, we ___ it?", options: ["Call", "Build", "Type"], correct: 0 }
                    ]
                }
            },
            {
                id: 'js-es6',
                title: 'ES6+ Modern JS',
                desc: 'New Features',
                isLocked: false,
                content: {
                    explanation: `
                        <h3>Arrow Functions</h3>
                        <p>A shorter way to write functions using <code>=></code>.</p>
                        <h3>Template Literals</h3>
                        <p>Easier string combining using backticks \`\`.</p>
                    `,
                    example: `// Arrow Function
const add = (a, b) => a + b;
console.log(add(5, 5));

// Template Literal
let user = "John";
console.log(\`Welcome back, \${user}!\`);`,
                    quiz: [
                        { q: "Symbol for Arrow Function?", options: ["->", "=>", ">>"], correct: 1 }
                    ]
                }
            }
        ]
    },
    {
        id: 'react',
        title: 'React',
        icon: '⚛️',
        color: 'text-cyan-400',
        modules: [
            {
                id: 'react-components',
                title: 'Components',
                isLocked: false,
                content: {
                    explanation: `
                        <h3>Components</h3>
                        <p>React is all about Components. A component is a small, reusable piece of UI (like a Button or a Navbar).</p>
                        <p>It's just a Function that returns HTML (JSX).</p>
                    `,
                    example: `function MyButton() {
    return <button>Click Me</button>;
}

console.log("Components are reusable!");`,
                    quiz: [
                        { q: "A React Component is a...?", options: ["CSS File", "JavaScript Function", "Database"], correct: 1 }
                    ]
                }
            },
            {
                id: 'react-state',
                title: 'State',
                isLocked: false,
                content: {
                    explanation: `
                        <h3>State</h3>
                        <p>State is the "memory" of a component. If data changes (like a counter going up), React updates the screen automatically.</p>
                        <p>We use <code>useState</code> hook.</p>
                    `,
                    example: `// const [count, setCount] = useState(0);

console.log("If state changes, UI re-renders.");`,
                    quiz: [
                        { q: "What hook creates state?", options: ["useMemory", "useState", "useData"], correct: 1 }
                    ]
                }
            },
            {
                id: 'react-hooks',
                title: 'Hooks',
                isLocked: false,
                content: {
                    explanation: `
                        <h3>Hooks</h3>
                        <p>Special functions that let you "hook into" React features.</p>
                        <p><code>useEffect</code> is used for running code *after* the component loads (like fetching data).</p>
                    `,
                    example: `console.log("useEffect runs after render");`,
                    quiz: [
                        { q: "Hook for side effects?", options: ["useEffect", "useSide", "useAfter"], correct: 0 }
                    ]
                }
            }
        ]
    },
    {
        id: 'mern',
        title: 'MERN Stack',
        icon: '🍃',
        color: 'text-green-500',
        modules: [
            {
                id: 'mern-intro',
                title: 'MERN Overview',
                isLocked: false,
                content: {
                    explanation: `
                        <h3>What is MERN?</h3>
                        <p>It stands for 4 technologies working together:</p>
                        <ul>
                            <li><strong>M</strong>ongoDB (Database)</li>
                            <li><strong>E</strong>xpress (Backend Framework)</li>
                            <li><strong>R</strong>eact (Frontend)</li>
                            <li><strong>N</strong>ode.js (Server Environment)</li>
                        </ul>
                    `,
                    example: `console.log("Full Stack JavaScript!");`,
                    quiz: [
                        { q: "Which letter represents the Frontend?", options: ["M", "E", "R"], correct: 2 }
                    ]
                }
            }
        ]
    },
    {
        id: 'projects',
        title: 'Projects',
        icon: '🚀',
        color: 'text-purple-500',
        modules: [
            {
                id: 'proj-calc',
                title: 'Calculator App',
                isLocked: false,
                content: {
                    explanation: `<h3>Project Idea</h3><p>Build a calculator using JS functions for Add, Subtract, etc.</p>`,
                    example: `const add = (a,b) => a+b; console.log(add(2,2));`,
                    quiz: [{ q: "Best data type for prices?", options: ["String", "Number"], correct: 1 }]
                }
            },
            {
                id: 'proj-todo',
                title: 'To-Do List',
                isLocked: false,
                content: {
                    explanation: `<h3>Project Idea</h3><p>A list where you can Add tasks and Delete them.</p>`,
                    example: `let tasks = ["Sleep", "Code"];`,
                    quiz: [{ q: "Arrays are good for lists?", options: ["Yes", "No"], correct: 0 }]
                }
            }
        ]
    }
];
