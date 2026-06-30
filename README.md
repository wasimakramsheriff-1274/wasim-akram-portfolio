# 🚀 Wasim Akram Sheriff | Software Engineering Portfolio

[![Deployed with Vercel](https://vercelbadge.vercel.app/api/wasimakramsheriff-1274/wasim-akram-portfolio)](https://wasim-akram-portfolio.vercel.app/)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)]()
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)]()
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)]()

> A high-performance, responsive frontend developer portfolio designed to showcase production-ready software engineering projects, cloud architectures, and machine learning pipelines.

🔗 **Live Production Build:** [View Portfolio Here](https://wasim-akram-portfolio.vercel.app/)

---

## 🎨 UI/UX Architecture & Visual Effects

This portfolio was engineered without heavy external frameworks, focusing on clean DOM manipulation and advanced CSS3 implementations to ensure lightning-fast load times and a premium user experience.

| UI/UX Feature | Implementation Details | Code Mechanism |
| :--- | :--- | :--- |
| **Infinite Skills Marquee** | A seamless, infinite scrolling conveyor belt displaying technical skills, built with hardware-accelerated CSS animations. | `@keyframes` with `-50% translateX` translation for zero-gap looping. |
| **Cyberpunk Glow Effects** | Interactive project cards that lift and emit a neon-cyan glow upon user interaction, improving visual feedback. | `transform: translateY()` paired with layered `box-shadow` RGBA values. |
| **Dynamic Form Routing** | A fully functional, serverless contact form that securely routes recruiter inquiries directly to a private inbox. | HTML5 Forms integrated directly with the **Formspree** REST API endpoint. |
| **Responsive Dark Mode** | A high-contrast, cyberpunk-inspired dark aesthetic optimized for readability across all device viewports (Desktop, Tablet, Mobile). | CSS Flexbox & Grid layouts mapped to dynamic `@media` queries. |

---

## 💻 Codebase Structure & Explanation

The application follows a strict separation of concerns, maintaining highly readable and maintainable source code.

* `index.html`: The semantic structural backbone of the application. Elements are logically grouped into `<section>` tags (About, Skills, Projects, Contact) for optimal SEO and screen-reader accessibility.
* `style.css`: Contains all custom variables, layout grids, and complex animation logic. It utilizes a mobile-first responsive design approach.
* `script.js`: Handles dynamic DOM interactions, smooth scrolling event listeners for navigation, and dynamic year rendering for the footer copyright.

---

## 🚀 Featured Engineering Projects

This portfolio serves as the central hub for my technical builds. Key projects showcased include:

1.  **AI Face Detection & Attendance Pipeline:** An automated real-time vision system utilizing Python, OpenCV, and Deep Learning to eliminate proxy attendance.
2.  **Smart Traffic Control System:** A dynamic urban mobility solution using YOLOv8 object detection to calculate traffic density and optimize signal timings dynamically.
3.  **Trip Manager Dashboard:** A robust itinerary and expense tracking application focused on state management and complex data flows.

---

## ⚙️ Local Setup & CI/CD Pipeline

This project is configured with a Continuous Deployment (CD) pipeline via **Vercel**. Any commits pushed to the `main` branch on GitHub automatically trigger a new production build.

To run this project locally:

```bash
# 1. Clone the repository
git clone [https://github.com/wasimakramsheriff-1274/wasim-akram-portfolio.git](https://github.com/wasimakramsheriff-1274/wasim-akram-portfolio.git)

# 2. Navigate into the directory
cd wasim-akram-portfolio

# 3. Launch a local development server 
# (You can use VS Code's "Live Server" extension)
