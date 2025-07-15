<script>
  import emailjs from '@emailjs/browser';

  async function sendEmail(event) {
    event.preventDefault();
    
    try {
      await emailjs.sendForm('service_ybhc54a', 'template_n949obv', event.target, 'ZXfkQ3gBq7uLP8YH7');
      alert('Message sent successfully!');
      event.target.reset();
    } catch (error) {
      alert('Failed to send message. Please try again.');
    }
  }
</script>

<section id="contact" class="bg-secondary py-20">
    <div class="container mx-auto px-6">
        <h2 class="mb-12 text-center text-3xl font-bold">Get In Touch</h2>
        <form on:submit={{{sendEmail}}} class="mx-auto max-w-xl">
            <div class="mb-4">
                <input type="text" name="user_name" placeholder="Your Name" required class="w-full rounded bg-primary p-3 text-black focus:outline-none focus:ring-2 focus:ring-accent" />
            </div>
            <div class="mb-4">
                <input type="email" name="user_email" placeholder="Your Email" required class="w-full rounded bg-primary p-3 text-black focus:outline-none focus:ring-2 focus:ring-accent" />
            </div>
            <div class="mb-4">
                <textarea name="message" placeholder="Your Message" rows="4" required class="w-full rounded bg-primary p-3 text-black focus:outline-none focus:ring-2 focus:ring-accent"></textarea>
            </div>
            <div class="text-center">
                <button type="submit" class="rounded bg-accent px-6 py-3 font-bold text-black transition duration-300 hover:bg-blue-500">
                    Send Message
                </button>
            </div>
        </form>
    </div>
</section>