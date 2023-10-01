"use server";

import { prisma } from "@/db";
import hashUserPass from "@/lib/bcrypt";

type UserType = {
  firstname: string;
  lastname: string;
  email: string;
  category: string;
  passcode: string;
};

export default async function signupAction(data: UserType) {

  const { firstname, lastname, email, category, passcode } = data;
  
  const User = { firstname, lastname, email, category, passcode }

  await prisma.user.create({ data: User });
}
