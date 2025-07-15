<script>
  import { base } from '$app/paths';
  import { personalInfo } from '$lib/data.js';
</script>

<section id="hero" class="flex min-h-screen items-center justify-center">
  <div class="text-center">
    <h1 class="mb-4 text-4xl font-bold md:text-6xl">
      Hi, I'm <span class="text-accent">{personalInfo.name}</span>.
    </h1>
    <p class="mb-8 text-xl md:text-2xl">{personalInfo.title}</p>
    <a href="{base}/#projects" class="rounded bg-accent px-6 py-3 font-bold text-black transition duration-300 hover:bg-blue-500">
      View My Work
    </a>
  </div>
</section>