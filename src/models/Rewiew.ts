import mongoose, { Document } from 'mongoose';

const { Schema } = mongoose;

interface IRewiew extends Document {
  _id: string;
  product: string;
  rating: string;
  rewiew: string;
  user: string;
}

const RewiewSchema = new Schema<IRewiew>(
  {
    _id: { type: String, required: true },
    product: { type: String, required: true },
    rating: { type: String, required: true },
    rewiew: { type: String, required: true },
    user: { type: String, required: true },
  },
  { timestamps: true, collection: 'rewiews' },
);

export default mongoose.models.Rewiew || mongoose.model('Rewiew', RewiewSchema);
