<script>
  import { base } from '$app/paths';
  import { personalInfo } from '$lib/data.js';
  let isMenuOpen = false;

  function toggleMenu() {
    isMenuOpen =!isMenuOpen;
  }
</script>

<header class="sticky top-0 z-50 bg-secondary/80 backdrop-blur-sm">
  <nav class="container mx-auto flex items-center justify-between px-6 py-4">
    <a href="{base}/" class="text-2xl font-bold text-accent">{personalInfo.name}</a>
    
    <div class="hidden space-x-6 md:flex">
      <a href="{base}/#about" class="transition-colors duration-300 hover:text-accent">About</a>
      <a href="{base}/#skills" class="transition-colors duration-300 hover:text-accent">Skills</a>
      <a href="{base}/#projects" class="transition-colors duration-300 hover:text-accent">Projects</a>
      <a href="{base}/#contact" class="transition-colors duration-300 hover:text-accent">Contact</a>
    </div>

    <div class="md:hidden">
      <button on:click={toggleMenu} aria-label="Open menu">
        <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
        </svg>
      </button>
    </div>
  </nav>

  {#if isMenuOpen}
    <div class="md:hidden" on:click={toggleMenu}>
      <a href="{base}/#about" class="block px-4 py-2 text-sm hover:bg-gray-700">About</a>
      <a href="{base}/#skills" class="block px-4 py-2 text-sm hover:bg-gray-700">Skills</a>
      <a href="{base}/#projects" class="block px-4 py-2 text-sm hover:bg-gray-700">Projects</a>
      <a href="{base}/#contact" class="block px-4 py-2 text-sm hover:bg-gray-700">Contact</a>
    </div>
  {/if}
</header>