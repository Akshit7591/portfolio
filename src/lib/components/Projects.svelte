<script>
  import { projects } from '$lib/data.js';
</script>

<section id="projects" class="py-20">
  <div class="container mx-auto px-6">
    <h2 class="mb-12 text-center text-3xl font-bold">My Work</h2>
    <div class="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
      {#each projects as project}
        <div class="flex flex-col rounded-lg bg-secondary p-6 shadow-lg">
          <h3 class="mb-2 text-xl font-bold text-accent">{project.title}</h3>
          <p class="mb-4 flex-grow">{project.description}</p>
          <div class="mb-4">
            {#each project.techStack as tech}
              <span class="mb-2 mr-2 inline-block rounded-full bg-gray-700 px-3 py-1 text-sm font-semibold">{tech}</span>
            {/each}
          </div>
          <div class="mt-auto flex justify-start space-x-4">
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" class="rounded bg-accent px-4 py-2 text-white transition duration-300 hover:bg-blue-500">Live Demo</a>
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" class="rounded border border-gray-400 px-4 py-2 transition duration-300 hover:bg-gray-700">Source Code</a>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>