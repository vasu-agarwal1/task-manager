import mongoose, { Schema, model, models } from 'mongoose';

const TaskSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String },
  project: { 
    type: Schema.Types.ObjectId, 
    ref: 'Project', 
    required: true 
  },
  assignedTo: { 
    type: Schema.Types.ObjectId, 
    ref: 'User' 
  },
  status: { 
    type: String, 
    enum: ['To Do', 'In Progress', 'Done'], 
    default: 'To Do' 
  },
  dueDate: { type: Date },
}, { timestamps: true });

const Task = models.Task || model('Task', TaskSchema);
export default Task;