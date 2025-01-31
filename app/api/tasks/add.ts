// import { NextApiRequest, NextApiResponse } from "next";
// import dbConnect from "../../../lib/dbConnect";
// import Task from "../../../models/Task";

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   await dbConnect();

//   if (req.method === "POST") {
//     const { username, text } = req.body;

//     if (!username || !text) {
//       return res.status(400).json({ message: "Username and task text are required." });
//     }

//     try {
//       const task = await Task.create({ username, text, completed: false });
//       res.status(201).json(task);
//     } catch (error) {
//       res.status(500).json({ message: "Error adding task", error });
//     }
//   } else {
//     res.setHeader("Allow", ["POST"]);
//     res.status(405).end(`Method ${req.method} Not Allowed`);
//   }
// }
