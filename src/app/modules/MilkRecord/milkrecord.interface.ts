import { Types } from "mongoose";

type ObjectId = Types.ObjectId;

export interface IMilkRecord {
  cowId: ObjectId;
  lactationId: ObjectId;
  date: Date;
  morningYield: number;
  eveningYield: number;
  totalYield?: number;
  createdAt?: Date;
  isDeleted: boolean;
  updatedAt?: Date;
}