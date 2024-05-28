


function onButtonClick() {
    alert('Button clicked!');
  }
  
  const button = document.querySelector('button');
  button.addEventListener('click', onButtonClick);
  
  const newButton = document.createElement('button');
  newButton.textContent = 'Click here too!';
  document.body.appendChild(newButton);
  
  newButton.addEventListener('click', () => {
    openFoundry();
    alert('New button clicked!');
  });


const { exec } = require('node:child_process');


// run the `ls` command using exec
function openFoundry() {
  exec('shellScripts/openFoundry.bat', (err, output) => {
    // once the command has completed, the callback function is called
    if (err) {
        // log and return if we encounter an error
        console.error("could not execute command: ", err)
        return
    }
    // log the output received from the command
    console.log("Output: \n", output)
})
}
