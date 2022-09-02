export const trending = (req, res) => res.send("trending");
export const newUser = (req, res) => res.send("New User");
export const see = (req, res) => res.send(`Watch Story #${req.params.id}`);
export const edit = (req, res) => res.send(`#${req.params.id} Edit`);
export const deleteStory = (req, res) =>
  res.send(`#${req.params.id} Delete Story`);
