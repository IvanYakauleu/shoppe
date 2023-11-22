import mongoose, { Document } from 'mongoose';

const { Schema } = mongoose;

interface IJewelry extends Document {
  name: string;
  img: string;
  desc: string;
  count: number;
  material: string;
  weight: string;
  price: number;
  dimensions: string;
  colors: string[];
  categories: string;
  rating: string;
}

const ItemSchema = new Schema<IJewelry>(
  {
    name: { type: String, required: true },
    img: { type: String, required: true },
    desc: { type: String, required: true },
    count: { type: Number, required: true },
    material: { type: String, required: true },
    weight: { type: String, required: true },
    price: { type: Number, required: true },
    dimensions: { type: String, required: true },
    colors: { type: [String], required: true },
    categories: { type: String, required: true },
    rating: { type: String, required: true },
  },
  { timestamps: true, collection: 'items' },
);

export default mongoose.models.Item || mongoose.model('Item', ItemSchema);
