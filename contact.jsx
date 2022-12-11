<!DOCTYPE html>
<html>
  <head>
    <title>Contact - Fashion</title>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
    <link rel="stylesheet" href="https://unpkg.com/material-ui@latest/dist/css/material-ui.min.css" />
    <style>
      body {
        margin: 0;
        padding: 0;
        font-family: "Roboto", sans-serif;
      }
    </style>
  </head>
  <body>
    <div id="root"></div>
    <script src="https://unpkg.com/react@latest/umd/react.production.min.js"></script>
    <script src="https://unpkg.com/react-dom@latest/umd/react-dom.production.min.js"></script>
    <script src="https://unpkg.com/babel-standalone@latest/babel.min.js"></script>
    <script src="https://unpkg.com/material-ui@latest/dist/material-ui.min.js"></script>
    <script type="text/babel">
      const { Typography, Link } = MaterialUI;
Copy code
  const ContactPage = () => (
    <Typography variant="h1" gutterBottom>
      Contact
    </Typography>
    <Typography variant="body1" gutterBottom>
      If you have any questions or feedback, please don't hesitate to contact us.
      You can reach us through the following methods:
    </Typography>
    <Typography variant="body1" gutterBottom>
      Email: <Link href="mailto:info@fashion.com">info@fashion.com</Link>
    </Typography>
    <Typography variant="body1" gutterBottom>
      Phone: +1 (123) 456-7890
    </Typography>
    <Typography variant="body1" gutterBottom>
      Address: 123 Main Street, Anytown, USA
    </Typography>
  );

  ReactDOM.render(<ContactPage />, document.getElementById("root"));
</script>
  </body>
</html>


