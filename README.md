# Certifications Listing - Flask & React

![GitHub repo size](https://img.shields.io/github/repo-size/prpcodes/pexon-flask-certificates?style=for-the-badge)
![GitHub language count](https://img.shields.io/github/languages/top/prpcodes/pexon-flask-certificates?style=for-the-badge)
![GitHub language count](https://img.shields.io/github/last-commit/prpcodes/pexon-flask-certificates?style=for-the-badge)

<img src="https://raw.githubusercontent.com/prpcodes/pexon-flask-certificates/main/client/public/website.png" alt="Screenshot of the website">

> A web app where you can list your certifications and share them with the world.

### ⚠️ Disclaimer

This project is an interview challenge for [Pexon Consulting](https://pexon-consulting.de/).

### 🛠 Technologies

The following tools were used in the construction of the project:

##### Server:

-   [Python](https://www.python.org/)
-   [Flask](https://flask.palletsprojects.com/en/2.0.x/)

##### Client:

-   [React](https://reactjs.org/)
-   [Vite](https://vitejs.dev/)
-   [TailwindCSS](https://tailwindcss.com/)
-   [DaisyUI](https://daisyui.com/)

##### Testing:

-   [Vitest](https://vitest.dev/)

##### Database:

-   [Postgres](https://hub.docker.com/_/postgres)

## 💻 Getting started

Here are the steps to run the project locally:

1. Clone the repository and access the folder:

```bash
$ git clone https://github.com/prpcodes/pexon-flask-certificates.git
$ cd pexon-flask-certificates
```

2. Set up the environment variables:

```bash
$ cd server
$ cp .env.example .env
```

3. Install the client dependencies:

```bash
$ cd client
$ npm install
```

4.  Use Docker to run the project (from /client):

```bash
$ npm run docker:dev
```

5. Access the website at http://localhost:3000

## 🤝 Contributing

Contributions, issues and feature requests are welcome!

## 📝 License

This project is licensed under the MIT License.

The Pexon name is a trademark of [Pexon Consulting GmbH](https://pexon-consulting.de/) <br/> and is used here only for educational purposes.
