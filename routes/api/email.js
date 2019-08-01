var helper = require("sendgrid").mail;
const async = require("async");
const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");

const sendEmail = (
  parentCallback,
  fromEmail,
  toEmails,
  subject,
  textContent,
  htmlContent
) => {
  const errorEmails = [];
  const successfulEmails = [];

  const sg = require("sendgrid")(process.env.SENDGRID_API_KEY);

  //   async.parallel([
  async.parallel(
    [
      function(callback) {
        toEmails.map(item => {
          const senderEmail = new helper.Email(fromEmail);
          const toEmail = new helper.Email(item);
          const content = new helper.Content("text/html", htmlContent);
          const mail = new helper.Mail(senderEmail, subject, toEmail, content);

          var request = sg.emptyRequest({
            method: "POST",
            path: "/v3/mail/send",
            body: mail.toJSON()
          });

          sg.API(request, function(error, response) {
            console.log("SendGrid");
            if (error) {
              console.log("Error response received");
            }
            console.log(response.statusCode);
            console.log(response.body);
            console.log(response.headers);
          });
        });
        // return
        callback(null, true);
      }
    ],
    function(err, results) {
      if (err) {
        console.log(err);
      } else {
        console.log("Done");
        console.log(results);
      }
    }
  );
  parentCallback(null, {
    successfulEmails,
    errorEmails
  });
};

router.post(
  "/",
  [
    // Validate and sanitize
    check("name")
      .trim()
      .escape(),
    check("email")
      .isEmail()
      .trim()
      .escape(),
    check("message")
      .trim()
      .escape()
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array });
    }
    async.parallel(
      [
        function(callback) {
          sendEmail(
            callback,
            "dandrewsuk82@gmail.com",
            [req.body.email],
            "You have received a new email from your website!",
            null,
            `<h1>Contact</h1>
          <div><strong>Name: </strong>${req.body.name}</div>
          <div><strong>Email: </strong>${req.body.email}</div>
          <div><strong>Message: </strong><p>${req.body.message}</p></div>
          `
          );
        }
      ],
      function(err, results) {
        if (err) {
          res.json({ success: false });
        }
        res.json({
          success: true,
          message: "Emails sent",
          successfulEmails: results[0].successfulEmails,
          errorEmails: results[0].errorEmails
        });
      }
    );
  }
);

module.exports = router;
