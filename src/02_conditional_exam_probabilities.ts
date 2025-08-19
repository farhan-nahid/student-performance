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

// 1. P(pass | female)
async function computePassGivenFemale(): Promise<number> {
  const data = await loadDataset('student_performance_extended_dataset.csv');
  const femaleRows = data.filter(row => row.gender === 'female');
  const femalePassRows = femaleRows.filter(row => row.exam_result === 'pass');
  return femaleRows.length > 0 ? femalePassRows.length / femaleRows.length : 0;
}

// 2. P(fail | female)
async function computeFailGivenFemale(): Promise<number> {
  const data = await loadDataset('student_performance_extended_dataset.csv');
  const femaleRows = data.filter(row => row.gender === 'female');
  const femaleFailRows = femaleRows.filter(row => row.exam_result === 'fail');
  return femaleRows.length > 0 ? femaleFailRows.length / femaleRows.length : 0;
}

// 3. P(pass | male)
async function computePassGivenMale(): Promise<number> {
  const data = await loadDataset('student_performance_extended_dataset.csv');
  const maleRows = data.filter(row => row.gender === 'male');
  const malePassRows = maleRows.filter(row => row.exam_result === 'pass');
  return maleRows.length > 0 ? malePassRows.length / maleRows.length : 0;
}

// 4. P(fail | male)
async function computeFailGivenMale(): Promise<number> {
  const data = await loadDataset('student_performance_extended_dataset.csv');
  const maleRows = data.filter(row => row.gender === 'male');
  const maleFailRows = maleRows.filter(row => row.exam_result === 'fail');
  return maleRows.length > 0 ? maleFailRows.length / maleRows.length : 0;
}

// 5. P(pass | high income)
async function computePassGivenHighIncome(): Promise<number> {
  const data = await loadDataset('student_performance_extended_dataset.csv');
  const highIncomeRows = data.filter(row => row.family_income === 'high');
  const highIncomePassRows = highIncomeRows.filter(row => row.exam_result === 'pass');
  return highIncomeRows.length > 0 ? highIncomePassRows.length / highIncomeRows.length : 0;
}

// 6. P(fail | high income)
async function computeFailGivenHighIncome(): Promise<number> {
  const data = await loadDataset('student_performance_extended_dataset.csv');
  const highIncomeRows = data.filter(row => row.family_income === 'high');
  const highIncomeFailRows = highIncomeRows.filter(row => row.exam_result === 'fail');
  return highIncomeRows.length > 0 ? highIncomeFailRows.length / highIncomeRows.length : 0;
}

// 7. P(pass | low income)
async function computePassGivenLowIncome(): Promise<number> {
  const data = await loadDataset('student_performance_extended_dataset.csv');
  const lowIncomeRows = data.filter(row => row.family_income === 'low');
  const lowIncomePassRows = lowIncomeRows.filter(row => row.exam_result === 'pass');
  return lowIncomeRows.length > 0 ? lowIncomePassRows.length / lowIncomeRows.length : 0;
}

// 8. P(fail | low income)
async function computeFailGivenLowIncome(): Promise<number> {
  const data = await loadDataset('student_performance_extended_dataset.csv');
  const lowIncomeRows = data.filter(row => row.family_income === 'low');
  const lowIncomeFailRows = lowIncomeRows.filter(row => row.exam_result === 'fail');
  return lowIncomeRows.length > 0 ? lowIncomeFailRows.length / lowIncomeRows.length : 0;
}

// 9. P(pass | parent educated)
async function computePassGivenParentEducated(): Promise<number> {
  const data = await loadDataset('student_performance_extended_dataset.csv');
  const parentEducatedRows = data.filter(row => row.parent_educated === 'yes');
  const parentEducatedPassRows = parentEducatedRows.filter(row => row.exam_result === 'pass');
  return parentEducatedRows.length > 0 ? parentEducatedPassRows.length / parentEducatedRows.length : 0;
}

// 10. P(fail | parent not educated)
async function computeFailGivenParentNotEducated(): Promise<number> {
  const data = await loadDataset('student_performance_extended_dataset.csv');
  const parentNotEducatedRows = data.filter(row => row.parent_educated === 'no');
  const parentNotEducatedFailRows = parentNotEducatedRows.filter(row => row.exam_result === 'fail');
  return parentNotEducatedRows.length > 0 ? parentNotEducatedFailRows.length / parentNotEducatedRows.length : 0;
}

// 11. P(pass | extracurricular)
async function computePassGivenExtracurricular(): Promise<number> {
  const data = await loadDataset('student_performance_extended_dataset.csv');
  const extracurricularRows = data.filter(row => row.extracurricular === 'yes');
  const extracurricularPassRows = extracurricularRows.filter(row => row.exam_result === 'pass');
  return extracurricularRows.length > 0 ? extracurricularPassRows.length / extracurricularRows.length : 0;
}

// 12. P(fail | no extracurricular)
async function computeFailGivenNoExtracurricular(): Promise<number> {
  const data = await loadDataset('student_performance_extended_dataset.csv');
  const noExtracurricularRows = data.filter(row => row.extracurricular === 'no');
  const noExtracurricularFailRows = noExtracurricularRows.filter(row => row.exam_result === 'fail');
  return noExtracurricularRows.length > 0 ? noExtracurricularFailRows.length / noExtracurricularRows.length : 0;
}

// 13. P(pass | internet access)
async function computePassGivenInternetAccess(): Promise<number> {
  const data = await loadDataset('student_performance_extended_dataset.csv');
  const internetAccessRows = data.filter(row => row.internet_access === 'yes');
  const internetAccessPassRows = internetAccessRows.filter(row => row.exam_result === 'pass');
  return internetAccessRows.length > 0 ? internetAccessPassRows.length / internetAccessRows.length : 0;
}

// 14. P(fail | no internet access)
async function computeFailGivenNoInternetAccess(): Promise<number> {
  const data = await loadDataset('student_performance_extended_dataset.csv');
  const noInternetAccessRows = data.filter(row => row.internet_access === 'no');
  const noInternetAccessFailRows = noInternetAccessRows.filter(row => row.exam_result === 'fail');
  return noInternetAccessRows.length > 0 ? noInternetAccessFailRows.length / noInternetAccessRows.length : 0;
}

// 15. P(pass | previous grade = A)
async function computePassGivenPreviousGradeA(): Promise<number> {
  const data = await loadDataset('student_performance_extended_dataset.csv');
  const previousGradeARows = data.filter(row => row.previous_grade === 'A');
  const previousGradeAPassRows = previousGradeARows.filter(row => row.exam_result === 'pass');
  return previousGradeARows.length > 0 ? previousGradeAPassRows.length / previousGradeARows.length : 0;
}

// 16. P(fail | previous grade = F)
async function computeFailGivenPreviousGradeF(): Promise<number> {
  const data = await loadDataset('student_performance_extended_dataset.csv');
  const previousGradeFRows = data.filter(row => row.previous_grade === 'F');
  const previousGradeFFailRows = previousGradeFRows.filter(row => row.exam_result === 'fail');
  return previousGradeFRows.length > 0 ? previousGradeFFailRows.length / previousGradeFRows.length : 0;
}

// 17. P(pass | visual learning)
async function computePassGivenVisualLearning(): Promise<number> {
  const data = await loadDataset('student_performance_extended_dataset.csv');
  const visualLearningRows = data.filter(row => row.learning_style === 'visual');
  const visualLearningPassRows = visualLearningRows.filter(row => row.exam_result === 'pass');
  return visualLearningRows.length > 0 ? visualLearningPassRows.length / visualLearningRows.length : 0;
}

// 18. P(fail | kinesthetic learning)
async function computeFailGivenKinestheticLearning(): Promise<number> {
  const data = await loadDataset('student_performance_extended_dataset.csv');
  const kinestheticLearningRows = data.filter(row => row.learning_style === 'kinesthetic');
  const kinestheticLearningFailRows = kinestheticLearningRows.filter(row => row.exam_result === 'fail');
  return kinestheticLearningRows.length > 0 ? kinestheticLearningFailRows.length / kinestheticLearningRows.length : 0;
}

// 19. P(pass | public school)
async function computePassGivenPublicSchool(): Promise<number> {
  const data = await loadDataset('student_performance_extended_dataset.csv');
  const publicSchoolRows = data.filter(row => row.school_type === 'public');
  const publicSchoolPassRows = publicSchoolRows.filter(row => row.exam_result === 'pass');
  return publicSchoolRows.length > 0 ? publicSchoolPassRows.length / publicSchoolRows.length : 0;
}

// 20. P(fail | private school)
async function computeFailGivenPrivateSchool(): Promise<number> {
  const data = await loadDataset('student_performance_extended_dataset.csv');
  const privateSchoolRows = data.filter(row => row.school_type === 'private');
  const privateSchoolFailRows = privateSchoolRows.filter(row => row.exam_result === 'fail');
  return privateSchoolRows.length > 0 ? privateSchoolFailRows.length / privateSchoolRows.length : 0;
}

// 21. P(pass | high teacher quality)
async function computePassGivenHighTeacherQuality(): Promise<number> {
  const data = await loadDataset('student_performance_extended_dataset.csv');
  const highTeacherQualityRows = data.filter(row => row.teacher_quality === 'high');
  const highTeacherQualityPassRows = highTeacherQualityRows.filter(row => row.exam_result === 'pass');
  return highTeacherQualityRows.length > 0 ? highTeacherQualityPassRows.length / highTeacherQualityRows.length : 0;
}

// 22. P(fail | low teacher quality)
async function computeFailGivenLowTeacherQuality(): Promise<number> {
  const data = await loadDataset('student_performance_extended_dataset.csv');
  const lowTeacherQualityRows = data.filter(row => row.teacher_quality === 'low');
  const lowTeacherQualityFailRows = lowTeacherQualityRows.filter(row => row.exam_result === 'fail');
  return lowTeacherQualityRows.length > 0 ? lowTeacherQualityFailRows.length / lowTeacherQualityRows.length : 0;
}

// 23. P(pass | high stress)
async function computePassGivenHighStress(): Promise<number> {
  const data = await loadDataset('student_performance_extended_dataset.csv');
  const highStressRows = data.filter(row => row.stress_level === 'high');
  const highStressPassRows = highStressRows.filter(row => row.exam_result === 'pass');
  return highStressRows.length > 0 ? highStressPassRows.length / highStressRows.length : 0;
}

// 24. P(fail | low stress)
async function computeFailGivenLowStress(): Promise<number> {
  const data = await loadDataset('student_performance_extended_dataset.csv');
  const lowStressRows = data.filter(row => row.stress_level === 'low');
  const lowStressFailRows = lowStressRows.filter(row => row.exam_result === 'fail');
  return lowStressRows.length > 0 ? lowStressFailRows.length / lowStressRows.length : 0;
}

// 25. P(pass | tutoring)
async function computePassGivenTutoring(): Promise<number> {
  const data = await loadDataset('student_performance_extended_dataset.csv');
  const tutoringRows = data.filter(row => row.tutoring === 'yes');
  const tutoringPassRows = tutoringRows.filter(row => row.exam_result === 'pass');
  return tutoringRows.length > 0 ? tutoringPassRows.length / tutoringRows.length : 0;
}

// 26. P(fail | no tutoring)
async function computeFailGivenNoTutoring(): Promise<number> {
  const data = await loadDataset('student_performance_extended_dataset.csv');
  const noTutoringRows = data.filter(row => row.tutoring === 'no');
  const noTutoringFailRows = noTutoringRows.filter(row => row.exam_result === 'fail');
  return noTutoringRows.length > 0 ? noTutoringFailRows.length / noTutoringRows.length : 0;
}

// 27. P(pass | high attendance)
async function computePassGivenHighAttendance(): Promise<number> {
  const data = await loadDataset('student_performance_extended_dataset.csv');
  const highAttendanceRows = data.filter(row => row.attendance_percentage >= 90);
  const highAttendancePassRows = highAttendanceRows.filter(row => row.exam_result === 'pass');
  return highAttendanceRows.length > 0 ? highAttendancePassRows.length / highAttendanceRows.length : 0;
}

// 28. P(fail | low attendance)
async function computeFailGivenLowAttendance(): Promise<number> {
  const data = await loadDataset('student_performance_extended_dataset.csv');
  const lowAttendanceRows = data.filter(row => row.attendance_percentage < 75);
  const lowAttendanceFailRows = lowAttendanceRows.filter(row => row.exam_result === 'fail');
  return lowAttendanceRows.length > 0 ? lowAttendanceFailRows.length / lowAttendanceRows.length : 0;
}

// 29. P(pass | high study hours)
async function computePassGivenHighStudyHours(): Promise<number> {
  const data = await loadDataset('student_performance_extended_dataset.csv');
  const highStudyHoursRows = data.filter(row => row.daily_study_hours >= 6);
  const highStudyHoursPassRows = highStudyHoursRows.filter(row => row.exam_result === 'pass');
  return highStudyHoursRows.length > 0 ? highStudyHoursPassRows.length / highStudyHoursRows.length : 0;
}

// 30. P(fail | low study hours)
async function computeFailGivenLowStudyHours(): Promise<number> {
  const data = await loadDataset('student_performance_extended_dataset.csv');
  const lowStudyHoursRows = data.filter(row => row.daily_study_hours < 2);
  const lowStudyHoursFailRows = lowStudyHoursRows.filter(row => row.exam_result === 'fail');
  return lowStudyHoursRows.length > 0 ? lowStudyHoursFailRows.length / lowStudyHoursRows.length : 0;
}

// Main function to demonstrate usage
async function main() {
  try {
    console.log(`P(fail | female) = ${(await computeFailGivenFemale()).toFixed(4)}`);
    console.log(`P(fail | male) = ${(await computeFailGivenMale()).toFixed(4)}`);
    console.log(`P(pass | high study hours) = ${(await computePassGivenHighStudyHours()).toFixed(4)}`);
  } catch (error) {
    console.error('Error:', error);
  }
}

main();