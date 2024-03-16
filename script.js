// Number of dots you want to generate
const numDots = 100;

// Function to generate random integer between min and max (inclusive)
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Get the home section
const homeSection = document.querySelector('#home');

// Calculate the triangular region on the left side
const leftWidth = homeSection.offsetWidth * 0.3; // Adjust the width of the left region as needed
const leftHeight = homeSection.offsetHeight;

// Calculate the central region to exclude
const centralWidth = homeSection.offsetWidth * 0.4; // Adjust the width of the central region as needed
const centralHeight = homeSection.offsetHeight * 0.4; // Adjust the height of the central region as needed
const centralTop = (homeSection.offsetHeight - centralHeight) / 2;
const centralLeft = (homeSection.offsetWidth - centralWidth) / 2;

// Calculate the top region to exclude
const topHeight = homeSection.offsetHeight * 0.2; // Adjust the height of the top region as needed

// Generate and append random dots to the home section
for (let i = 0; i < numDots; i++) {
    const dot = document.createElement('div');
    dot.classList.add('dot');

    let randomX, randomY, dotSize;

    // Generate random positions
    if (Math.random() < 0.5) {
        // Left side (triangular pattern)
        randomX = getRandomInt(0, leftWidth);
        randomY = getRandomInt(0, leftHeight - randomX);
    } else {
        // Right side (random distribution)
        randomX = getRandomInt(leftWidth, homeSection.offsetWidth);
        randomY = getRandomInt(0, homeSection.offsetHeight);
    }

    // Check if the random position falls within the central or top region, if so, try again
    if ((randomX >= centralLeft && randomX <= centralLeft + centralWidth &&
        randomY >= centralTop && randomY <= centralTop + centralHeight) ||
        randomY <= topHeight) {
        i--;
        continue;
    }

    dot.style.left = `${randomX}px`;
    dot.style.top = `${randomY}px`;

    // Generate random dot size (1: normal, 2: medium, 3: small)
    const randomSize = getRandomInt(1, 3); 
    if (randomSize === 1) {
        dotSize = '10px';
    } else if (randomSize === 2) {
        dotSize = '8px'; // 5px smaller than normal
    } else {
        dotSize = '6px'; // 10px smaller than normal
    }
    dot.style.width = dotSize;
    dot.style.height = dotSize;

    const randomColor = getRandomInt(1, 3); // Generate random color (1: blue, 2: orange, 3: green)
    dot.classList.add(randomColor === 1 ? 'blue' : randomColor === 2 ? 'orange' : 'green');
    homeSection.appendChild(dot);
}



document.addEventListener("DOMContentLoaded", function() {
    // Get all anchor links with hash (#) within the document
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    // Loop through each anchor link
    anchorLinks.forEach(function(anchorLink) {
        // Add click event listener to each anchor link
        anchorLink.addEventListener("click", function(event) {
            // Prevent default behavior of anchor link
            event.preventDefault();
            
            // Get the target element's ID from the anchor link's href attribute
            const targetId = this.getAttribute("href").substring(1);
            
            // Find the target element by its ID
            const targetElement = document.getElementById(targetId);
            
            // If the target element exists
            if (targetElement) {
                // Calculate the offset top of the target element
                const offsetTop = targetElement.offsetTop;
                
                // Scroll smoothly to the target element
                window.scrollTo({
                    top: offsetTop,
                    behavior: "smooth"
                });
            }
        });
    });
});

const box = document.getElementById('box');

const texts = [
    // Frontend Frameworks
    "React", "Vue.js", "Angular", "Svelte", "Ember.js", "Backbone.js", "Meteor.js", "Next.js", "Nuxt.js", "Gatsby.js", "Quasar Framework", "Ionic Framework", "Alpine.js", "Stimulus", "Riot.js", "Mithril.js", "Aurelia", "Polymer", "Marko", "Elm", "Riot.js", "Stencil", "Sapper", "Aurelia", "Preact", "Sapper", "D3.js", "Three.js", "Chart.js", "Anime.js", "GSAP", "Phaser", "Babylon.js", "Tone.js", "Framer Motion", "Velocity.js", "Fabric.js", "Paper.js", "Snap.svg", "Popmotion", "Recharts", "Victory", "ApexCharts", "Chartist", "Highcharts", "C3.js", "Toast UI Chart", "Vuetify", "Bootstrap", "Material-UI", "Bulma", "Tailwind CSS", "Foundation", "Semantic UI", "UIKit", "Ant Design", "Chakra UI", "Quasar Framework", "PrimeVue", "Onsen UI", "React Bootstrap", "Angular Material", "Carbon Design System", "Fluent UI", "Evergreen", "Blueprint", "Clarity Design System", "Elastic UI", "Shards", "Ratchet", "Ionic Framework", "Framework7", "jQuery Mobile", "Sencha Touch", "Onsen UI", "React Native", "Flutter", "Xamarin", "NativeScript", "Ionic Framework", "Apache Cordova", "Electron", "NW.js", "Proton Native", "React Native", "Xamarin.Forms", "Flutter", "Quasar Framework", "Vue Native", "NativeScript-Vue", "Onsen UI", "Titanium", "Corona", "PhoneGap", "Ionic Capacitor", "Appcelerator Titanium", "AppGyver", "Apache Cordova", "Sencha Touch", "Xamarin",
    // Other Frontend Libraries
    // Backend Frameworks
    "Express.js", "Django", "Flask", "Spring Boot", "Laravel", "Ruby on Rails", "ASP.NET Core", "Symfony", "NestJS", "Flask-RESTful", "Slim Framework", "Koa.js", "Rocket (Rust)", "Feathers.js", "FastAPI", "Hapi.js", "LoopBack", "AdonisJS", "Play Framework", "Micronaut", "Dropwizard", "Vert.x", "Actix (Rust)", "Akka", "Gin (Golang)", "Iris (Golang)", "Buffalo", "Revel", "Echo", "Chi", "Gorilla", "Rocket (Rust)", "Actix (Rust)", "Rocket (Rust)", "Akka", "Gin (Golang)", "Iris (Golang)", "Buffalo", "Revel", "Echo", "Chi", "Gorilla", "Spring Framework", "Quarkus", "Micronaut", "Dropwizard", "Vert.x", "Actix (Rust)", "Akka", "Gin (Golang)", "Iris (Golang)", "Buffalo", "Revel", "Echo", "Chi", "Gorilla", "Spring Framework", "Quarkus", "Micronaut", "Dropwizard", "Vert.x", "Actix (Rust)", "Akka", "Gin (Golang)", "Iris (Golang)", "Buffalo", "Revel", "Echo", "Chi", "Gorilla", "Spring Framework", "Quarkus", "Micronaut", "Dropwizard", "Vert.x", "Actix (Rust)", "Akka", "Gin (Golang)", "Iris (Golang)", "Buffalo", "Revel", "Echo", "Chi", "Gorilla", "Spring Framework", "Quarkus", "Micronaut",
    // Languages
    "JavaScript", "Python", "Java", "C++", "C", "C#", "Ruby", "Swift", "TypeScript", "PHP", "Go", "Rust", "Kotlin", "Scala", "Perl", "Lua", "Haskell", "Dart", "Objective-C", "F#", "SQL", "Shell", "HTML", "CSS", "Assembly", "Clojure", "Elixir", "Groovy", "Erlang", "R", "Julia", "Scheme", "OCaml", "VB.NET", "CoffeeScript", "Ada", "Prolog", "MATLAB", "D", "Racket", "Elm", "Bash", "Lisp", "FORTRAN", "COBOL", "Dylan", "Forth", "Pascal", "Ada", "Verilog", "VHDL", "ABAP", "ActionScript", "Apex", "AWK", "Batchfile", "Ceylon", "CMake", "ColdFusion", "Crystal", "Cypher", "Eiffel", "Elixir", "Emacs Lisp", "Erlang", "F#", "F*", "Forth", "Fortran", "FreeMarker", "GLSL", "Gosu", "Grammatical Framework", "Hack", "HTML", "Hugo", "Hy", "IDL", "Io", "Isabelle", "J", "Jasmin", "Jinja", "JSONiq", "Jupyter Notebook", "Kotlin", "LabVIEW", "Lex", "Limbo", "LilyPond", "Limbo", "LilyPond", "Limbo", "LilyPond", "Logos", "Logtalk", "M", "M4", "Makefile", "Mathematica", "Max", "MaxScript", "Mercury", "MiniD", "Mirah", "Monkey", "MTML", "NCL", "Nearley", "Nemerle", "NetLinx", "NetLinx+ERB", "NetLogo", "NewLisp", "Nim", "Nit", "Nix", "Nu", "Objective-C", "Objective-C++", "Objective-J", "OCaml", "Omgrofl", "ooc", "Opa", "OpenCL", "OpenEdge ABL", "OpenRC runscript", "OpenSCAD", "Oxygene", "Oz", "P4", "Pan", "Papyrus", "Parrot", "Parrot Assembly", "Parrot Internal Representation", "Pascal", "PAWN", "Pep8", "Perl", "PicoLisp", "PigLatin", "Pike", "PLpgSQL", "PLSQL", "PogoScript", "Pony", "PostScript", "POV-Ray SDL", "PowerBuilder", "PowerShell", "Processing", "Prolog", "Propeller Spin", "Pug", "Puppet", "PureBasic", "PureScript", "Python", "Q", "qml", "Quake", "Racket", "Ragel in Ruby Host", "RAML", "REALbasic", "Rebol", "Red", "Redcode", "Ren'Py", "Roff", "Rouge", "Ruby", "RUNOFF", "Rust", "Sage", "SaltStack", "SAS", "Sass", "Scala", "Scheme", "Scilab", "Self", "Shell", "Shen", "Slash", "Slice", "Smalltalk", "Smarty", "SMT", "Solidity", "SourcePawn", "SQF", "SQL", "SQLPL", "Squirrel", "Standard ML", "Stata", "SuperCollider", "Swift", "SystemVerilog", "TeX", "TI Program", "Tcl", "Tcsh", "Terra", "TeX", "Thrift", "TLA", "Turing", "TypeScript", "Unified Parallel C", "Unix Assembly", "Uno", "UnrealScript", "UrWeb", "Vala", "VCL", "Verilog", "VHDL", "Vim script", "Visual Basic", "Volt", "Vue", "wdl", "WebAssembly", "WebIDL", "wisp", "X10", "xBase", "XC", "Xojo", "XProc", "XQuery", "XS", "XSLT", "Xtend", "Yacc", "YAML", "YARA", "YASnippet", "ZAP", "Zeek", "ZenScript", "Zephir", "Zig", "ZIL", "Zimpl"
    
];

function createFloatingText() {
    const text = document.createElement('div');
    const randomText = texts[Math.floor(Math.random() * texts.length)];
    text.textContent = randomText;
    text.style.position = 'absolute';
    text.style.left = `${getRandomNumber(0, box.clientWidth - text.offsetWidth)}px`;
    text.style.top = `${getRandomNumber(0, box.clientHeight - text.offsetHeight)}px`;
    text.style.fontSize = `${getRandomNumber(5, 27)}px`;
    text.style.fontFamily = '"MuseoModerno", sans-serif;'; // You can add more font families if needed
    text.style.color = 'white';
    box.appendChild(text);

    // Animation: move text randomly within the box
    const animationTime = getRandomNumber(3000, 8000);
    const startX = parseFloat(text.style.left);
    const startY = parseFloat(text.style.top);
    const endX = getRandomNumber(0, box.clientWidth - text.offsetWidth);
    const endY = getRandomNumber(0, box.clientHeight - text.offsetHeight);
    const startTime = Date.now();
    const moveText = () => {
        const progress = Math.min((Date.now() - startTime) / animationTime, 1);
        const currentX = startX + (endX - startX) * progress;
        const currentY = startY + (endY - startY) * progress;
        text.style.left = `${currentX}px`;
        text.style.top = `${currentY}px`;
        if (progress < 1) {
            requestAnimationFrame(moveText);
        } else {
            box.removeChild(text);
        }
    };
    moveText();
}

// Generate a random number between min and max (inclusive)
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Create floating texts every 500 milliseconds
setInterval(createFloatingText, 500);


// Function to add fade-up animation when element enters the viewport
function fadeInWhenVisible(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-up');
            observer.unobserve(entry.target);
        }
    });
}

// Create an intersection observer instance
const observer = new IntersectionObserver(fadeInWhenVisible, {
    root: null,
    threshold: 0.2, // Trigger when 20% of the element is visible
});

// Select the elements to observe
const headlineTwo = document.querySelector('.headline-two');
const descriptionTwo = document.querySelector('.description-two');

// Observe the elements
if (headlineTwo) {
    observer.observe(headlineTwo);
}

if (descriptionTwo) {
    observer.observe(descriptionTwo);
}







function handleAnimation(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('initial-animation');
            gridObserver.unobserve(entry.target); // Stop observing once animation is applied
        }
    });
}

// Create a new observer for grid-box elements
const gridObserver = new IntersectionObserver(handleAnimation, { threshold: 0.5 });

// Select all grid-box elements
const gridBoxes = document.querySelectorAll('.grid-box');

// Observe each grid-box element
gridBoxes.forEach(gridBox => {
    gridObserver.observe(gridBox);
});

// Function to generate a random number within a range
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to shuffle an array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Array of photo URLs
const photos = [
    'batman.png',
    'rajus.png',
    'dj.png',
    'rizz.png.',
    'Untitled.jpg',
    'canvas.png'
];

// Shuffle the array of photo URLs
const shuffledPhotos = shuffleArray(photos);

// Get the "randomPhotos" container
const randomPhotosContainer = document.getElementById('randomPhotos');

// Append shuffled photos to the container
shuffledPhotos.forEach(photo => {
    const img = document.createElement('img');
    img.src = photo;
    img.style.width = '300px'; // Set width to 300px
    img.style.height = '200px'; // Set height to 100px
    randomPhotosContainer.appendChild(img);
});
