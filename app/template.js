export default ({ body, title }) => (`
  <!DOCTYLE html>
  <html>
    <head>
      <title>${title}</title>
    </head>
    <body>
      <div id="app">${body}</div>
    </body>
    
    <script src="/bundle.js"></script>
  </html>
`);
