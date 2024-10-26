import { model, Schema } from "mongoose";
import IPregnancy from "./pregnancy.interface"; 

const pregnancySchema = new Schema<IPregnancy>(
  {
    cowId: { type: Schema.Types.ObjectId, ref: 'Cow', required: true },
    aiState: { type: Boolean, default: false }, 
    checkStatus: { type: String, enum: ['Pending', 'Confirmed', 'Failed'], default: 'Pending' },
    checkedDate: { type: Date }, 
    semenInfo: { type: String }, 
    deliveryStatus: { type: String, enum: ['Not Due', 'Due Soon', 'Delivered'], default: 'Not Due' }, 
  },
  { timestamps: true }
);

export const Pregnancy = model<IPregnancy>("Pregnancy", pregnancySchema);