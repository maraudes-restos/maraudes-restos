import { PrismaClient } from "../src/generated/prisma";

const prisma = new PrismaClient();

export default async function main() {
  await prisma.car.create({
    data: {
      name: "Kangoo",
      licensePlate: "FR-123-WW",
      status: {
        createMany: {
          data: [
            {
              type: "BOOKED",
              comment: "Goes brrrrr",
              effectiveAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000) // 7 days
            },
            {
              type: "OUT_OF_ORDER",
              comment: "Tire goes brrr",
            }
          ]
        }
      },
      trips: {
        createMany: {
          data: [
            {
              driverFirstname: "Jean",
              driverLastname: "Eude",
              driverPhone: "06 06 06 06 05",
            }
          ]
        }
      }
    }
  })
}

main();
