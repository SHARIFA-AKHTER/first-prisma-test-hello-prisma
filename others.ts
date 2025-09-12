import { PrismaClient } from "./generated/prisma";

const prisma = new PrismaClient();

async function others() {
//   const insertUsers = await prisma.user.createMany({
//     data: [
//       { name: "Shahin", email: "shahin@gmail.com" },
//       { name: "Rupa", email: "rupa@gmail.com" },
//       { name: "Arif", email: "arif@gmail.com" },
//       { name: "Mitu", email: "mitu@gmail.com" },
//       { name: "Tanvir", email: "tanvir@gmail.com" },
//       { name: "Joya", email: "joya@gmail.com" },
//       { name: "Nabil", email: "nabil@gmail.com" },
//       { name: "Keya", email: "keya@gmail.com" },
//       { name: "Mamun", email: "mamun@gmail.com" },
//       { name: "Farzana", email: "farzana@gmail.com" },
//     ]
//     ,
//     skipDuplicates: true,
//   });

//   console.log(insertUsers);

const users = await prisma.user.findMany({

    where:{
        name: {
            contains:"hi" ,//case sensitive
            mode: "insensitive"
        }
    },
    orderBy: {
        // id: 'desc'
        name: 'asc'
    }
})
console.log(users);

}

others();

