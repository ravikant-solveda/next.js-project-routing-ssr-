import nc from "next-connect";

const handler = nc()
  .use(someMiddleware())
  .get((req, res) => {
    res.send("Hello world");
  })
  .post((req, res) => {
    res.json({ hello: "world" });
  });
  // .put(async (req, res) => {
  //   res.end("async/await is also supported!");
  // })
  // .patch(async (req, res) => {
  //   throw new Error("Throws me around! Error can be caught and handled.");
  // });

  export default handler;