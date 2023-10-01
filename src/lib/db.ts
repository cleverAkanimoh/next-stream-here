// import { PrismaClient } from "@prisma/client";

// const globalForPrisma = global as unknown as {
//   prisma: PrismaClient | undefined;
// };

// export const prisma =
//   globalForPrisma.prisma ??
//   new PrismaClient({
//     log: ["query"],
//   });

// if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma

export const data = [
  {
    name: "clever",
    serial: 100,
  },
  {
    name: "collins",
    serial: 101,
  },
  {
    name: "crush",
    serial: 293,
  },
  {
    name: "mosh",
    serial: 189,
  },
  {
    name: "dutch",
    serial: 574,
  },
  {
    name: "flawless",
    serial: 134,
  },
  {
    name: "danty",
    serial: 166,
  },
  {
    name: "flower",
    serial: 876,
  },
  {
    name: "cherry",
    serial: 987,
  },
  {
    name: "rose",
    serial: 970,
  },
  {
    name: "rose",
    serial: 971,
  },
  {
    name: "danty",
    serial: 167,
  },
  {
    name: "clever",
    serial: 101,
  },
  {
    name: "flower",
    serial: 875,
  },
];

export const chatUsers = [
  { name: "clever", msg: "clever Ipsum dolor sit amen" },
  { name: "collins", msg: "collins Ipsum dolor sit amen" },
  { name: "crush", msg: "crush Ipsum dolor sit amen" },
  { name: "mosh", msg: "mosh Ipsum dolor sit amen" },
  { name: "dutch", msg: "dutch Ipsum dolor sit amen" },
  { name: "flawless", msg: "flawless Ipsum dolor sit amen" },
  { name: "danty", msg: "danty Ipsum dolor sit amen" },
  { name: "flower", msg: "flower Ipsum dolor sit amen" },
  { name: "cherry", msg: "cherry Ipsum dolor sit amen" },
  { name: "rose", msg: "rose Ipsum dolor sit amen" },
];
