const axios = require('axios'); // Install with: npm install axios
const fs = require('fs');

const url = 'http://127.0.0.1:7860/sdapi/v1/txt2img';
const payload = {
  // ... (your payload data here)
};

axios.post(url, payload)
  .then(response => {
    const imageData = response.data.images[0]; // Assuming the response structure is similar
    const decodedImage = Buffer.from(imageData, 'base64');
    fs.writeFileSync('output.png', decodedImage);
    console.log('Image saved to output.png');
  })
  .catch(error => {
    console.error('Error:', error);
  });