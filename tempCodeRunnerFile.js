
});

app.get("/users", async (req, res) => {
    const list = await selectAllUser();
    res.json(list);
  });

app.listen(4000, () => console.log("server started"));
