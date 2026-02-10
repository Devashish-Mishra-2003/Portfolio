# Devashish Mishra — Multi-Theme Architecture
A high-performance React application designed with a State-Driven Theme Engine. This project serves as a technical demonstration of managing divergent design systems, non-linear UI flows, and complex state synchronization within a single-page application (SPA).

It is also my portfolio.

*This website is also build from a perspective to showcase my frontend and UI/UX abilities.*

Live Link: https://devashishmishra.tech

## Engineering Highlights
### 1. The Multi-Theme State Controller :
The core of the application is a centralized theme manager built with TypeScript and React Hooks. It manages a 4-way switch between fundamentally different layout paradigms:
- **Modern (Light):** High-salience, print-inspired design focusing on typography and whitespace.
- **Classic (Neo-Brutalist):** High-contrast, border-heavy aesthetic with a focus on "raw" UI elements.
- **Terminal (CLI):** A low-latency, monospace environment featuring a custom typewriter hook to simulate system boot sequences and command-line interactions.
- **Retro (Windows XP):** A Non-Linear Desktop Environment. This theme breaks away from the standard vertical scroll, implementing a coordinate-based system.

### 2. "Retro-OS" Window Manager
The Retro XP theme is a standalone technical feat within the app:
- **Z-Index Management:** Implemented logic to track "active" windows, ensuring the last-clicked application pops to the front of the stack.
- **State-Linked Taskbar:** A dynamic taskbar that synchronizes with the openWindows state, showing active processes and allowing for window toggling.
- **Component Shelling:** Used a high-order "Window Shell" component that wraps standard content sections, providing the classic blue title bar, control buttons, and "File Explorer" navigation bars.

### 3. Performance & Optimization
- **Zero-Inference Conditional Rendering:** To maintain high performance, the engine utilizes a mapping object that swaps component sets based on the active theme, preventing the browser from rendering hidden theme elements in the background.
- **Persistence:** Integrated localStorage hooks to ensure the user's selected design "personality" persists across sessions.
- **Responsive Adaptation:** Each theme maintains its own set of Tailwind breakpoints. While the Modern theme uses fluid grids, the Retro theme adapts window sizes to max-w-[95%] to ensure the "desktop" experience remains functional on mobile devices.

## Tech Stack & Patterns
- **Framework:** React 18 + Vite (for ultra-fast HMR).
- **Typing:** Strict TypeScript (defining ThemeType and WindowState interfaces to prevent runtime errors).
- **Styling:** Tailwind CSS (leveraging JIT engine for custom Retro gradients and Neo-Brutalist shadows).
- **Animation:** Framer Motion & Custom Hooks (used for the terminal typewriter effect and window transitions).

## Local Development

Clone the repository and run locally:

```bash
git clone https://github.com/<your-username>/portfolio.git
cd portfolio/frontend
npm install
npm run dev
```
The app will be available at http://localhost:5173.

## Deployment

The site is deployed on Netlify using GitHub integration.
Build settings:
- Base directory: frontend
- Build command: npm run build
- Publish directory: frontend/dist

## License

This project is open for inspiration and learning.
Feel free to explore the code, but please do not copy the design or content verbatim.

## Contact

- Website: https://devashishmishra.tech
- GitHub: https://github.com/Devashish-Mishra-2003
- LinkedIn: https://www.linkedin.com/in/devashish-mishra-b09157295/
