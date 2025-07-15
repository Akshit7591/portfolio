<script>
  import emailjs from '@emailjs/browser';

  async function sendEmail(event) {
    // Prevent default form submission
    event.preventDefault();
    
    try {
      // Use the EmailJS SDK to send the form data
      await emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', event.target, 'YOUR_PUBLIC_KEY');
      alert('Message sent successfully!');
    } catch (error) {
      alert('Failed to send message. Please try again.');
    }
  }
</script>

<form on:submit={sendEmail}>
  <input type="text" name="user_name" placeholder="Your Name" required />
  <input type="email" name="user_email" placeholder="Your Email" required />
  <textarea name="message" placeholder="Your Message" required></textarea>
  <button type="submit">Send Message</button>
</form>