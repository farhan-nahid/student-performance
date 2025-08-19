import * as fs from 'fs';
import * as Papa from 'papaparse';

interface Student {
  gender: string;
  exam_result: string;
  age: number;
  class: number;
  parent_educated: string;
  daily_study_hours: number;
  attendance_percentage: number;
  family_income: string;
  extracurricular: string;
  sleep_hours: number;
  internet_access: string;
  previous_grade: string;
  learning_style: string;
  school_type: string;
  teacher_quality: string;
  stress_level: string;
  distance_to_school: number;
  tutoring: string;
}

async function loadDataset(filePath: string): Promise<Student[]> {
  return new Promise((resolve, reject) => {
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    Papa.parse(fileContent, {
      header: true,
      dynamicTyping: true,
      complete: (result) => resolve(result.data as Student[]),
      error: (error: any) => reject(error),
    });
  });
}

// 1. P(female AND pass)
async function computeFemaleAndPass(): Promise<number> {
  const data = await loadDataset('student_performance_extended_dataset.csv');
  const matchingRows = data.filter(row => row.gender === 'female' && row.exam_result === 'pass');
  return matchingRows.length / data.length;
}

// 2. P(female AND fail)
async function computeFemaleAndFail(): Promise<number> {
  const data = await loadDataset('student_performance_extended_dataset.csv');
  const matchingRows = data.filter(row => row.gender === 'female' && row.exam_result === 'fail');
  return matchingRows.length / data.length;
}

// 3. P(male AND pass)
async function computeMaleAndPass(): Promise<number> {
  const data = await loadDataset('student_performance_extended_dataset.csv');
  const matchingRows = data.filter(row => row.gender === 'male' && row.exam_result === 'pass');
  return matchingRows.length / data.length;
}

// 4. P(male AND fail)
async function computeMaleAndFail(): Promise<number> {
  const data = await loadDataset('student_performance_extended_dataset.csv');
  const matchingRows = data.filter(row => row.gender === 'male' && row.exam_result === 'fail');
  return matchingRows.length / data.length;
}

// 5. P(pass AND high income)
async function computePassAndHighIncome(): Promise<number> {
  const data = await loadDataset('student_performance_extended_dataset.csv');
  const matchingRows = data.filter(row => row.exam_result === 'pass' && row.family_income === 'high');
  return matchingRows.length / data.length;
}

// 6. P(fail AND low income)
async function computeFailAndLowIncome(): Promise<number> {
  const data = await loadDataset('student_performance_extended_dataset.csv');
  const matchingRows = data.filter(row => row.exam_result === 'fail' && row.family_income === 'low');
  return matchingRows.length / data.length;
}

// 7. P(pass AND parent educated)
async function computePassAndParentEducated(): Promise<number> {
  const data = await loadDataset('student_performance_extended_dataset.csv');
  const matchingRows = data.filter(row => row.exam_result === 'pass' && row.parent_educated === 'yes');
  return matchingRows.length / data.length;
}

// 8. P(fail AND parent not educated)
async function computeFailAndParentNotEducated(): Promise<number> {
  const data = await loadDataset('student_performance_extended_dataset.csv');
  const matchingRows = data.filter(row => row.exam_result === 'fail' && row.parent_educated === 'no');
  return matchingRows.length / data.length;
}

// 9. P(pass AND extracurricular)
async function computePassAndExtracurricular(): Promise<number> {
  const data = await loadDataset('student_performance_extended_dataset.csv');
  const matchingRows = data.filter(row => row.exam_result === 'pass' && row.extracurricular === 'yes');
  return matchingRows.length / data.length;
}

// 10. P(fail AND no extracurricular)
async function computeFailAndNoExtracurricular(): Promise<number> {
  const data = await loadDataset('student_performance_extended_dataset.csv');
  const matchingRows = data.filter(row => row.exam_result === 'fail' && row.extracurricular === 'no');
  return matchingRows.length / data.length;
}

// 11. P(pass AND internet access)
async function computePassAndInternetAccess(): Promise<number> {
  const data = await loadDataset('student_performance_extended_dataset.csv');
  const matchingRows = data.filter(row => row.exam_result === 'pass' && row.internet_access === 'yes');
  return matchingRows.length / data.length;
}

// 12. P(fail AND no internet access)
async function computeFailAndNoInternetAccess(): Promise<number> {
  const data = await loadDataset('student_performance_extended_dataset.csv');
  const matchingRows = data.filter(row => row.exam_result === 'fail' && row.internet_access === 'no');
  return matchingRows.length / data.length;
}

// 13. P(pass AND previous grade = A)
async function computePassAndPreviousGradeA(): Promise<number> {
  const data = await loadDataset('student_performance_extended_dataset.csv');
  const matchingRows = data.filter(row => row.exam_result === 'pass' && row.previous_grade === 'A');
  return matchingRows.length / data.length;
}

// 14. P(fail AND previous grade = F)
async function computeFailAndPreviousGradeF(): Promise<number> {
  const data = await loadDataset('student_performance_extended_dataset.csv');
  const matchingRows = data.filter(row => row.exam_result === 'fail' && row.previous_grade === 'F');
  return matchingRows.length / data.length;
}

// 15. P(pass AND visual learning)
async function computePassAndVisualLearning(): Promise<number> {
  const data = await loadDataset('student_performance_extended_dataset.csv');
  const matchingRows = data.filter(row => row.exam_result === 'pass' && row.learning_style === 'visual');
  return matchingRows.length / data.length;
}

// 16. P(fail AND kinesthetic learning)
async function computeFailAndKinestheticLearning(): Promise<number> {
  const data = await loadDataset('student_performance_extended_dataset.csv');
  const matchingRows = data.filter(row => row.exam_result === 'fail' && row.learning_style === 'kinesthetic');
  return matchingRows.length / data.length;
}

// 17. P(pass AND public school)
async function computePassAndPublicSchool(): Promise<number> {
  const data = await loadDataset('student_performance_extended_dataset.csv');
  const matchingRows = data.filter(row => row.exam_result === 'pass' && row.school_type === 'public');
  return matchingRows.length / data.length;
}

// 18. P(fail AND private school)
async function computeFailAndPrivateSchool(): Promise<number> {
  const data = await loadDataset('student_performance_extended_dataset.csv');
  const matchingRows = data.filter(row => row.exam_result === 'fail' && row.school_type === 'private');
  return matchingRows.length / data.length;
}

// 19. P(pass AND high teacher quality)
async function computePassAndHighTeacherQuality(): Promise<number> {
  const data = await loadDataset('student_performance_extended_dataset.csv');
  const matchingRows = data.filter(row => row.exam_result === 'pass' && row.teacher_quality === 'high');
  return matchingRows.length / data.length;
}

// 20. P(fail AND low teacher quality)
async function computeFailAndLowTeacherQuality(): Promise<number> {
  const data = await loadDataset('student_performance_extended_dataset.csv');
  const matchingRows = data.filter(row => row.exam_result === 'fail' && row.teacher_quality === 'low');
  return matchingRows.length / data.length;
}

// Main function to demonstrate usage
async function main() {
  try {
    console.log(`P(female AND fail) = ${(await computeFemaleAndFail()).toFixed(4)}`);
    console.log(`P(male AND fail) = ${(await computeMaleAndFail()).toFixed(4)}`);
    console.log(`P(fail AND low income) = ${(await computeFailAndLowIncome()).toFixed(4)}`);
  } catch (error) {
    console.error('Error:', error);
  }
}

main();