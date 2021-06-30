const express = require("express");
const router = express.Router();
const webPush = require("web-push");
const { registerTasks, sendNotification } = require("./utils");

const allSubscriptions = {};

let subscription = {};

const { publicKey, privateKey } = webPush.generateVAPIDKeys();

// We are giving webpush the required information to encrypt our data
webPush.setVapidDetails("mailto:harshit886@outlook.com", publicKey, privateKey);

// Send our public key to the client
router.route("/vapid-public-key").get((req, res) => {
  return res.send({ publicKey });
});

// Allows our client to subscribe
router.route("/subscribe").post((req, res) => {
  subscription = req.body;
  registerTasks(subscription, allSubscriptions);
  res.send("subscribed!");
});

router.route("/unsubscribe", (req, res) => {
  const endpoint = req.body.endpoint;
  delete allSubscriptions[endpoint];
});

// can move to different folder + subscription.endpoint hardcoded
router.route("/sellOrder").get((req, res) => {
  setTimeout(() => {
    sendNotification(subscription, "Tesla sell Order Executed ");
  }, 4000);

  res.send("success!");
});

module.exports = router;
