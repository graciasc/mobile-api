

module.exports = {

  read(req, res) {
  res.send('Contact read')
  },
  delete(req, res) {
    res.send('Contact delete')
  },
  create(req, res) {
   res.send('Contact Creation')
  },
  list(req,res) {
    console.log('list ')
  }

};