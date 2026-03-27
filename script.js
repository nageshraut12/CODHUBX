const platforms = [
    { name: "Visual Studio Code", category: "IDE", link: "https://code.visualstudio.com/" },
    { name: "Android Studio", category: "IDE", link: "https://developer.android.com/studio" },
    { name: "PyCharm", category: "IDE", link: "https://www.jetbrains.com/pycharm/" },
    { name: "IntelliJ IDEA", category: "IDE", link: "https://www.jetbrains.com/idea/" },
    { name: "Eclipse", category: "IDE", link: "https://www.eclipse.org/" },

    { name: "GCC Compiler", category: "Compiler", link: "https://gcc.gnu.org/" },
    { name: "Clang", category: "Compiler", link: "https://clang.llvm.org/" },
    { name: "JDK", category: "Compiler", link: "https://www.oracle.com/java/" },

    { name: "React", category: "Framework", link: "https://react.dev/" },
    { name: "Angular", category: "Framework", link: "https://angular.io/" },
    { name: "Vue.js", category: "Framework", link: "https://vuejs.org/" },
    { name: "Django", category: "Framework", link: "https://www.djangoproject.com/" },
    { name: "Flask", category: "Framework", link: "https://flask.palletsprojects.com/" },

    { name: "Docker", category: "DevOps", link: "https://www.docker.com/" },
    { name: "Kubernetes", category: "DevOps", link: "https://kubernetes.io/" },
    { name: "Jenkins", category: "DevOps", link: "https://www.jenkins.io/" },

    { name: "MySQL", category: "Database", link: "https://www.mysql.com/" },
    { name: "MongoDB", category: "Database", link: "https://www.mongodb.com/" },
    { name: "PostgreSQL", category: "Database", link: "https://www.postgresql.org/" },

    { name: "Selenium", category: "Testing", link: "https://www.selenium.dev/" },
    { name: "JMeter", category: "Testing", link: "https://jmeter.apache.org/" },

    { name: "Figma", category: "Design", link: "https://www.figma.com/" },
    { name: "Adobe XD", category: "Design", link: "https://www.adobe.com/products/xd.html" },
    // ===============================
// CodeHubX - Platforms Database
// ===============================

const platforms = [

/* ===============================
   IDEs & Code Editors
================================ */

{
  name: "Visual Studio Code",
  category: "IDE / Code Editor",
  about: "Free, lightweight code editor by Microsoft for multiple languages.",
  steps: "Download → Install → Add extensions → Start coding",
  website: "https://code.visualstudio.com/",
  download: "https://code.visualstudio.com/download",
  compiler: "Not Available"
},
{
  name: "Visual Studio",
  category: "Full IDE",
  about: "Powerful IDE by Microsoft for .NET, C++, and enterprise apps.",
  steps: "Download → Install workloads → Create project → Run",
  website: "https://visualstudio.microsoft.com/",
  download: "https://visualstudio.microsoft.com/downloads/",
  compiler: "Not Available"
},
{
  name: "PyCharm",
  category: "Python IDE",
  about: "Professional Python IDE by JetBrains.",
  steps: "Install → Create Python project → Run",
  website: "https://www.jetbrains.com/pycharm/",
  download: "https://www.jetbrains.com/pycharm/download/",
  compiler: "Not Available"
},
{
  name: "Android Studio",
  category: "Mobile IDE",
  about: "Official Android development IDE by Google.",
  steps: "Install → Setup SDK → Create app → Run emulator",
  website: "https://developer.android.com/studio",
  download: "https://developer.android.com/studio",
  compiler: "Not Available"
},
{
  name: "IntelliJ IDEA",
  category: "Java IDE",
  about: "Advanced Java and JVM IDE by JetBrains.",
  steps: "Install → Create project → Run",
  website: "https://www.jetbrains.com/idea/",
  download: "https://www.jetbrains.com/idea/download/",
  compiler: "Not Available"
},
{
  name: "Eclipse IDE",
  category: "Java IDE",
  about: "Open-source IDE mainly used for Java.",
  steps: "Download → Setup workspace → Run",
  website: "https://www.eclipse.org/",
  download: "https://www.eclipse.org/downloads/",
  compiler: "Not Available"
},
{
  name: "NetBeans",
  category: "IDE",
  about: "Apache NetBeans for Java, PHP, and web.",
  steps: "Install → New project → Run",
  website: "https://netbeans.apache.org/",
  download: "https://netbeans.apache.org/download/",
  compiler: "Not Available"
},
{
  name: "Xcode",
  category: "macOS IDE",
  about: "Apple IDE for iOS and macOS development.",
  steps: "Install → Create project → Run simulator",
  website: "https://developer.apple.com/xcode/",
  download: "https://developer.apple.com/xcode/",
  compiler: "Not Available"
},
{
  name: "WebStorm",
  category: "Web IDE",
  about: "JavaScript-focused IDE by JetBrains.",
  steps: "Install → Open project → Code",
  website: "https://www.jetbrains.com/webstorm/",
  download: "https://www.jetbrains.com/webstorm/download/",
  compiler: "Not Available"
},
{
  name: "Sublime Text",
  category: "Code Editor",
  about: "Fast and lightweight text editor.",
  steps: "Install → Open file → Code",
  website: "https://www.sublimetext.com/",
  download: "https://www.sublimetext.com/download",
  compiler: "Not Available"
},
{
  name: "Notepad++",
  category: "Code Editor",
  about: "Free source code editor for Windows.",
  steps: "Install → Open file → Code",
  website: "https://notepad-plus-plus.org/",
  download: "https://notepad-plus-plus.org/downloads/",
  compiler: "Not Available"
},
{
  name: "Atom",
  category: "Code Editor",
  about: "Hackable text editor by GitHub.",
  steps: "Install → Open folder → Code",
  website: "https://atom.io/",
  download: "https://atom.io/",
  compiler: "Not Available"
},

/* ===============================
   Online Compilers
================================ */

{
  name: "Replit",
  category: "Online Compiler",
  about: "Cloud-based online coding platform.",
  steps: "Open → Select language → Run code",
  website: "https://replit.com/",
  download: "Online Tool",
  compiler: "https://replit.com/"
},
{
  name: "Programiz Online Compiler",
  category: "Online Compiler",
  about: "Online compiler for Python, C, C++, Java.",
  steps: "Open → Write code → Run",
  website: "https://www.programiz.com/",
  download: "Online Tool",
  compiler: "https://www.programiz.com/python-programming/online-compiler/"
},
{
  name: "JDoodle",
  category: "Online Compiler",
  about: "Online compiler supporting multiple languages.",
  steps: "Open → Select language → Run",
  website: "https://www.jdoodle.com/",
  download: "Online Tool",
  compiler: "https://www.jdoodle.com/"
},
{
  name: "OneCompiler",
  category: "Online Compiler",
  about: "Online compiler for 60+ languages.",
  steps: "Open → Write code → Run",
  website: "https://onecompiler.com/",
  download: "Online Tool",
  compiler: "https://onecompiler.com/"
},

/* ===============================
   Programming Languages
================================ */

{
  name: "Python",
  category: "Programming Language",
  about: "High-level, beginner-friendly language.",
  steps: "Install → Write script → Run",
  website: "https://www.python.org/",
  download: "https://www.python.org/downloads/",
  compiler: "https://www.programiz.com/python-programming/online-compiler/"
},
{
  name: "Java",
  category: "Programming Language",
  about: "Object-oriented programming language.",
  steps: "Install JDK → Write program → Compile & Run",
  website: "https://www.oracle.com/java/",
  download: "https://www.oracle.com/java/technologies/downloads/",
  compiler: "https://onecompiler.com/java"
},
{
  name: "C",
  category: "Programming Language",
  about: "Procedural programming language.",
  steps: "Install compiler → Write code → Compile",
  website: "https://gcc.gnu.org/",
  download: "https://gcc.gnu.org/install/",
  compiler: "https://www.programiz.com/c-programming/online-compiler/"
},
{
  name: "C++",
  category: "Programming Language",
  about: "Object-oriented extension of C.",
  steps: "Install compiler → Write code → Compile",
  website: "https://isocpp.org/",
  download: "https://gcc.gnu.org/install/",
  compiler: "https://www.programiz.com/cpp-programming/online-compiler/"
},
{
  name: "JavaScript",
  category: "Programming Language",
  about: "Scripting language for web development.",
  steps: "Write JS → Run in browser or Node.js",
  website: "https://developer.mozilla.org/",
  download: "Included in browser",
  compiler: "https://onecompiler.com/javascript"
},

/* ===============================
   Frameworks & SDKs
================================ */

{
  name: "React",
  category: "Frontend Framework",
  about: "JavaScript library for building UI.",
  steps: "Install Node.js → Create app → Run",
  website: "https://reactjs.org/",
  download: "https://reactjs.org/",
  compiler: "https://codesandbox.io/"
},
{
  name: "Angular",
  category: "Frontend Framework",
  about: "Web application framework by Google.",
  steps: "Install Node → Create app → Run",
  website: "https://angular.io/",
  download: "https://angular.io/",
  compiler: "https://stackblitz.com/"
},
{
  name: "Django",
  category: "Backend Framework",
  about: "Python web framework.",
  steps: "Install Django → Create project → Run server",
  website: "https://www.djangoproject.com/",
  download: "https://www.djangoproject.com/start/",
  compiler: "Not Available"
},
{
  name: "Spring Boot",
  category: "Backend Framework",
  about: "Java-based backend framework.",
  steps: "Create project → Run application",
  website: "https://spring.io/",
  download: "https://spring.io/projects/spring-boot",
  compiler: "Not Available"
},

/* ===============================
   Version Control
================================ */

{
  name: "Git",
  category: "Version Control",
  about: "Distributed version control system.",
  steps: "Install → git init → commit → push",
  website: "https://git-scm.com/",
  download: "https://git-scm.com/downloads",
  compiler: "Not Available"
},
{
  name: "GitHub Desktop",
  category: "Version Control Tool",
  about: "GUI tool for GitHub.",
  steps: "Install → Login → Clone repo",
  website: "https://desktop.github.com/",
  download: "https://desktop.github.com/",
  compiler: "Not Available"
},

/* ===============================
   DevOps & Tools
================================ */

{
  name: "Docker",
  category: "DevOps Tool",
  about: "Containerization platform.",
  steps: "Install → Pull image → Run container",
  website: "https://www.docker.com/",
  download: "https://www.docker.com/products/docker-desktop",
  compiler: "Not Available"
},
{
  name: "Postman",
  category: "API Tool",
  about: "API testing tool.",
  steps: "Install → Create request → Send",
  website: "https://www.postman.com/",
  download: "https://www.postman.com/downloads/",
  compiler: "Not Available"
}

];

// ===============================
// End of CodeHubX Platforms List
// ===============================const platforms = [
    { name: "Visual Studio Code", category: "IDE", link: "https://code.visualstudio.com/" },
    { name: "Android Studio", category: "IDE", link: "https://developer.android.com/studio" },
    { name: "PyCharm", category: "IDE", link: "https://www.jetbrains.com/pycharm/" },
    { name: "IntelliJ IDEA", category: "IDE", link: "https://www.jetbrains.com/idea/" },
    { name: "Eclipse", category: "IDE", link: "https://www.eclipse.org/" },

    { name: "GCC Compiler", category: "Compiler", link: "https://gcc.gnu.org/" },
    { name: "Clang", category: "Compiler", link: "https://clang.llvm.org/" },
    { name: "JDK", category: "Compiler", link: "https://www.oracle.com/java/" },

    { name: "React", category: "Framework", link: "https://react.dev/" },
    { name: "Angular", category: "Framework", link: "https://angular.io/" },
    { name: "Vue.js", category: "Framework", link: "https://vuejs.org/" },
    { name: "Django", category: "Framework", link: "https://www.djangoproject.com/" },
    { name: "Flask", category: "Framework", link: "https://flask.palletsprojects.com/" },

    { name: "Docker", category: "DevOps", link: "https://www.docker.com/" },
    { name: "Kubernetes", category: "DevOps", link: "https://kubernetes.io/" },
    { name: "Jenkins", category: "DevOps", link: "https://www.jenkins.io/" },

    { name: "MySQL", category: "Database", link: "https://www.mysql.com/" },
    { name: "MongoDB", category: "Database", link: "https://www.mongodb.com/" },
    { name: "PostgreSQL", category: "Database", link: "https://www.postgresql.org/" },

    { name: "Selenium", category: "Testing", link: "https://www.selenium.dev/" },
    { name: "JMeter", category: "Testing", link: "https://jmeter.apache.org/" },

    { name: "Figma", category: "Design", link: "https://www.figma.com/" },
    { name: "Adobe XD", category: "Design", link: "https://www.adobe.com/products/xd.html" },

    // 👉 Continue adding until 100 (same format)
];

const container = document.getElementById("platformContainer");

function displayPlatforms(data) {
    container.innerHTML = "";
    data.forEach(p => {
        container.innerHTML += `
            <div class="card">
                <h3>${p.name}</h3>
                <p>Category: ${p.category}</p>
                <a href="${p.link}" target="_blank">Download</a>
            </div>
        `;
    });
}

function searchPlatform() {
    const text = document.getElementById("searchBox").value.toLowerCase();
    const filtered = platforms.filter(p =>
        p.name.toLowerCase().includes(text)
    );
    displayPlatforms(filtered);
}

function filterCategory() {
    const cat = document.getElementById("categoryFilter").value;
    if (cat === "all") {
        displayPlatforms(platforms);
    } else {
        displayPlatforms(platforms.filter(p => p.category === cat));
    }
}

displayPlatforms(platforms);{
  name: "Postman",
  category: "API Tool",
  about: "API testing and development tool.",
  steps: "Install → Create request → Send → Analyze response",
  website: "https://www.postman.com/",
  download: "https://www.postman.com/downloads/",
  compiler: "Not Available"
},
{
  name: "Docker Desktop",
  category: "DevOps Tool",
  about: "Platform for containerized application development.",
  steps: "Install → Pull image → Run container",
  website: "https://www.docker.com/",
  download: "https://www.docker.com/products/docker-desktop",
  compiler: "Not Available"
}

    // 👉 Continue adding until 100 (same format)
];

const container = document.getElementById("platformContainer");

function displayPlatforms(data) {
    container.innerHTML = "";
    data.forEach(p => {
        container.innerHTML += `
            <div class="card">
                <h3>${p.name}</h3>
                <p>Category: ${p.category}</p>
                <a href="${p.link}" target="_blank">Download</a>
            </div>
        `;
    });
}

function searchPlatform() {
    const text = document.getElementById("searchBox").value.toLowerCase();
    const filtered = platforms.filter(p =>
        p.name.toLowerCase().includes(text)
    );
    displayPlatforms(filtered);
}

function filterCategory() {
    const cat = document.getElementById("categoryFilter").value;
    if (cat === "all") {
        displayPlatforms(platforms);
    } else {
        displayPlatforms(platforms.filter(p => p.category === cat));
    }
}

displayPlatforms(platforms);
