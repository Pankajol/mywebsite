import { PrismaClient } from '@prisma/client';

declare global {
  // Allow `global.prisma` to be defined and have a type
  var prisma: PrismaClient | undefined;
}

export {}; // Ensure this file is a module to prevent errors

  