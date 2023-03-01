// function to generate markdown for README
function generateMarkdown(data) {
   return `${data.title}
      **Table of Contents**
        1.Description
        2.Installation
        3.Usage Info
        4.Contribution Guidelines
        5.Testing
        6.Questions
        
      
      #Description
      ${data.description}
      
      #Installation
      This program works by ${data.install}
      
      ##Usage Information
      ${data.usage}
      
      ##Contribution Guidelines
      ${data.guide}
      
      ###Testing
      ${data.test}
     
      ###Questions
      For further information, help or advice, please use one of the following contact methods
      Email: ${data.email}
      GitHub: ${data.github}
      LinkedIn: https://www.linkedin.com/in/${data.linkedin}
; 
}
module.exports = generateMarkdown;
    
   
