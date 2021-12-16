module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '057b345a8621ea946bd1a123d57f6b68'),
  },
});
