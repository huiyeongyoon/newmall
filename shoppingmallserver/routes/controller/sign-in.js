
const signIn = (req, res) => {
  const { body: { id, password } } = req;

  if (id === 'test@test.com' && password === 'test!234') {
    return res.json({
      success: true,
      signInData: req.session.signInData
    });
  } else {
    return res.json({
      success: false
    });
  }
}

module.exports = {
  signIn
};
