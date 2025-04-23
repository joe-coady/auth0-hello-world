const { PrismaClient } = require('./generated/prisma');
const prisma = new PrismaClient();

async function main() {
  await prisma.user.createMany({
    data: [
      { name: 'Joe', email: 'joe@example.com' },
      { name: 'Tam', email: 'tam@example.com' },
      { name: 'Cruise', email: 'cruise@example.com' },
    ],
    skipDuplicates: true, // Optional if running multiple times
  });

  console.log('Seeded users!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
