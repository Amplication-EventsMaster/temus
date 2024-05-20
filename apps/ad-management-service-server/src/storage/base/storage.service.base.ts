/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Storage as PrismaStorage } from "@prisma/client";

export class StorageServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.StorageCountArgs, "select">): Promise<number> {
    return this.prisma.storage.count(args);
  }

  async storages<T extends Prisma.StorageFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.StorageFindManyArgs>
  ): Promise<PrismaStorage[]> {
    return this.prisma.storage.findMany<Prisma.StorageFindManyArgs>(args);
  }
  async storage<T extends Prisma.StorageFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.StorageFindUniqueArgs>
  ): Promise<PrismaStorage | null> {
    return this.prisma.storage.findUnique(args);
  }
  async createStorage<T extends Prisma.StorageCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.StorageCreateArgs>
  ): Promise<PrismaStorage> {
    return this.prisma.storage.create<T>(args);
  }
  async updateStorage<T extends Prisma.StorageUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.StorageUpdateArgs>
  ): Promise<PrismaStorage> {
    return this.prisma.storage.update<T>(args);
  }
  async deleteStorage<T extends Prisma.StorageDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.StorageDeleteArgs>
  ): Promise<PrismaStorage> {
    return this.prisma.storage.delete(args);
  }
}