const asyncHandler = require("express-async-handler");

//@desc - Get all Contacts
//@route - GET /api/contacts
//@access - Public
const getContacts = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get all contacts" });
});

//@desc - Create new Contact
//@route - POST /api/contacts
//@access - Public
const createContact = asyncHandler(async (req, res) => {
  console.log("The request body is: ", req.body);
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("All fields are mandatory");
  }
  res.status(201).json({ message: "Create Contact" });
});

//@desc - Get Contact by ID
//@route - GET /api/contacts/:id
//@access - Public
const getContact = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Get contact for ${req.params.id} ` });
});

//@desc - Update Contact
//@route - PUT /api/contacts/:id
//@access - Public
const updateContact = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update contact for ${req.params.id} ` });
});

//@desc - Delete Contact
//@route - DELETE /api/contacts/:id
//@access - Public
const deleteContact = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete contact for ${req.params.id} ` });
});

module.exports = {
  getContacts,
  createContact,
  getContact,
  updateContact,
  deleteContact,
};
