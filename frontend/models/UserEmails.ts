import mongoose from 'mongoose';

const userEmailsSchema = new mongoose.Schema({
  emails: { type: [String], required: true },
});

const UserEmails = mongoose.models.UserEmails || mongoose.model('UserEmails', userEmailsSchema);

export default UserEmails;
