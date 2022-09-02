export const join = (req, res) => res.send("Join");
export const login = (req, res) => res.send("Login");
export const editProfile = (req, res) => res.send("Edit Profile");
export const home = (req, res) => res.send("home");
export const user = (req, res) => res.send("user");
export const see = (req, res) => res.send(`See User #${req.params.id}`);
