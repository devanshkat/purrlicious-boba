const mongoose = require("mongoose");

const userEmailsSchema = new mongoose.Schema({
  emails: { type: [String], required: true },
});

const UserEmails = mongoose.models.UserEmails || mongoose.model('UserEmails', userEmailsSchema);

module.exports = UserEmails;
