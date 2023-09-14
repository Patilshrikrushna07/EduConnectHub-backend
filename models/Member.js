const { DataTypes, Sequelize } = require('sequelize');
const con = require('../connection/DbConnect');
const {isEmail} = require('validator');

const Member = con.sequelize.define('members', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    fname: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: "First Name is required."
            }
        }
    },
    lname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    country_code: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notNull: {
                msg: "Country code is required."
            }
        }
    },
    mobile_number: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            async isEmailUnique(mobile_number) {
                const member = await Member.findOne({ where: { mobile_number } });
                if (member) {
                    throw new Error("Mobile Number is already registered.");
                }
            }
        }
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: {
                args: true,
                msg: "Invalid email"
            },
            async isEmailUnique(email) {
                const member = await Member.findOne({ where: { email } });
                if (member) {
                    throw new Error("Email is already registered.");
                }
            }
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    city: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    state: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    is_email_verified: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    is_profile_verified: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    dob: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    image_name: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    cover_image_name: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    country_name: {
        type: DataTypes.STRING,
        allowNull: true,
    }
});
module.exports = Member;
