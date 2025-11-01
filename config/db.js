import mongoose from 'mongoose';

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://yellowmaticsgit_db_user:gokulmanoj_db@cluster0.qnxwbh5.mongodb.net/?appName=Cluster0"
    )
    .then(() => console.log('DB Connected'));
};
