// middleware/role.js
const isAdmin = (req, res, next) => {
  if (req.user && (req.user.role === 'COLLEGE_ADMIN' || req.user.role === 'SUPER_ADMIN')) return next();
  return res.status(403).json({ error: 'Admin role required' });
};

const isStudent = (req, res, next) => {
  if (req.user && req.user.role === 'STUDENT') return next();
  return res.status(403).json({ error: 'Student role required' });
};

module.exports = { isAdmin, isStudent };
