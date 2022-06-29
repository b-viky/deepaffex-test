import express from "express";
const app = express();
import * as dotenv from "dotenv";
import client from "@nuralogix.ai/dfx-api-client";
const apiClient = client();
dotenv.config();
const server_port = process.env.SERVER_PORT ?? "";
const port = server_port || 5000;
app.listen(port, () => {
    console.log(`Application started on ${port}...`);
});
export default app;
//# sourceMappingURL=app.js.map