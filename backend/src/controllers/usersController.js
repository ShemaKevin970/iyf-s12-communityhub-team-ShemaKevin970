
const users = [
  { id: 1, name: 'John Doe', email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
];

// GET /api/users
const getAllUsers = (req, res) => {
  res.status(200).json({
    success: true,
    count: users.length,
    data: users,
  });
};

// GET /api/users/:id
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

// POST /api/users
const createUser = (req, res) => {
  const { name, email } = req.body;

  if (!name || typeof name !== 'string' || !name.trim()) {
    return res.status(400).json({
      success: false,
      message: 'Name is required',
    });
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!email || !emailPattern.test(email)) {
    return res.status(400).json({
      success: false,
      message: 'A valid email is required',
    });
  }

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

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
};
