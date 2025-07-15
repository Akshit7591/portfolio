// src/lib/data.js

// Personal Information: Update with your details
export const personalInfo = {
  name: 'Your Name',
  title: 'Creative Frontend Developer',
  bio: 'A passionate developer with a love for clean code and intuitive user experiences. I specialize in building modern, responsive, and performant web applications.',
  email: 'your.email@example.com',
  github: 'https://github.com/your-username',
  linkedin: 'https://linkedin.com/in/your-username',
};

// Skills: Grouped by category for the "Toolbox" section
export const skills = [
  {
    category: 'Languages',
    items: ['HTML', 'CSS', 'JavaScript', 'TypeScript']
  },
  {
    category: 'Frameworks & Libraries',
    items: ['Svelte', 'React', 'Tailwind CSS', 'Node.js']
  },
  {
    category: 'Tools & Platforms',
    items: ['Git', 'GitHub', 'Vercel', 'VS Code']
  }
];

// Projects: An array of your project objects
export const projects = [
  {
    title: 'Project One: Portfolio Website',
    description: 'A modern portfolio built with SvelteKit to showcase personal projects and skills.',
    techStack: ['SvelteKit', 'Tailwind CSS', 'Vercel'],
    liveUrl: 'https://example.com/project-one',
    githubUrl: 'https://github.com/your-username/project-one',
    image: '/images/project-one.png'
  },
  {
    title: 'Project Two: Interactive Data Dashboard',
    description: 'A data visualization dashboard that fetches and displays real-time data using D3.js within a Svelte component structure.',
    techStack: ['Svelte', 'D3.js', 'Chart.js'],
    liveUrl: 'https://example.com/project-two',
    githubUrl: 'https://github.com/your-username/project-two',
    image: '/images/project-two.png'
  },
  {
    title: 'Project Three: Personal Blog',
    description: 'A static-generated blog using SvelteKit and Markdown, focused on performance and SEO. Deployed on Vercel.',
    techStack: ['SvelteKit', 'Markdown', 'Vercel'],
    liveUrl: 'https://example.com/project-three',
    githubUrl: 'https://github.com/your-username/project-three',
    image: '/images/project-three.png'
  }
];
