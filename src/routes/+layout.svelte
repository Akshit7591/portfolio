<script>
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import '../app.css'; // Imports the global CSS file where Tailwind directives are located
</script>

<div class="bg-primary text-black-300 font-sans">
  <Header />
  
  <main>
    <slot /> </main>
  
  <Footer />
</div>