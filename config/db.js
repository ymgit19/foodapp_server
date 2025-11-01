import mongoose from 'mongoose';

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://ymgithub19_db_user:yellowmaticsgit@foodapp.qkftsth.mongodb.net/?appName=foodapp"
    )
    .then(() => console.log('DB Connected'));
};
