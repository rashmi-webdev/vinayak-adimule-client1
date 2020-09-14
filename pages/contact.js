import Head from "next/head";
import Layout from "../components/layout/layout-component";

export default function Contact() {
  return (
    <Layout contact>
      <Head>
        <title>Irene Truong | Contact</title>
      </Head>

      <div className="contact-hero"></div>
      <section class="grey-background">
        <div className="white-contact-card wrapper">
          <h2>Contact</h2>
          <p>
            Feel free to fill out the form below/contact me if:
            <ol>
              <li>You'd like to work together.</li>
              <li>You'd like to hire me.</li>
              <li>You want to discuss a freelance project.</li>
              <li>
                You want to talk about Pokémon GO and schedule 5-Star raids with
                me.
              </li>
              <li>
                You'd like to discuss your favourite personality from Netflix's
                Selling Sunset.
              </li>
              <li>
                I'd like to think I'm friendly, so in general, feel free to get
                in touch!
              </li>
            </ol>
          </p>
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
                <label for="name" class="visuallyHidden">
                  {" "}
                  Name
                </label>
                <input
                  type="name"
                  placeholder="Name"
                  required="true"
                  id="name"
                  name="name"
                />

                <label for="email-address" class="visuallyHidden">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Email address"
                  required="true"
                  id="email-address"
                  name="_replyto"
                />
              </div>

              <label for="message" class="visuallyHidden">
                Message
              </label>
              <textarea
                name="message"
                placeholder="Message"
                id="message"
                required="true"
                cols="30"
                rows="10"
                name="message"
              ></textarea>

              <button type="submit">Submit</button>
            </fieldset>
          </form>
        </div>
      </section>
    </Layout>
  );
}
