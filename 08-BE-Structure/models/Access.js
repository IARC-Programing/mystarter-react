const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const schema = new mongoose.Schema(
  {
    HRMS: {
      type: Boolean,
      default: false,
    },
    CRM: {
      type: Boolean,
      default: false,
    },
    IMS: {
      type: Boolean,
      default: false,
    },
    MMS: {
      type: Boolean,
      default: false,
    },
    SPM: {
      type: Boolean,
      default: false,
    },
    WMS: {
      type: Boolean,
      default: false,
    },
    PMS: {
      type: Boolean,
      default: false,
    },
    SETTING: {
      type: Boolean,
      default: true,
    },

    DASHBOARD: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

// Apply the uniqueValidator plugin to userSchema.
schema.plugin(uniqueValidator);

// Access JSON Response
schema.methods.toJSON = function () {
  return {
    id: this._id,
    _id: this._id,
    HRMS: this.HRMS,
    CRM: this.CRM,
    IMS: this.IMS,
    MMS: this.MMS,
    SPM: this.SPM,
    WMS: this.WMS,
    PMS: this.PMS,
    SETTING: this.SETTING,
    DASHBOARD: this.DASHBOARD,
    REPORT: this.REPORT,
    createdAt: this.createdAt,
    updatedAt: this.updatedAt,
  };
};

// Custom field before save
schema.pre("save", (next) => {
  next();
});

const Access = mongoose.model("Access", schema);
const AvailableModule = mongoose.model("AvailableModule", schema);

module.exports = { Access, schema, AvailableModule };
