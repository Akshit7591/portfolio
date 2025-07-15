<script>
  let isMenuOpen = false;

  function toggleMenu() {
    isMenuOpen =!isMenuOpen;
  }
</script>

<header class="sticky top-0 z-50 bg-secondary/80 backdrop-blur-sm">
  <nav class="container mx-auto px-6 py-4 flex justify-between items-center">
    <a href="/" class="text-2xl font-bold text-accent">YourName</a>
    
    <div class="hidden md:flex space-x-6">
      <a href="#about" class="hover:text-accent">About</a>
      <a href="#projects" class="hover:text-accent">Projects</a>
      <a href="#contact" class="hover:text-accent">Contact</a>
    </div>

    <div class="md:hidden">
      <button on:click={toggleMenu}>
        </button>
    </div>
  </nav>

  {#if isMenuOpen}
    <div class="md:hidden">
      <a href="#about" class="block py-2 px-4 text-sm hover:bg-gray-700">About</a>
      </div>
  {/if}
</header>