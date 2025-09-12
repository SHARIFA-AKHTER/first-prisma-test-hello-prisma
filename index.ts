
import { PrismaClient } from './generated/prisma'
const prisma = new PrismaClient()
async function main() {

//    console.log("Hello from Prisma!!!"); 

// const result = await prisma.user.create({
//     data: {
//         name: "Mahin",
//         email: "mahin@gmail.com",
//         profilePhoto: "https://isbsp.daffodilvarsity.edu.bd/beautiful-bangladesh/"
//     }
// })
// console.log(result);

// const usersData = await prisma.user.findMany({
//     where: {
//          id: 3,

//         name: "Shahin",
//         email:"shahin@gmail.com"
//     }
// })
// console.log(usersData);

// const usersData = await prisma.user.findMany({
   
// })
// console.log(usersData);

// 

// const updateUser = await prisma.user.update({
//     where: {
//         id: 1,
        
//     },
//     data: {
//         name: "Shahin",
//         email: "shahin@gmail.com"
//     }
// })

// console.log(updateUser);

// const updateProfilePhoto = await prisma.user.updateMany({
//     where: {
//         id: 1
//     },
//     data: {
//         profilePhoto: "https://www.shutterstock.com/default-image/close-head-shot-portrait-preppy-young-1433809418"
//     }
// })
// console.log(updateProfilePhoto);

// const updateProfilePhoto = await prisma.user.updateManyAndReturn({
//     where: {
//         id: {
//             gt: 2
//         }
//     },
//     data: {
//         profilePhoto: "https://isbsp.daffodilvarsity.edu.bd/beautiful-bangladesh/"
//     }
// })
// console.log(updateProfilePhoto);

// const deleteUser = await prisma.user.delete({
//     where: {
//         id: 1
//     }
// })
// console.log(deleteUser);

// const deleteUser = await prisma.user.deleteMany({
//     where: {
//         id: {
//             lt: 3
//         }
//     }
// })
// console.log(deleteUser);

// console.log(await prisma.user.deleteMany());

}

main()