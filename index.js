import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const OPA_URL = "http://localhost:8181";

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("login.ejs");
});

app.post("/submit", async (req, res) => {
  try {
    const data = {
      input: {
        username: req.body.username,
        password: req.body.password,
      },
    };
    const auth = await axios.post(OPA_URL + "/v1/data/app/rbac/response", data); //used AXIOS to send username and password to OPA api
    console.log(auth.data.result);
    // console log output: 
    /*
    access message: 
    allow: true,
    membership: true,
    message: 'Access Granted',
    purchase_history: [ 'item1', 'item2', 'item3' ],
    username: 'arson'
    */
    /*
    no-access message:
    allow: false, message: 'Access Denied'
    */
    const user = auth.data.result.username;
    const member = auth.data.result.membership;
    const items = auth.data.result.purchase_history;
    if (auth.data.result.allow) {
      res.render("price.ejs", { name: user, premium: member, discount: items });
    } else {
      res.redirect("/");
    }
  } catch (error) {
    res.status(404).send(error.message);
  }
});

app.listen(port, () => {
  console.log(`Frontend Server is listening on port: ${port}`);
});
