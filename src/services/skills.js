export const skills = {
   native: [
        {
            id: 1,
            title: "HTML5",
            img: "https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white",
            installLinux: "sudo apt install html5",
            installWindows: "choco install html5",
            required: "Navigateur web",
            exec: "open index.html"
        },
        {
            id: 2,
            title: "CSS3",
            img: "https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white",
            installLinux: "sudo apt install css3",
            installWindows: "choco install css3",
            required: "Navigateur web",
            exec: "open style.css"
        },
        {
            id: 3,
            title: "JavaScript",
            img: "https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black",
            installLinux: "sudo apt install nodejs npm",
            installWindows: "choco install nodejs",
            required: "Node.js",
            exec: "node app.js"
        },
        {
            id: 4,
            title: "Python",
            img: "https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white",
            installLinux: "sudo apt install python3 python3-pip",
            installWindows: "choco install python",
            required: "Python 3",
            exec: "python main.py"
        },
        {
            id: 5,
            title: "PHP",
            img: "https://img.shields.io/badge/PHP-777BB4?style=for-the-badge&logo=php&logoColor=white",
            installLinux: "sudo apt install php",
            installWindows: "choco install php",
            required: "PHP 8+",
            exec: "php index.php"
        },
        {
            id: 6,
            title: "Docker",
            img: "https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white",
            installLinux: "sudo apt install docker.io",
            installWindows: "choco install docker-desktop",
            required: "Docker Engine",
            exec: "docker compose up"
        }
    ],

    framework: [
        {
            category: "css",
            skills: [
                {
                    id: 7,
                    title: "Tailwind CSS",
                    img: "https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white",
                    installLinux: "npm install -D tailwindcss",
                    installWindows: "npm install -D tailwindcss",
                    required: "Node.js",
                    exec: "npx tailwindcss init"
                },
                {
                    id: 8,
                    title: "Bootstrap",
                    img: "https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white",
                    installLinux: "npm install bootstrap",
                    installWindows: "npm install bootstrap",
                    required: "Node.js",
                    exec: "npm run dev"
                },
                {
                    id: 9,
                    title: "Sass",
                    img: "https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white",
                    installLinux: "npm install -D sass",
                    installWindows: "npm install -D sass",
                    required: "Node.js",
                    exec: "sass style.scss style.css"
                }
            ]
        },
        {
            category: "js",
            skills: [
                {
                    id: 10,
                    title: "Vue.js",
                    img: "https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D",
                    installLinux: "npm create vue@latest",
                    installWindows: "npm create vue@latest",
                    required: "Node.js",
                    exec: "npm run dev"
                },
                {
                    id: 11,
                    title: "React",
                    img: "https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB",
                    installLinux: "npm create vite@latest",
                    installWindows: "npm create vite@latest",
                    required: "Node.js",
                    exec: "npm run dev"
                },
                {
                    id: 12,
                    title: "Angular",
                    img: "https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white",
                    installLinux: "npm install -g @angular/cli",
                    installWindows: "npm install -g @angular/cli",
                    required: "Node.js",
                    exec: "ng serve"
                },
                {
                    id: 13,
                    title: "Next.js",
                    img: "https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white",
                    installLinux: "npx create-next-app@latest",
                    installWindows: "npx create-next-app@latest",
                    required: "Node.js",
                    exec: "npm run dev"
                },
                {
                    id: 14,
                    title: "Node.js",
                    img: "https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white",
                    installLinux: "sudo apt install nodejs npm",
                    installWindows: "choco install nodejs",
                    required: "NPM",
                    exec: "node server.js"
                },
                {
                    id: 15,
                    title: "Vite",
                    img: "https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white",
                    installLinux: "npm create vite@latest",
                    installWindows: "npm create vite@latest",
                    required: "Node.js",
                    exec: "npm run dev"
                },
                {
                    id: 16,
                    title: "Express.js",
                    img: "https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white",
                    installLinux: "npm install express",
                    installWindows: "npm install express",
                    required: "Node.js",
                    exec: "node server.js"
                },
                {
                    id: 17,
                    title: "Vue Router",
                    img: "https://img.shields.io/badge/Vue_Router-4FC08D?style=for-the-badge&logo=vuedotjs&logoColor=white",
                    installLinux: "npm install vue-router",
                    installWindows: "npm install vue-router",
                    required: "Vue.js",
                    exec: "npm run dev"
                }
            ]
        },
        {
            category: "php",
            skills: [
                {
                    id: 18,
                    title: "Symfony",
                    img: "https://img.shields.io/badge/Symfony-000000?style=for-the-badge&logo=symfony&logoColor=white",
                    installLinux: "composer create-project symfony/skeleton my_project",
                    installWindows: "composer create-project symfony/skeleton my_project",
                    required: "PHP + Composer",
                    exec: "symfony server:start"
                },
                {
                    id: 19,
                    title: "Laravel",
                    img: "https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white",
                    installLinux: "composer create-project laravel/laravel example-app",
                    installWindows: "composer create-project laravel/laravel example-app",
                    required: "PHP + Composer",
                    exec: "php artisan serve"
                }
            ]
        },
        {
            category: "python",
            skills: [
                {
                    id: 20,
                    title: "Django",
                    img: "https://img.shields.io/badge/Django-092E20?style=for-the-badge&logo=django&logoColor=white",
                    installLinux: "pip install django",
                    installWindows: "pip install django",
                    required: "Python 3 + pip",
                    exec: "python manage.py runserver"
                },
                {
                    id: 21,
                    title: "FastAPI",
                    img: "https://img.shields.io/badge/FastAPI-009688?style=for-the-badge&logo=fastapi&logoColor=white",
                    installLinux: "pip install fastapi uvicorn",
                    installWindows: "pip install fastapi uvicorn",
                    required: "Python 3 + pip",
                    exec: "uvicorn main:app --reload"
                },
                {
                    id: 22,
                    title: "Flask",
                    img: "https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white",
                    installLinux: "pip install flask",
                    installWindows: "pip install flask",
                    required: "Python 3 + pip",
                    exec: "flask run"
                }
            ]
        }
    ]
};