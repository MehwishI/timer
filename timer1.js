const input = process.argv;
//Windows PowerShell solution
const child_process = require("child_process");

if (input !== []) {
  for (let i of input) {
    if (i >= 0 && i !== NaN) {
      setTimeout(() => {
        //beep() => Plays the sound of a beep through the console speaker.
        child_process.exec("[console]::beep()", { shell: "powershell.exe" });
      }, i * 1000);
    }
  }
}
