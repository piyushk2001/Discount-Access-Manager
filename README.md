<h1 align="center">Discount Access Manager 🤑</h1>
<h3 align="center">Manage discounts based on the user's membership and purchase history.</h3>

<a href="https://www.youtube.com/watch?v=7uHPNM5C3V8" target="_blank">
<img src="preview/title.png" alt="Discount Access Manager Permit Quest" border="10" /></a>

> [!IMPORTANT]
> Alternatively you can refer to this link: https://youtu.be/7uHPNM5C3V8?si=8xy3Kb4zewR5Iyk6

<br>

# Discount Corner
**This web application uses OPAL's policy authentication and authorization feature to let users access discounts based on their membership and purchase history.
It uses git webhook to deliver the payload to the OPAL server, which changes the website's discounted items dynamically.**

<br>

## Features
- Classification and authentication using user's data.
- User's membership and purchase history authorizes him/her to specific discounts.
  - Membership holders will get a full discount on all the items on the website.
  - Users without membership will get discounts based on their purchase history.
- Uses git webhook to track committed changes in the policy repo.

# Policy Management Flow
<img src="preview/policy.png" alt="Policy Management Flow" border="10" />

# Synchronization Workflow
<img src="preview/synchronization.png" alt="Synchronization Workflow" border="10" />

##  :outbox_tray: Installation Guide
These are the steps required to install and run the Discount Access Manager 🤑 project:

1. Clone the repository and change the current directory to the cloned repository:
```bash
  git clone https://github.com/piyushk2001/Discount-Access-Manager.git
  cd Discount-Access-Manager
```

2. Run the docker-compose.yml: *(If you have Docker Hub installed, KUDOS!)*
```docker
  docker compose up
```

3. For making changes, fork `https://github.com/piyushk2001/Discount_Access_PolicyOPAL.git` and pass it to `OPAL_POLICY_REPO_URL` in the opal-server environment inside `docker-compose.yml`.

4. Webhook

5. Use the following commands to set and run your project: *(use any code editor terminal like VS Code or CLI in the current directory)*
```bash
  npm i express axios ejs
  npm i -g nodemon
  nodemon index.js
```
> [!NOTE]
> `nodemon index.js` will start the server at `http://localhost:3000` and reflect any code changes dynamically.
