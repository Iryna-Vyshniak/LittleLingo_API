const missingRouteHandler = (req, res) => {
  res.status(404).json({ message: 'Not found' });
};

export default missingRouteHandler;
