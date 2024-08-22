import "./Contact.css";

function Contact() {
  return (
    <div className="contactDiv">
      <p>
        Please reach out to me here:
        <br />
        <a href="mailto:AnthonyJosephJordan@gmail.com<">
          AnthonyJosephJordan@gmail.com
        </a>
      </p>
      <a
        href="https://www.linkedin.com/in/anthonyjosephjordan/"
        target="_blank"
        rel="noreferrer"
      >
        <img
          className="linkedInLogo"
          src={require("../images/LinkedIn_logo_initials.png")}
          alt="linkedin logo"
        />
      </a>
    </div>
  );
}

export default Contact;
