// Day 2 Exercise: Users API

// Temporary users data
const users = [
  { id: 1, name: 'John Doe', email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
];

// GET all users
const getAllUsers = (req, res) => {
  res.status(200).json({
    success: true,
    count: users.length,
    data: users,
  });
};

// GET one user by ID
const getUserById = (req, res) => {
  const id = Number(req.params.id);
  const user = users.find((user) => user.id === id);

  if (!user) {
    return res.status(404).json({
      success: false,
      message: 'User not found',
    });
  }

  res.status(200).json({
    success: true,
    data: user,
  });
};

// POST create a new user
const createUser = (req, res) => {
  const { name, email } = req.body;

  // Validate name
  if (!name || typeof name !== 'string' || !name.trim()) {
    return res.status(400).json({
      success: false,
      message: 'Name is required',
    });
  }

  // Validate email format
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!email || typeof email !== 'string' || !emailPattern.test(email.trim())) {
    return res.status(400).json({
      success: false,
      message: 'A valid email is required',
    });
  }

  // Prevent duplicate email addresses
  const normalizedEmail = email.trim().toLowerCase();

  const duplicate = users.find(
    (user) => user.email.toLowerCase() === normalizedEmail
  );

  if (duplicate) {
    return res.status(400).json({
      success: false,
      message: 'Email already exists',
    });
  }

  // Create the new user
  const newUser = {
    id: users.length ? Math.max(...users.map((user) => user.id)) + 1 : 1,
    name: name.trim(),
    email: normalizedEmail,
  };

  users.push(newUser);

  res.status(201).json({
    success: true,
    message: 'User created successfully',
    data: newUser,
  });
};

// Export functions for use in other files
module.exports = {
  getAllUsers,
  getUserById,
  createUser,
};