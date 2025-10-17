export const projectsData = [
  {
    id: 1,
    name: 'Mystery at Marenport (Godot Visual Novel)',
    description: `First project: a visual novel with point-and-click elements built in Godot.
The game focuses on narrative choices, inventory interactions, and environment puzzles.
I implemented scene management, dialogue systems, and a lightweight point-and-click mechanic using Godot's GDScript.`,
    tools: ['Godot', 'GDScript', 'Tiled (maps)', 'Aseprite'],
    role: 'Game Developer',
    active: true,
    status: 'in development',
    code: 'https://github.com/your-username/mystery-marenport',
    demo: '',
    images: ['/image/GameScreenshots/Chair.jpeg', '/image/GameScreenshots/Silla.jpeg', '/image/GameScreenshots/TV.jpeg', '/image/GameScreenshots/Bottle.jpeg', '/image/GameScreenshots/Bottle2.jpeg'],
  },
  {
    id: 2,
    name: 'Remote Server Automation Tool',
    description: `I developed a Linux-based automation tool that simplifies remote server management.
It allows deploying, updating, and monitoring multiple servers via SSH using customizable Bash scripts.
This project helped me deepen my understanding of process management, system services, and secure automation.`,
    tools: ['Bash', 'Python', 'SSH', 'Cron', 'Linux'],
    role: 'System Automation Developer',
    active: true,
    status: 'maintained',
    code: 'https://github.com/your-username/server-automation-tool',
    demo: '',
    images: ['/image/IMS.png', '/image/PG.svg'],
  },
  {
    id: 3,
    name: 'Networked Ping-Pong Game in C',
    description: `As part of my university coursework, I built a multiplayer Ping-Pong game using processes and signals in C.
Each player runs as a separate process communicating through files and synchronized with UNIX signals.
This project strengthened my skills in IPC (interprocess communication) and system-level programming.`,
    tools: ['C', 'UNIX Signals', 'File I/O', 'Processes', 'Makefile'],
    role: 'Systems Programmer',
    code: 'https://github.com/your-username/pingpong-ipc',
    active: false,
    status: 'archived',
    demo: '',
    images: ['/image/pingpong-1.png'],
  },
  {
    id: 4,
    name: 'Personal Portfolio Website',
    description: `I built my personal portfolio from scratch to showcase my projects and technical skills.
It’s a fully responsive web application deployed on a remote server, integrating modern frontend technologies and automated deployment scripts.`,
    tools: ['React', 'TailwindCSS', 'JavaScript', 'Vercel', 'GitHub Actions'],
    code: 'https://github.com/your-username/portfolio',
    demo: 'https://your-portfolio-link.vercel.app/',
    images: ['/image/portfolio-1.png'],
    active: true,
    status: 'deployed',
    role: 'Full Stack Developer',
  }
];
