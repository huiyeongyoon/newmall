// 2객체 접근
const signIn = (req, res) => {
  const { body: { id, password } } = req;

  // res.setHeader('Access-Control-Allow-Origin', '*'); // CORS

  if (id === 'test@test.com' && password === 'test!234') {
    res.json({
      success: true
    });
  } else {
    res.json({
      success: false
    });
  }
}

// 3밖으로 내보내기
module.exports = {
  signIn
};
