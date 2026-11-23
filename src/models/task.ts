import { type Document, model, models, Schema } from "mongoose";
import type { ITask } from "@/types/common";

const taskSchema = new Schema<ITask & Document>({
  title: { type: String, requited: true },
  description: { type: String, required: true },
  priority: String,
  dueDate: String,
  dueTime: String,
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

export const Task = models.Task || model<ITask & Document>("Task", taskSchema);
