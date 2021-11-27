
const TempLoginInfo = {
  userId: 1,
  id: 'test@test.com',
  password: 'test!234',
};

const signIn = (req, res) => {
  const { body: { id, password } } = req;

  if (TempLoginInfo.id === id && TempLoginInfo.password === password) {
    req.session.userId = TempLoginInfo.userId;
    res.json({ ok: true });
    return;
  }
  res.json({ ok: false });
};


module.exports = {
  signIn
};


