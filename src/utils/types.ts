import { 
      User, 
      Test, 
      Discipline, 
      Teacher,
      Term, 
      Category, 
      TeacherDiscipline 
    } from "@prisma/client";

export type CreateUserData = Omit<User, "id">;

export type TestDB = Omit<Test, "id">;

export type CreateTestData = {
  name: string;
  pdfUrl: string;
  category: string;
  discipline: string;
  teacher: string;
};

export type CategoryData = Category;

export type TestTeacherData = {
  id: number;
  discipline: Discipline & {
      term: Term;
      teacherDisciplines: TeacherDiscipline[];
  };
  teacher: Teacher;
  tests: {
      id: number;
      name: string;
      pdfUrl: string;
      category: Category;
  }[];
};

export type TestDisciplineData = {
  number: number,
  id: number,
  disciplines: {
    id: number,
    name: string,
    teacherDisciplines: {
      id: number,
      discipline: {
        id: number,
        name: string,
      };
      teacher: {
        id: number,
        name: string,
      };
      tests: {
        id: number,
        name: string,
        pdfUrl: string,
        category: Category,
      }[];
    }[],
    term: Term,
  }[];
};