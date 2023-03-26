
 //Custom Text Header //
 // ACSII slant font
 // Website: https://patorjk.com/software/taag/

// Needs to be inside <section id="login" class="shadow">
// You must escape any backward slashes. "\\"

let custom_text_header = `
<div class="custom-text-header"> <pre>
    ________                       __       
   / ____/ /_  _____  _________   / /__   __
  / /_  / / / / / _ \/ ___/_  /  / __/ | / /
 / __/ / / /_/ /  __/ /    / /__/ /_ | |/ / 
/_/   /_/\__, /\___/_/    /___(_)__/ |___/  
        /____/                              
</pre> </div>
`;
document.getElementById("login").innerHTML += custom_text_header
