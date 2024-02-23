import UserModels from "../models/User.js";
import userModels from "../models/User.js";

const Createuser=async(req,res)=>{
   try {
    
    const {name,fathername,email,phone}=req.body
   const NewUser= new userModels({
    name,fathername,email,phone
   })
   await NewUser.save();
   res.status(200).json({success:true,Message:'User Created successfully',NewUser})
   } catch (error) {

    console.log(error);
    res.status(500).json({success:false,Message:'server error',NewUser})
    
   }
}


//read api

const GetUser=async (req,res)=>{
  try {
     const user = await UserModels.find()
     if(!user){
       return res.status(404).json({success:false,message:'user not found'})
     }
     res.status(200).json({success:true,user})
   
  } catch (error) {
   console.log(error);
   return res.status(500).json({success:false,message:'internal server error'});
   
  }
}


//update user

const UpdateUser= async (req,res)=>{
       try {
         const UserId=req.params.id;
         const updateUser =await UserModels.findByIdAndUpdate(UserId,req.body,{new:true});
         if(!updateUser){
            return res.staus(404).json({success:false,message:'user not found'});
         }
         res.status(200).json({success:true,message:'User updated successfully',updateUser})
         
       } catch (error) {
         console.log(error);
         return res.status(500).json({success:false, message:'internal server error'});
         
       }
}


//delete user

const DeleteUser=async (req,res)=>{
   try {
      const UserId=req.params.id
      const deletedUser= await UserModels.findByIdAndDelete(UserId);
      if(!deletedUser){
         return res.status(404).json({success:false,message:"user not deleted"})
      }

      res.status(200).json({success:true,message:'user deleted successfully'})
   } catch (error) {
       console.log(error);
       return res.status(500).json({success:false,message:'internal server error'});
   }

}
export { Createuser, GetUser, UpdateUser, DeleteUser };


