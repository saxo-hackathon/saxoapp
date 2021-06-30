const webPush = require("web-push");
const sendNotification = async (subscription, payload) => {
  // This means we won't resend a notification if the client is offline
  const options = {
    TTL: 0,
  };

  if (!subscription.keys) {
    payload = payload || null;
  }

  // web-push's sendNotification function does all the work for us
  try {
    const res = await webPush.sendNotification(subscription, payload, options);
    console.log(res, "sent!");
  } catch (e) {
    console.log("error sending", e);
  }
};

const registerTasks = (subscription, allSubscriptions) => {
  // the endpoints are the keys of our subscriptions object
  const endpoint = subscription.endpoint;

  sendNotification(subscription, "Push notifications are subscribed");

  allSubscriptions[endpoint] = true;
};

module.exports = { registerTasks, sendNotification };
