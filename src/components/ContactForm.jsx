import '../styles/contact.css';

const ContactForm = () => {
  return (
    <section className='contact-form'>
      <form>
        <label htmlFor='name'>Name</label>
        <input
          className='input-name'
          type='text'
          name='name'
          id='name'
          required
        />
        <label htmlFor='email'>Email</label>
        <input
          className='input-email'
          type='email'
          name='email'
          id='email'
          required
        />

        <label htmlFor='message'>Message</label>
        <textarea
          required
          name='message'
          id='message'
          cols='30'
          rows='20'
        ></textarea>
        <button type='submit'>Submit</button>
      </form>
    </section>
  );
};

export default ContactForm;
