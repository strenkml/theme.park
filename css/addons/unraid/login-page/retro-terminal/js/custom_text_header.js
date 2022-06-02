
 //Custom Text Header //
 // ACSII slant font

// Needs to be inside <section id="login" class="shadow">
// You must escape any backward slashes. "\\"

let custom_text_header = `
<div class="custom-text-header"> <pre>
    __  ___      __  __ _              ________   ____ 
   /  |/  /___ _/ /_/ /( )_____   ____/__  /__ \\ / __ \\
  / /|_/ / __ `/ __/ __/// ___/  / ___/ / /__/ // / / /
 / /  / / /_/ / /_/ /_  (__  )  / /    / // __// /_/ / 
/_/  /_/\\__,_/\\__/\\__/ /____/  /_/    /_//____/\\____/  
                                                                            </pre> </div>
`;
document.getElementById("login").innerHTML += custom_text_header
