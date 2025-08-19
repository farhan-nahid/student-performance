import Papa from "papaparse";
import type { Student } from "./type";

export async function loadDataset(): Promise<Student[]> {
  return new Promise(async (resolve, reject) => {
    const filePath = 'data/student_performance_dataset.csv';
    const fileContent = await Bun.file(filePath).text();
    Papa.parse(fileContent, {
      header: true,
      dynamicTyping: true,
      complete: (result) => resolve(result.data as Student[]),
      error: (error: any) => reject(error),
    });
  });
}