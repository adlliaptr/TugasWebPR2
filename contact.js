(function () {
  emailjs.init("dggkBSY7syevwHk-j");

  document
    .getElementById("contact-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      emailjs.sendForm("service_7mxpbwe", "template_ias98lh", this).then(
        function (response) {
          alert("Email sent successfully!");
          document.getElementById("contact-form").reset();
        },
        function (error) {
          alert("Email failed to send. Please try again later.");
        }
      );
    });
})();
