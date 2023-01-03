import { handleEvent , handleRequest , doSomething } from "./handlers";

addEventListener("scheduled", (event) => {
  event.waitUntil(triggerEvent(event));
});

async function triggerEvent(event) {
  console.log(JSON.stringify(event));

  switch (event.cron) {
    // You can set up to three schedules maximum.

    case "*/3 * * * *":
      // Every three minutes
      await handleRequest();
      break;

    case "*/10 * * * *":
      // Every ten minutes
      await handleEvent();
      break;

    case "*/45 * * * *":
      // Every forty-five minutes
      await doSomething();
      break;
  }
  console.log("cron processed");
}