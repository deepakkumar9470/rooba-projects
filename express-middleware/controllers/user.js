import User from '../models/User.js'


export const addUser = async (req, res) => {
  const { name, age, country } = req.body

  if (!name || !age || !country) {
    res.status(204).json('Please fill all fields')
  }

  try {
    const newUser = await new User({
      name: req.body.name,
      age: req.body.age,
      country: req.body.country,
    }).save();
    res.status(201).json({ status: "Ok", message: "User data added successfully", data: newUser })
  } catch (error) {
    res.status(500).json(error)
  }
  // res.send('Data received successfully');

}

export const getUsers = async (req, res) => {

  try {

    const user = await User.find({})
      .sort({ createdAt: -1 })
    res.status(200).json({
      status: "Ok",
      user
    })
  } catch (error) {
    res.status(400).json(error)
  }
}

export const getAggregateUsers = async (req, res) => {
  try {
    const aggUsers = await User.aggregate([
      {
        $group: {
          _id: "$country",
          totalUsers: { $sum: 1 },
          averageAge: { $avg: "$age" }
        }
      },
      {
        $project: {
          _id: 0,
          country: "$_id",
          totalUsers: 1,
          averageAge: 1
        }
      }
    ])
    res.status(200).json({
      status: "Ok",
      aggUsers
    })
  } catch (error) {
    res.status(400).json(error)
  }
}



