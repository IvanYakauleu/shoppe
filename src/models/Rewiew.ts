import mongoose, { Document } from 'mongoose';

const { Schema } = mongoose;

interface IRewiew extends Document {
  product: string;
  rating: string;
  review: string;
  user: string;
  email: string;
}

const RewiewSchema = new Schema<IRewiew>(
  {
    product: { type: String, required: true },
    rating: { type: String, required: true },
    review: { type: String, required: true },
    user: { type: String, required: true },
    email: { type: String, required: true },
  },
  { timestamps: true, collection: 'rewiews' },
);

export default mongoose.models.Rewiew || mongoose.model('Rewiew', RewiewSchema);
