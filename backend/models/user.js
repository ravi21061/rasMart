const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true
        },
        password: {
            type: String,
            required: true
        },
        role: {  // Admin, Vendor, Customer, Delivery Agent for access control
            type: String,
            required: true,
            enum: ["admin", "vendor", "customer", "delivery"],
            default: "customer"
        },
        phone: {
            type: String,
        },
        isVerified: {  // Email/mobile verification
            type: Boolean,
            default: false
        },
        twoFactorEnabled: {  // 2FA toggle
            type: String,
            default: false
        },
        kycDetails: {  // Vendor KYC & Bank details
            aadhar: String,
            pan: String,
            bankAccount: String,
            ifscCode: String,
            approved: {
                type: Boolean,
                default: false
            }
        },
        addressBook: [{  // Multiple shipping addresses of customer
            name: String,
            phone: String,
            pincode: String,
            locality: String,
            address: String,
            city: String,
            state: String,
            landmark: String,
            alternatePhone: String,
            addressType: {
                type: String,
                enum: ["home", "work", "other"],
                default: "home"
            }
        }],
        resetToken: String,  //	Forgot/Reset Password support
        resetTokenExpiry: Date
    },
    {
        timestamps: true
    }
);

const User = mongoose.model("User", userSchema);

module.exports = User;