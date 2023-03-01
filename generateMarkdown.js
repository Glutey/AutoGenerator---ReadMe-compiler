// function to generate markdown for README
function generateMarkdown(data) {
//   return `<!DOCTYPE html>
//   <html lang="en">
//   <head>
//       <meta charset="UTF-8">
//       <meta http-equiv="X-UA-Compatible" content="IE=edge">
//       <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${data.title}</title>
//   </head>
//   <body>
      **Table of Contents**
      <ol>
        <li href="#description">Description</li>
        <li href="#install">Installation</li>
        <li href="#usage">Usage Info</li>
        <li href="#guide">Contribution Guidelines</li>
        <li href="#test">Testing</li>
        <li href="#quest">Questions</li>
        <br>
      
      #Description
      ~~${data.description}~~
      <br>
      
      ##Installation
      ~~This program works by ${data.install}~~
      <br>
      
      ##Usage Information
      ~~${data.usage}~~
      <br>
      
      ###Contribution Guidelines
      ~~${data.guide}~~
      <br>
      
      ###Testing
      ~~${data.test}~~
      <br>
     
      ###Questions
      <br>
      ~~For further information, help or advice, please use one of the following contact methods~~
      ~~Email: ${data.email}~~
      ~~GitHub: ${data.github}~~
      ~~LinkedIn: https://www.linkedin.com/in/${data.linkedin}~~
//   </body>
//   </html>`
; 
}
module.exports = generateMarkdown;
    
   
