
import dbConnect from "@/config/dbConnect";
import User from "@/models/user"

export default async function handler(req: any, res: any) {
  // const { firstname, lastname, email, category, passcode } = req.body;

  // const User = { firstname, lastname, email, category, passcode };

  // const user = await prisma.user.create({ data: User });
 
  // console.log(user);
  
  if (req.method === "POST") {
    dbConnect();
    
    const {name, email, password} = req.body;
    
    const user = await User.create({name, email, password})
    
    res.status(201).json({user});
  }
}
