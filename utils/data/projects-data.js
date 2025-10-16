export const projectsData = [
  {
    id: 1,
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
  },
  {
    id: 2,
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
  },
  {
    id: 3,
    name: 'Task Scheduler for Linux',
    description: `I created a lightweight task scheduler for Linux systems to automate repetitive maintenance and monitoring tasks.
It supports logging, priority execution, and dynamic scheduling, helping optimize system resource usage.`,
    tools: ['Python', 'Bash', 'Systemd', 'Linux', 'Git'],
    role: 'Backend & Automation Developer',
    code: 'https://github.com/your-username/linux-task-scheduler',
    active: true,
    status: 'in progress',
    demo: '',
  },
  {
    id: 4,
    name: 'Personal Portfolio Website',
    description: `I built my personal portfolio from scratch to showcase my projects and technical skills.
It’s a fully responsive web application deployed on a remote server, integrating modern frontend technologies and automated deployment scripts.`,
    tools: ['React', 'TailwindCSS', 'JavaScript', 'Vercel', 'GitHub Actions'],
    code: 'https://github.com/your-username/portfolio',
    demo: 'https://your-portfolio-link.vercel.app/',
    active: true,
    status: 'deployed',
    role: 'Full Stack Developer',
  }
];
