// src/lib/data.js

// Personal Information: Update with your details
export const personalInfo = {
  name: 'AKSHIT BANSAL',
  title: 'TECH ENTHUSIAST',
  bio: 'A passionate developer with a love for clean code and intuitive user experiences. I specialize in building modern, responsive, and performant web applications.',
  email: 'akshitbansal7591@gmail.com',
  github: 'https://github.com/Akshit7591',
  linkedin: 'https://www.linkedin.com/in/akshit-bansal-294ba3359/',
};

// Skills: Grouped by category for the "Toolbox" section
export const skills = [
  {
    category: 'Languages',
    items: ['HTML', 'CSS', 'JavaScript', 'C++']
  },
  {
    category: 'Frameworks & Libraries',
    items: ['Svelte', 'React', 'Tailwind CSS', 'Node.js']
  },
  {
    category: 'Tools & Platforms',
    items: ['Git', 'GitHub', 'VS Code']
  }
];

// Projects: An array of your project objects
export const projects = [
  {
    title: 'Project One: Portfolio Website',
    description: 'A modern portfolio built with SvelteKit to showcase personal projects and skills.',
    techStack: ['SvelteKit', 'Tailwind CSS', 'Vercel'],
    githubUrl: 'https://github.com/Akshit7591/portfolio',
    image: '/images/project-one.png'
  },
  {
    title: 'Project Two: Simon Says Game',
    description: 'an interactive and fun game',
    techStack: ['javascript', 'html', 'css'],
    githubUrl: 'https://github.com/Akshit7591/simon_says',
    image: '/images/project-two.png'
  },
  {
    title: 'Project Three: Spotify Clone front page',
    description: 'clone of front page of spotify',
    techStack: ['html', 'css'],  
    githubUrl: 'https://github.com/Akshit7591/spotify_clone',
    image: '/images/project-three.png'
  }
];
