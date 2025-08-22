import { loadDataset } from './helpers';
import type { Student } from './type';

// 1. P(pass | female)
function computePassGivenFemale(data: Student[]): number {

  const femaleRows = data.filter(row => row.gender === 'female');
  const femalePassRows = femaleRows.filter(row => row.exam_result === 'pass');
  return femaleRows.length > 0 ? femalePassRows.length / femaleRows.length : 0;
}

// 2. P(fail | female)
function computeFailGivenFemale(data: Student[]): number {
  const femaleRows = data.filter(row => row.gender === 'female');
  const femaleFailRows = femaleRows.filter(row => row.exam_result === 'fail');
  return femaleRows.length > 0 ? femaleFailRows.length / femaleRows.length : 0;
}

// 3. P(pass | male)
function computePassGivenMale(data: Student[]): number {
  const maleRows = data.filter(row => row.gender === 'male');
  const malePassRows = maleRows.filter(row => row.exam_result === 'pass');
  return maleRows.length > 0 ? malePassRows.length / maleRows.length : 0;
}

// 4. P(fail | male)
function computeFailGivenMale(data: Student[]): number {
  const maleRows = data.filter(row => row.gender === 'male');
  const maleFailRows = maleRows.filter(row => row.exam_result === 'fail');
  return maleRows.length > 0 ? maleFailRows.length / maleRows.length : 0;
}

// 5. P(pass | high income)
function computePassGivenHighIncome(data: Student[]): number {
  const highIncomeRows = data.filter(row => row.family_income === 'high');
  const highIncomePassRows = highIncomeRows.filter(row => row.exam_result === 'pass');
  return highIncomeRows.length > 0 ? highIncomePassRows.length / highIncomeRows.length : 0;
}

// 6. P(fail | high income)
function computeFailGivenHighIncome(data: Student[]): number {
  const highIncomeRows = data.filter(row => row.family_income === 'high');
  const highIncomeFailRows = highIncomeRows.filter(row => row.exam_result === 'fail');
  return highIncomeRows.length > 0 ? highIncomeFailRows.length / highIncomeRows.length : 0;
}

// 7. P(pass | low income)
function computePassGivenLowIncome(data: Student[]): number {
  const lowIncomeRows = data.filter(row => row.family_income === 'low');
  const lowIncomePassRows = lowIncomeRows.filter(row => row.exam_result === 'pass');
  return lowIncomeRows.length > 0 ? lowIncomePassRows.length / lowIncomeRows.length : 0;
}

// 8. P(fail | low income)
function computeFailGivenLowIncome(data: Student[]): number {
  const lowIncomeRows = data.filter(row => row.family_income === 'low');
  const lowIncomeFailRows = lowIncomeRows.filter(row => row.exam_result === 'fail');
  return lowIncomeRows.length > 0 ? lowIncomeFailRows.length / lowIncomeRows.length : 0;
}

// 9. P(pass | parent educated)
function computePassGivenParentEducated(data: Student[]): number {
  const parentEducatedRows = data.filter(row => row.parent_educated === 'yes');
  const parentEducatedPassRows = parentEducatedRows.filter(row => row.exam_result === 'pass');
  return parentEducatedRows.length > 0 ? parentEducatedPassRows.length / parentEducatedRows.length : 0;
}

// 10. P(fail | parent not educated)
function computeFailGivenParentNotEducated(data: Student[]): number {
  const parentNotEducatedRows = data.filter(row => row.parent_educated === 'no');
  const parentNotEducatedFailRows = parentNotEducatedRows.filter(row => row.exam_result === 'fail');
  return parentNotEducatedRows.length > 0 ? parentNotEducatedFailRows.length / parentNotEducatedRows.length : 0;
}

// 11. P(pass | extracurricular)
function computePassGivenExtracurricular(data: Student[]): number {
  const extracurricularRows = data.filter(row => row.extracurricular === 'yes');
  const extracurricularPassRows = extracurricularRows.filter(row => row.exam_result === 'pass');
  return extracurricularRows.length > 0 ? extracurricularPassRows.length / extracurricularRows.length : 0;
}

// 12. P(fail | no extracurricular)
function computeFailGivenNoExtracurricular(data: Student[]): number {
  const noExtracurricularRows = data.filter(row => row.extracurricular === 'no');
  const noExtracurricularFailRows = noExtracurricularRows.filter(row => row.exam_result === 'fail');
  return noExtracurricularRows.length > 0 ? noExtracurricularFailRows.length / noExtracurricularRows.length : 0;
}

// 13. P(pass | internet access)
function computePassGivenInternetAccess(data: Student[]): number {
  const internetAccessRows = data.filter(row => row.internet_access === 'yes');
  const internetAccessPassRows = internetAccessRows.filter(row => row.exam_result === 'pass');
  return internetAccessRows.length > 0 ? internetAccessPassRows.length / internetAccessRows.length : 0;
}

// 14. P(fail | no internet access)
function computeFailGivenNoInternetAccess(data: Student[]): number {
  const noInternetAccessRows = data.filter(row => row.internet_access === 'no');
  const noInternetAccessFailRows = noInternetAccessRows.filter(row => row.exam_result === 'fail');
  return noInternetAccessRows.length > 0 ? noInternetAccessFailRows.length / noInternetAccessRows.length : 0;
}

// 15. P(pass | previous grade = A)
function computePassGivenPreviousGradeA(data: Student[]): number {
  const previousGradeARows = data.filter(row => row.previous_grade === 'A');
  const previousGradeAPassRows = previousGradeARows.filter(row => row.exam_result === 'pass');
  return previousGradeARows.length > 0 ? previousGradeAPassRows.length / previousGradeARows.length : 0;
}

// 16. P(fail | previous grade = F)
function computeFailGivenPreviousGradeF(data: Student[]): number {
  const previousGradeFRows = data.filter(row => row.previous_grade === 'F');
  const previousGradeFFailRows = previousGradeFRows.filter(row => row.exam_result === 'fail');
  return previousGradeFRows.length > 0 ? previousGradeFFailRows.length / previousGradeFRows.length : 0;
}

// 17. P(pass | visual learning)
function computePassGivenVisualLearning(data: Student[]): number {
  const visualLearningRows = data.filter(row => row.learning_style === 'visual');
  const visualLearningPassRows = visualLearningRows.filter(row => row.exam_result === 'pass');
  return visualLearningRows.length > 0 ? visualLearningPassRows.length / visualLearningRows.length : 0;
}

// 18. P(fail | kinesthetic learning)
function computeFailGivenKinestheticLearning(data: Student[]): number {
  const kinestheticLearningRows = data.filter(row => row.learning_style === 'kinesthetic');
  const kinestheticLearningFailRows = kinestheticLearningRows.filter(row => row.exam_result === 'fail');
  return kinestheticLearningRows.length > 0 ? kinestheticLearningFailRows.length / kinestheticLearningRows.length : 0;
}

// 19. P(pass | public school)
function computePassGivenPublicSchool(data: Student[]): number {
  const publicSchoolRows = data.filter(row => row.school_type === 'public');
  const publicSchoolPassRows = publicSchoolRows.filter(row => row.exam_result === 'pass');
  return publicSchoolRows.length > 0 ? publicSchoolPassRows.length / publicSchoolRows.length : 0;
}

// 20. P(fail | private school)
function computeFailGivenPrivateSchool(data: Student[]): number {
  const privateSchoolRows = data.filter(row => row.school_type === 'private');
  const privateSchoolFailRows = privateSchoolRows.filter(row => row.exam_result === 'fail');
  return privateSchoolRows.length > 0 ? privateSchoolFailRows.length / privateSchoolRows.length : 0;
}

// 21. P(pass | high teacher quality)
function computePassGivenHighTeacherQuality(data: Student[]): number {
  const highTeacherQualityRows = data.filter(row => row.teacher_quality === 'high');
  const highTeacherQualityPassRows = highTeacherQualityRows.filter(row => row.exam_result === 'pass');
  return highTeacherQualityRows.length > 0 ? highTeacherQualityPassRows.length / highTeacherQualityRows.length : 0;
}

// 22. P(fail | low teacher quality)
function computeFailGivenLowTeacherQuality(data: Student[]): number {
  const lowTeacherQualityRows = data.filter(row => row.teacher_quality === 'low');
  const lowTeacherQualityFailRows = lowTeacherQualityRows.filter(row => row.exam_result === 'fail');
  return lowTeacherQualityRows.length > 0 ? lowTeacherQualityFailRows.length / lowTeacherQualityRows.length : 0;
}

// 23. P(pass | high stress)
function computePassGivenHighStress(data: Student[]): number {
  const highStressRows = data.filter(row => row.stress_level === 'high');
  const highStressPassRows = highStressRows.filter(row => row.exam_result === 'pass');
  return highStressRows.length > 0 ? highStressPassRows.length / highStressRows.length : 0;
}

// 24. P(fail | low stress)
function computeFailGivenLowStress(data: Student[]): number {
  const lowStressRows = data.filter(row => row.stress_level === 'low');
  const lowStressFailRows = lowStressRows.filter(row => row.exam_result === 'fail');
  return lowStressRows.length > 0 ? lowStressFailRows.length / lowStressRows.length : 0;
}

// 25. P(pass | tutoring)
function computePassGivenTutoring(data: Student[]): number {
  const tutoringRows = data.filter(row => row.tutoring === 'yes');
  const tutoringPassRows = tutoringRows.filter(row => row.exam_result === 'pass');
  return tutoringRows.length > 0 ? tutoringPassRows.length / tutoringRows.length : 0;
}

// 26. P(fail | no tutoring)
function computeFailGivenNoTutoring(data: Student[]): number {
  const noTutoringRows = data.filter(row => row.tutoring === 'no');
  const noTutoringFailRows = noTutoringRows.filter(row => row.exam_result === 'fail');
  return noTutoringRows.length > 0 ? noTutoringFailRows.length / noTutoringRows.length : 0;
}

// 27. P(pass | high attendance)
function computePassGivenHighAttendance(data: Student[]): number {
  const highAttendanceRows = data.filter(row => row.attendance_percentage >= 90);
  const highAttendancePassRows = highAttendanceRows.filter(row => row.exam_result === 'pass');
  return highAttendanceRows.length > 0 ? highAttendancePassRows.length / highAttendanceRows.length : 0;
}

// 28. P(fail | low attendance)
function computeFailGivenLowAttendance(data: Student[]): number {
  const lowAttendanceRows = data.filter(row => row.attendance_percentage < 75);
  const lowAttendanceFailRows = lowAttendanceRows.filter(row => row.exam_result === 'fail');
  return lowAttendanceRows.length > 0 ? lowAttendanceFailRows.length / lowAttendanceRows.length : 0;
}

// 29. P(pass | high study hours)
function computePassGivenHighStudyHours(data: Student[]): number {
  const highStudyHoursRows = data.filter(row => row.daily_study_hours >= 6);
  const highStudyHoursPassRows = highStudyHoursRows.filter(row => row.exam_result === 'pass');
  return highStudyHoursRows.length > 0 ? highStudyHoursPassRows.length / highStudyHoursRows.length : 0;
}

// 30. P(fail | low study hours)
function computeFailGivenLowStudyHours(data: Student[]): number {
  const lowStudyHoursRows = data.filter(row => row.daily_study_hours < 2);
  const lowStudyHoursFailRows = lowStudyHoursRows.filter(row => row.exam_result === 'fail');
  return lowStudyHoursRows.length > 0 ? lowStudyHoursFailRows.length / lowStudyHoursRows.length : 0;
}

// Main function to demonstrate usage
async function main() {
  try {
    const data = await loadDataset();

    console.log(`P(pass | female) = ${(await computePassGivenFemale(data)).toFixed(4)}`);
    console.log(`P(fail | female) = ${(await computeFailGivenFemale(data)).toFixed(4)}`);
    console.log(`P(pass | male) = ${(await computePassGivenMale(data)).toFixed(4)}`);
    console.log(`P(fail | male) = ${(await computeFailGivenMale(data)).toFixed(4)}`);
    console.log(`P(pass | high income) = ${(await computePassGivenHighIncome(data)).toFixed(4)}`);
    console.log(`P(fail | high income) = ${(await computeFailGivenHighIncome(data)).toFixed(4)}`);
    console.log(`P(pass | low income) = ${(await computePassGivenLowIncome(data)).toFixed(4)}`);
    console.log(`P(fail | low income) = ${(await computeFailGivenLowIncome(data)).toFixed(4)}`);
    console.log(`P(pass | parent educated) = ${(await computePassGivenParentEducated(data)).toFixed(4)}`);
    console.log(`P(fail | parent not educated) = ${(await computeFailGivenParentNotEducated(data)).toFixed(4)}`);
    console.log(`P(pass | extracurricular) = ${(await computePassGivenExtracurricular(data)).toFixed(4)}`);
    console.log(`P(fail | no extracurricular) = ${(await computeFailGivenNoExtracurricular(data)).toFixed(4)}`);
    console.log(`P(pass | internet access) = ${(await computePassGivenInternetAccess(data)).toFixed(4)}`);
    console.log(`P(fail | no internet access) = ${(await computeFailGivenNoInternetAccess(data)).toFixed(4)}`);
    console.log(`P(pass | previous grade = A) = ${(await computePassGivenPreviousGradeA(data)).toFixed(4)}`);
    console.log(`P(fail | previous grade = F) = ${(await computeFailGivenPreviousGradeF(data)).toFixed(4)}`);
    console.log(`P(pass | visual learning) = ${(await computePassGivenVisualLearning(data)).toFixed(4)}`);
    console.log(`P(fail | kinesthetic learning) = ${(await computeFailGivenKinestheticLearning(data)).toFixed(4)}`);
    console.log(`P(pass | public school) = ${(await computePassGivenPublicSchool(data)).toFixed(4)}`);
    console.log(`P(fail | private school) = ${(await computeFailGivenPrivateSchool(data)).toFixed(4)}`);
    console.log(`P(pass | high teacher quality) = ${(await computePassGivenHighTeacherQuality(data)).toFixed(4)}`);
    console.log(`P(fail | low teacher quality) = ${(await computeFailGivenLowTeacherQuality(data)).toFixed(4)}`);
    console.log(`P(pass | high stress) = ${(await computePassGivenHighStress(data)).toFixed(4)}`);
    console.log(`P(fail | low stress) = ${(await computeFailGivenLowStress(data)).toFixed(4)}`);
    console.log(`P(pass | tutoring) = ${(await computePassGivenTutoring(data)).toFixed(4)}`);
    console.log(`P(fail | no tutoring) = ${(await computeFailGivenNoTutoring(data)).toFixed(4)}`);
    console.log(`P(pass | high attendance) = ${(await computePassGivenHighAttendance(data)).toFixed(4)}`);
    console.log(`P(fail | low attendance) = ${(await computeFailGivenLowAttendance(data)).toFixed(4)}`);
    console.log(`P(pass | high study hours) = ${(await computePassGivenHighStudyHours(data)).toFixed(4)}`);
    console.log(`P(fail | low study hours) = ${(await computeFailGivenLowStudyHours(data)).toFixed(4)}`);
  } catch (error) {
    console.error('Error:', error);
  }
}

main();