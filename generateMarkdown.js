// function to generate markdown for README
function generateMarkdown(data) {
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${data.title}</title>
  </head>
  <body>
      **Table of Contents**
      <ol>
        <li href="#description">Description</li>
        <li href="#install">Installation</li>
        <li href="#usage">Usage Info</li>
        <li href="#guide">Contribution Guidelines</li>
        <li href="#test">Testing</li>
        <li href="#quest">Questions</li>
        <br>
      
      <h1 id="description>#Description</h1>
      <p>${data.description}</p>
      <br>
      
      <h2 id="install">#Installation</h2>
      <p>This program works by ${data.install}</p>
      <br>
      
      <h2 id="usage">#Usage Information</h2>
      <p>${data.usage}</p>
      <br>
      
      <h3 id="guide">#Contribution Guidelines</h2>
      <p>${data.guide}</p>
      <br>
      
      <h3 id="test">#Testing</h3>
      <p>${data.test}</p>
      <br>
     
      <h3 id="quest"> #Questions</h3>
      <br>
      <p>For further information, help or advice, please use one of the following contact methods<p>
      <p>Email: ${data.email}</p>
      <p>GitHub: ${data.github}</p>
      <p>LinkedIn: https://www.linkedin.com/in/${data.linkedin}</p>
  </body>
  </html>`
; 
}
module.exports = generateMarkdown;
    
   
