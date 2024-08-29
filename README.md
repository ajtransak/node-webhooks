## Node Webhooks (Transak)

Decrypting Transak Webhooks data using Refresh Access Token

### Steps to Reproduce

- Clone the Repository

  First, clone the repository where the decryption code is stored. Navigate to the project directory.

- Create and Configure the .env File

  Inside the project directory, create a .env file by replicating the structure of the provided .env.example file.

  Here's what your .env file should look like:

  ```
  ACCESS_TOKEN="YOUR_REFRESH_ACCESS_TOKEN"
  WEBHOOK_DATA='{"data":"YOUR_WEBHOOK_RESPONSE_JSON"}'

  ```

  Replace YOUR_REFRESH_ACCESS_TOKEN with your actual refresh access token and YOUR_WEBHOOK_RESPONSE_JSON with the actual webhook response JSON data.

- Install Dependencies

  Run the following command to install all necessary dependencies:

  ```
  npm install

  ```

- Run the decryption script
  After configuring the .env file and installing dependencies, start the project with the following command:

  ```
  npm run start
  ```

  This will execute the decryption script. Upon successful execution, the script will generate a './decryptedData.json' file in the project directory. This file will contain the decrypted webhook data.

- Verify the Decrypted Data

  Open the decryptedData.json file to inspect the decrypted webhook response.
