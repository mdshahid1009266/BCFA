import mongoose from "mongoose";
const URL="mongodb+srv://shahidtemp7384:mdshahid7384@cluster0.qgbgt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
// const connection = async () => {
//     try {
//         await mongoose.connect(URL);
//         console.log("database connected");
//     } catch (error) {
//         console.log(error.message);
//     }
// }
// export default connection;


async function connectToDatabase() {
  try {
    await mongoose.connect(URL);
    console.log('Database connected');

    mongoose.connection.on('connected', () => {
      console.log('Database connection established');
    });

    mongoose.connection.on('error', (err) => {
      console.error('Database connection error:', err);
      // Handle the error gracefully, e.g., display an error message to the user
    });

    mongoose.connection.on('disconnected', () => {
      console.log('Database disconnected');
      // Attempt to reconnect or notify the user
    });
  } catch (error) {
    console.error('Connection failed:', error.message);
    // Handle the error appropriately, e.g., retry connection or display a user-friendly message
  }
}

export default connectToDatabase;
