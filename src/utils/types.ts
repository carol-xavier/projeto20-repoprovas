import { User, Test } from "@prisma/client";

export type CreateUserData = Omit<User, "id">;

export type CreateTestData = {
    name: string;
    pdfUrl: string;
    category: string;
    discipline: string;
    teacher: string;
  };

export type TestDB = Omit<Test, "id">;