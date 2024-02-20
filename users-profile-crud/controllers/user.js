import User from '../models/User.js'


export const addUserProfile =async  (req,res) =>{
      const file  = req.file.filename
      const {firstName,lastName,email,mobile,gender,location,status} = req.body

      if(!firstName || !lastName || !email || !mobile || !gender|| !location || !status){
        res.status(204).json('Please fill all fields')
      }

     try {
        const user = await User.findOne({email : email})
        if(user)  res.status(204).json('User Profile already exists')
        const newUser = await new User({
            firstName  :req.body.firstName,
            lastName  :req.body.lastName,
            email  :req.body.email,
            mobile  :req.body.mobile,
            gender  :req.body.gender,
            location  :req.body.location,
            status  :req.body.status,
            profile : file,
         }).save()
         res.status(201).json({status:"Ok", message:"User data added successfully", data:newUser})
     } catch (error) {
        res.status(500).json(error)
     }
}

export const getUsersProfile = async (req,res) =>{

    try {
      
        const user = await User.find({})
        .sort({createdAt : -1 })
        res.status(200).json({
            status: "Ok",
            user
        })   
    } catch (error) {
       res.status(400).json(error)   
    }
}

export const getSingleUserProfile = async (req,res) =>{
    const {id} = req.params
    try {
        const user = await User.findOne({_id:  id})
        res.status(200).json(user)   
    } catch (error) {
       res.status(400).json(error)   
    }
}


export const editUserProfile = async (req,res) =>{
    const {id} = req.params
    const {firstName,lastName,email,mobile,gender,location,status,users_profile} = req.body
    const file = req.file ? req.file.filename : user_profile
    
    try {
        
        const updateUser = await User.findByIdAndUpdate({_id:id},{
                firstName,lastName,email,mobile,gender,location,status, 
                profile:file
                } ,{new : true})
         
         await updateUser.save()
         res.status(200).json(updateUser)
        } catch (error) {
       res.status(400).json(error)   
    }
}

export const deleteUserProfile = async (req,res) =>{
    const {id} = req.params   
    try {        
        await User.findByIdAndDelete({_id:id})
        res.status(200).json('User has been deleted')
        } catch (error) {
          res.status(400).json(error)   
    }
}

