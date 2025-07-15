<script>
  // We can import the data file to dynamically add your name
  import { personalInfo } from '$lib/data.js';
</script>

<footer class="bg-secondary py-8 text-center text-gray-400">
  <div class="container mx-auto px-6">
    <div class="flex justify-center space-x-6 mb-4">
      <a 
        href={personalInfo.github} 
        target="_blank" 
        rel="noopener noreferrer" 
        class="hover:text-accent transition-colors duration-300"
        aria-label="GitHub Profile"
      >
        GitHub
      </a>
      <a 
        href={personalInfo.linkedin} 
        target="_blank" 
        rel="noopener noreferrer" 
        class="hover:text-accent transition-colors duration-300"
        aria-label="LinkedIn Profile"
      >
        LinkedIn
      </a>
    </div>
    <p class="text-sm">
      &copy; {new Date().getFullYear()} by {personalInfo.name}. All rights reserved.
    </p>
    <p class="text-xs mt-2">
      Designed & Built with SvelteKit and Tailwind CSS.
    </p>
  </div>
</footer>