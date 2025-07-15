<script>
  import { projects } from '$lib/data.js';
</script>

<section id="projects" class="py-20">
  <h2 class="text-3xl font-bold text-center mb-12">My Work</h2>
  <div class="grid md:grid-cols-2 gap-8">
    {#each projects as project}
      <div class="bg-secondary rounded-lg p-6">
        <h3 class="text-xl font-bold mb-2">{project.title}</h3>
        <p class="mb-4">{project.description}</p>
        </div>
    {/each}
  </div>
</section>