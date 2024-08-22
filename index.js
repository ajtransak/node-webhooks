import { config } from "dotenv";
import fs from "fs";
import jwt from "jsonwebtoken";

config();

const webhookDataRaw = process.env.WEBHOOK_DATA;
const accessToken = process.env.ACCESS_TOKEN;

let decoded;

try {
  // Parse the webhookData string into an object
  const webhookData = JSON.parse(webhookDataRaw);

  // Verify the JWT token contained in webhookData.data
  decoded = jwt.verify(webhookData.data, accessToken);
} catch (error) {
  console.error("Error decoding JWT:", error);
}

if (decoded) {
  fs.writeFile(
    "decryptedData.json",
    JSON.stringify(decoded, null, 2),
    (err) => {
      if (err) {
        console.error("Error writing to file:", err);
      } else {
        console.log("Decoded data written to decryptedData.json");
      }
    }
  );
} else {
  console.log("Decoded data is not available.");
}
