import mongoose, { Schema, model, models } from 'mongoose';

const ProjectSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String },
  createdBy: { 
    type: Schema.Types.ObjectId, 
    ref: 'User', 
    required: true 
  },
  members: [{ 
    type: Schema.Types.ObjectId, 
    ref: 'User' 
  }],
}, { timestamps: true });

const Project = models.Project || model('Project', ProjectSchema);
export default Project;