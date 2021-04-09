const UserSchema = new Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },

  role: "admin",
});

module.exports = Admin = model("admin", UserSchema);
