const withAuth = (req, res, next) => {
    if (req.session.userID) {
        next();
    } else {
        res.status(401).json({ message: 'Unauthorized' });
    }
};