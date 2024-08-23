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
          className="logo"
          src={require("../images/LinkedIn_logo_initials.png")}
          alt="linkedin logo"
        />
      </a>
      <a
        href="https://github.com/AnthonyJordan"
        target="_blank"
        rel="noreferrer"
      >
        <img
          className="logo"
          src={require("../images/github_logo2.png")}
          alt="github logo"
        />
      </a>
    </div>
  );
}

export default Contact;
