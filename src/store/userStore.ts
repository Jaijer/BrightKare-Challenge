import { create } from "zustand";
import {PrismaClient} from '@prisma/client';

interface UserState {
    name: string
    age: number
    address: string
    job: string
    phone: string
    email: string
    BMI: number
    Weight: number
    Height: number
    Blood_P: number
}

const prisma = new PrismaClient();
async function main() {
    const all = await prisma.user.findMany()
    return (all)
  }
export const useUserStore = create<UserState>()((set)=> ({
    name: "Ali Al Sules",
    age: 20,
    address: "Qatif",
    job: "Developer",
    phone: "0561817688",
    email: "asules2003@gmail.com",
    BMI: 100,
    Weight: 70,
    Height: 170,
    Blood_P: 80
}))