import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
});

userSchema.pre("save", async (next: () => void) => {
    if (!this.isModified('password')) next();
    
    this.password = await bcrypt.hash(this.password, 15);

})

export default mongoose.models.User || mongoose.model("User", userSchema);