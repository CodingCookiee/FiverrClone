 // register a user
export const register =
  ("/",
  async (req, res) => {
    try {
      const newUser = new User({
        username:'test',
        email: 'test',
        password: 'test', 
        country:'test'
      })
      const savedUser = await newUser.save()
      res.status(201).send('New User has been created');
      res.json(savedUser)
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Internal server error" });
    }
  });

// login a user
export const login =
  ("/",
  async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(401).json({ message: "Invalid email or password" });
      }
      const isValidPassword = await bcrypt.compare(password, user.password);
      if (!isValidPassword) {
        return res.status(401).json({ message: "Invalid email or password" });
      }
      const token = jwt.sign({ userId: user._id }, process.env.SECRET_KEY, {
        expiresIn: "1h",
      });
      res.json({ token });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Internal server error" });
    }
  });

// logout a user
export const logout =
  ("/",
  async (req, res) => {
    try {
      res.clearCookie("token");
      res.json({ message: "Logged out successfully" });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Internal server error" });
    }
  });
