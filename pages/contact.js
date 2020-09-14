import Head from "next/head";
import Layout from "../components/layout/layout-component";

export default function Contact() {
  return (
    <Layout contact>
      <Head>
        <title>Irene Truong | Contact</title>
      </Head>

      <div className="contact-hero"></div>
      <section class="grey-background contact-card-container">
        <div className="white-contact-card ">
          <h1>Contact</h1>
          <p>Feel free to contact me if:</p>
          <ol>
            <li>You'd like to work together.</li>
            <li>You'd like to hire me.</li>
            <li>You'd like to discuss a freelance project.</li>
            <li>
              You'd like to talk about Pokémon GO and schedule 5-Star raids with
              me.
            </li>
            <li>
              You'd like to discuss your favourite personality from Netflix's
              Selling Sunset.
            </li>
            <li>
              I'd like to think I'm friendly, so in general, feel free to get in
              touch!
            </li>
          </ol>

          <form
            action="https://formspree.io/itruong25.it@gmail.com"
            method="POST"
            autocomplete="off"
            name="contact-form"
          >
            <fieldset>
              <legend class="visuallyHidden">
                Please fill out all inputs of the following form if you'd like
                to get in touch.
              </legend>
              <div class="personal-input">
                <label for="name"> Name</label>
                <input type="name" required="true" id="name" name="name" />

                <label for="email-address">Email</label>
                <input
                  type="email"
                  required="true"
                  id="email-address"
                  name="_replyto"
                />
                <label for="message">Message</label>
                <textarea
                  name="message"
                  id="message"
                  required="true"
                  cols="30"
                  rows="10"
                  name="message"
                ></textarea>
              </div>

              <button className="btn-primary form-submit" type="submit">
                Submit
              </button>
            </fieldset>
          </form>
        </div>
      </section>
    </Layout>
  );
}
