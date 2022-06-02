
 //Custom Text Header //
 // ACSII slant font

// Needs to be inside <section id="login" class="shadow">
// You must escape any backward slashes. "\\"

let custom_text_header = `
<div class="custom-text-header"> <pre>
  ________            ______                     __                         
 /_  __/ /_  ___     / ____/___ __________ ___  / /_  ____  __  __________  
  / / / __ \\/ _ \\   / /_  / __ '/ ___/ __ '__ \\/ __ \\/ __ \\/ / / / ___/ _ \\ 
 / / / / / /  __/  / __/ / /_/ / /  / / / / / / / / / /_/ / /_/ (__  )  __/ 
/_/ /_/ /_/\\___/  /_/    \\__,_/_/  /_/ /_/ /_/_/ /_/\\____/\\__,_/____/\\___/  
                                                                            </pre> </div>
`;
document.getElementById("login").innerHTML += custom_text_header
