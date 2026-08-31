const express = require("express");

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Aarush's DevOps Lab</title>

      <style>
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        body {
          font-family: Arial, sans-serif;
          background: #0f172a;
          color: white;
          min-height: 100vh;
        }

        .container {
          max-width: 1000px;
          margin: auto;
          padding: 60px 25px;
          text-align: center;
        }

        .badge {
          display: inline-block;
          padding: 8px 18px;
          border-radius: 20px;
          background: #1e293b;
          color: #38bdf8;
          margin-bottom: 25px;
        }

        h1 {
          font-size: 52px;
          margin-bottom: 15px;
        }

        .blue {
          color: #38bdf8;
        }

        .subtitle {
          color: #94a3b8;
          font-size: 19px;
          margin-bottom: 30px;
        }

        .status {
          display: inline-block;
          background: #14532d;
          color: #86efac;
          padding: 10px 22px;
          border-radius: 25px;
          margin-bottom: 45px;
        }

        .cards {
          display: flex;
          justify-content: center;
          gap: 20px;
          flex-wrap: wrap;
        }

        .card {
          width: 250px;
          padding: 30px 20px;
          background: #1e293b;
          border: 1px solid #334155;
          border-radius: 15px;
        }

        .card h2 {
          margin-bottom: 12px;
          color: #38bdf8;
        }

        .card p {
          color: #94a3b8;
          line-height: 1.5;
        }

        footer {
          margin-top: 55px;
          color: #64748b;
        }
      </style>
    </head>

    <body>

      <div class="container">

        <div class="badge">
          🐳 DOCKER × JENKINS
        </div>

        <h1>
          Aarush's <span class="blue">DevOps Lab</span>
        </h1>

        <p class="subtitle">
          My first customized application running inside Docker.
        </p>

        <div class="status">
          ● Container Running Successfully
        </div>

        <div class="cards">

          <div class="card">
            <h2>🐳 Docker</h2>
            <p>
              Application packaged and running inside a Docker container.
            </p>
          </div>

          <div class="card">
            <h2>🟢 Node.js</h2>
            <p>
              Express server powering this application on port 3000.
            </p>
          </div>

          <div class="card">
            <h2>⚙️ DevOps</h2>
            <p>
              Learning containerization and CI/CD deployment workflows.
            </p>
          </div>

        </div>

        <footer>
          Built by Aarush Agrawal • Code{Y}Gen Bootcamp • M1
        </footer>

      </div>

    </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});