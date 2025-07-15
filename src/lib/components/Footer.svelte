<script>
  // Import personalInfo to dynamically display your name and social links
  import { personalInfo } from '$lib/data.js';
</script>

<footer class="bg-secondary py-6 text-center text-gray-400">
  <div class="container mx-auto px-6">
    <div class="mb-4 flex justify-center space-x-6">
      <a 
        href={personalInfo.github} 
        target="_blank" 
        rel="noopener noreferrer" 
        class="transition-colors duration-300 hover:text-accent"
        aria-label="GitHub Profile"
      >
        GitHub
      </a>
      <a 
        href={personalInfo.linkedin} 
        target="_blank" 
        rel="noopener noreferrer" 
        class="transition-colors duration-300 hover:text-accent"
        aria-label="LinkedIn Profile"
      >
        LinkedIn
      </a>
    </div>
    <p class="text-sm">
      &copy; {new Date().getFullYear()} {personalInfo.name}. All Rights Reserved.
    </p>
    <p class="mt-2 text-xs">
      Built with SvelteKit & Tailwind CSS.
    </p>
  </div>
</footer>