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

// 1. P(high stress | fail)
async function computeHighStressGivenFail(): Promise<number> {
  const data = await loadDataset('student_performance_dataset.csv');
  const failRows = data.filter(row => row.exam_result === 'fail');
  const highStressFailRows = failRows.filter(row => row.stress_level === 'high');
  return failRows.length > 0 ? highStressFailRows.length / failRows.length : 0;
}

// 2. P(low stress | pass)
async function computeLowStressGivenPass(): Promise<number> {
  const data = await loadDataset('student_performance_dataset.csv');
  const passRows = data.filter(row => row.exam_result === 'pass');
  const lowStressPassRows = passRows.filter(row => row.stress_level === 'low');
  return passRows.length > 0 ? lowStressPassRows.length / passRows.length : 0;
}

// 3. P(tutoring | fail)
async function computeTutoringGivenFail(): Promise<number> {
  const data = await loadDataset('student_performance_dataset.csv');
  const failRows = data.filter(row => row.exam_result === 'fail');
  const tutoringFailRows = failRows.filter(row => row.tutoring === 'yes');
  return failRows.length > 0 ? tutoringFailRows.length / failRows.length : 0;
}

// 4. P(no tutoring | pass) 
async function computeNoTutoringGivenPass(): Promise<number> {
  const data = await loadDataset('student_performance_dataset.csv');
  const passRows = data.filter(row => row.exam_result === 'pass');
  const noTutoringPassRows = passRows.filter(row => row.tutoring === 'no');
  return passRows.length > 0 ? noTutoringPassRows.length / passRows.length : 0;
}

// 5. P(high income | pass)
async function computeHighIncomeGivenPass(): Promise<number> {
  const data = await loadDataset('student_performance_dataset.csv');
  const passRows = data.filter(row => row.exam_result === 'pass');
  const highIncomePassRows = passRows.filter(row => row.family_income === 'high');
  return passRows.length > 0 ? highIncomePassRows.length / passRows.length : 0;
}

// 6. P(low income | fail)
async function computeLowIncomeGivenFail(): Promise<number> {
  const data = await loadDataset('student_performance_dataset.csv');
  const failRows = data.filter(row => row.exam_result === 'fail');
  const lowIncomeFailRows = failRows.filter(row => row.family_income === 'low');
  return failRows.length > 0 ? lowIncomeFailRows.length / failRows.length : 0;
}

// 7. P(extracurricular | fail)
async function computeExtracurricularGivenFail(): Promise<number> {
  const data = await loadDataset('student_performance_dataset.csv');
  const failRows = data.filter(row => row.exam_result === 'fail');
  const extracurricularFailRows = failRows.filter(row => row.extracurricular === 'yes');
  return failRows.length > 0 ? extracurricularFailRows.length / failRows.length : 0;
}

// 8. P(no extracurricular | pass)
async function computeNoExtracurricularGivenPass(): Promise<number> {
  const data = await loadDataset('student_performance_dataset.csv');
  const passRows = data.filter(row => row.exam_result === 'pass');
  const noExtracurricularPassRows = passRows.filter(row => row.extracurricular === 'no');
  return passRows.length > 0 ? noExtracurricularPassRows.length / passRows.length : 0;
}

// 9. P(internet access | fail)
async function computeInternetAccessGivenFail(): Promise<number> {
  const data = await loadDataset('student_performance_dataset.csv');
  const failRows = data.filter(row => row.exam_result === 'fail');
  const internetAccessFailRows = failRows.filter(row => row.internet_access === 'yes');
  return failRows.length > 0 ? internetAccessFailRows.length / failRows.length : 0;
}

// 10. P(no internet access | pass)
async function computeNoInternetAccessGivenPass(): Promise<number> {
  const data = await loadDataset('student_performance_dataset.csv');
  const passRows = data.filter(row => row.exam_result === 'pass');
  const noInternetAccessPassRows = passRows.filter(row => row.internet_access === 'no');
  return passRows.length > 0 ? noInternetAccessPassRows.length / passRows.length : 0;
}

// 11. P(previous grade = A | pass)
async function computePreviousGradeAGivenPass(): Promise<number> {
  const data = await loadDataset('student_performance_dataset.csv');
  const passRows = data.filter(row => row.exam_result === 'pass');
  const previousGradeAPassRows = passRows.filter(row => row.previous_grade === 'A');
  return passRows.length > 0 ? previousGradeAPassRows.length / passRows.length : 0;
}

// 12. P(previous grade = F | fail)
async function computePreviousGradeFGivenFail(): Promise<number> {
  const data = await loadDataset('student_performance_dataset.csv');
  const failRows = data.filter(row => row.exam_result === 'fail');
  const previousGradeFFailRows = failRows.filter(row => row.previous_grade === 'F');
  return failRows.length > 0 ? previousGradeFFailRows.length / failRows.length : 0;
}

// 13. P(visual learning | pass)
async function computeVisualLearningGivenPass(): Promise<number> {
  const data = await loadDataset('student_performance_dataset.csv');
  const passRows = data.filter(row => row.exam_result === 'pass');
  const visualLearningPassRows = passRows.filter(row => row.learning_style === 'visual');
  return passRows.length > 0 ? visualLearningPassRows.length / passRows.length : 0;
}

// 14. P(kinesthetic learning | fail)
async function computeKinestheticLearningGivenFail(): Promise<number> {
  const data = await loadDataset('student_performance_dataset.csv');
  const failRows = data.filter(row => row.exam_result === 'fail');
  const kinestheticLearningFailRows = failRows.filter(row => row.learning_style === 'kinesthetic');
  return failRows.length > 0 ? kinestheticLearningFailRows.length / failRows.length : 0;
}

// 15. P(public school | pass)
async function computePublicSchoolGivenPass(): Promise<number> {
  const data = await loadDataset('student_performance_dataset.csv');
  const passRows = data.filter(row => row.exam_result === 'pass');
  const publicSchoolPassRows = passRows.filter(row => row.school_type === 'public');
  return passRows.length > 0 ? publicSchoolPassRows.length / passRows.length : 0;
}

// 16. P(private school | fail)
async function computePrivateSchoolGivenFail(): Promise<number> {
  const data = await loadDataset('student_performance_dataset.csv');
  const failRows = data.filter(row => row.exam_result === 'fail');
  const privateSchoolFailRows = failRows.filter(row => row.school_type === 'private');
  return failRows.length > 0 ? privateSchoolFailRows.length / failRows.length : 0;
}

// 17. P(high teacher quality | pass)
async function computeHighTeacherQualityGivenPass(): Promise<number> {
  const data = await loadDataset('student_performance_dataset.csv');
  const passRows = data.filter(row => row.exam_result === 'pass');
  const highTeacherQualityPassRows = passRows.filter(row => row.teacher_quality === 'high');
  return passRows.length > 0 ? highTeacherQualityPassRows.length / passRows.length : 0;
}

// 18. P(low teacher quality | fail)
async function computeLowTeacherQualityGivenFail(): Promise<number> {
  const data = await loadDataset('student_performance_dataset.csv');
  const failRows = data.filter(row => row.exam_result === 'fail');
  const lowTeacherQualityFailRows = failRows.filter(row => row.teacher_quality === 'low');
  return failRows.length > 0 ? lowTeacherQualityFailRows.length / failRows.length : 0;
}

// 19. P(high attendance | pass)
async function computeHighAttendanceGivenPass(): Promise<number> {
  const data = await loadDataset('student_performance_dataset.csv');
  const passRows = data.filter(row => row.exam_result === 'pass');
  const highAttendancePassRows = passRows.filter(row => row.attendance_percentage >= 90);
  return passRows.length > 0 ? highAttendancePassRows.length / passRows.length : 0;
}

// 20. P(low attendance | fail)
async function computeLowAttendanceGivenFail(): Promise<number> {
  const data = await loadDataset('student_performance_dataset.csv');
  const failRows = data.filter(row => row.exam_result === 'fail');
  const lowAttendanceFailRows = failRows.filter(row => row.attendance_percentage < 75);
  return failRows.length > 0 ? lowAttendanceFailRows.length / failRows.length : 0;
}

// Main function to demonstrate usage
async function main() {
  try {
    console.log(`P(high stress | fail) = ${(await computeHighStressGivenFail()).toFixed(4)}`);
    console.log(`P(tutoring | fail) = ${(await computeTutoringGivenFail()).toFixed(4)}`);
    console.log(`P(low attendance | fail) = ${(await computeLowAttendanceGivenFail()).toFixed(4)}`);
  } catch (error) {
    console.error('Error:', error);
  }
}

main();