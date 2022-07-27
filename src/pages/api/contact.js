export default (req, res) => {
    console.log("body: %j", req.body)
    res.status(200).json({ status: 'OK' });
  }; 