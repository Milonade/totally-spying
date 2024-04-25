// Get the video element
const video = document.getElementById("myVideo");

// Play the video
video.play();

// Function to read a text file in real time
function readTextFile() {
  fetch("src/file.txt")
    .then((response) => response.text())
    .then((text) => {
      // Process the text here
      console.log(text);
    })
    .catch((error) => {
      console.error("Error reading the text file:", error);
    });

  if (text.includes("totally spying")) {
    video.pause();
  } else {
    video.play();
  }
}

// Call the readTextFile function to read the text file in real time
readTextFile();
