<script>
    import { personalInfo } from '$lib/data.js';
</script>

<section id="about" class="py-20">
    <div class="container mx-auto px-6">
        <h2 class="mb-12 text-center text-3xl font-bold">About Me</h2>
        <p class="mx-auto max-w-3xl text-center leading-relaxed">
            {personalInfo.bio}
        </p>
    </div>
</section>