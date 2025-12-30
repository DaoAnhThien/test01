app.get('/user', (req, res) => {
    const userId = req.query.id;
    const query = "SELECT * FROM users WHERE id = '" + userId + "'";
    db.query(query, (err, result) => {
        res.send(result);
    });
});
