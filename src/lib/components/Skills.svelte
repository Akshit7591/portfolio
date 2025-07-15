<script>
  import { skills } from '$lib/data.js';
</script>

<section id="skills" class="bg-secondary py-20">
  <div class="container mx-auto px-6">
    <h2 class="mb-12 text-center text-3xl font-bold">My Toolbox</h2>
    <div class="mx-auto grid max-w-4xl grid-cols-1 gap-8 text-center md:grid-cols-3">
      {#each skills as skillCategory}
        <div>
          <h3 class="mb-4 text-xl font-semibold text-accent">{skillCategory.category}</h3>
          <ul class="space-y-2">
            {#each skillCategory.items as item}
              <li>{item}</li>
            {/each}
          </ul>
        </div>
      {/each}
    </div>
  </div>
</section>