import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    required: true
  },
});

export default mongoose.model('User', UserSchema);