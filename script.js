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
