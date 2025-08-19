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

// 1. Mean attendance percentage for failed students
async function computeMeanAttendanceForFailed(): Promise<number> {
  const data = await loadDataset('student_performance_dataset.csv');
  const failedRows = data.filter(row => row.exam_result === 'fail');
  const totalAttendance = failedRows.reduce((sum, row) => sum + row.attendance_percentage, 0);
  return failedRows.length > 0 ? totalAttendance / failedRows.length : 0;
}

// 2. Mean attendance percentage for passed students
async function computeMeanAttendanceForPassed(): Promise<number> {
  const data = await loadDataset('student_performance_dataset.csv');
  const passedRows = data.filter(row => row.exam_result === 'pass');
  const totalAttendance = passedRows.reduce((sum, row) => sum + row.attendance_percentage, 0);
  return passedRows.length > 0 ? totalAttendance / passedRows.length : 0;
}

// 3. Mean study hours for failed students
async function computeMeanStudyHoursForFailed(): Promise<number> {
  const data = await loadDataset('student_performance_dataset.csv');
  const failedRows = data.filter(row => row.exam_result === 'fail');
  const totalStudyHours = failedRows.reduce((sum, row) => sum + row.daily_study_hours, 0);
  return failedRows.length > 0 ? totalStudyHours / failedRows.length : 0;
}

// 4. Mean study hours for passed students
async function computeMeanStudyHoursForPassed(): Promise<number> {
  const data = await loadDataset('student_performance_dataset.csv');
  const passedRows = data.filter(row => row.exam_result === 'pass');
  const totalStudyHours = passedRows.reduce((sum, row) => sum + row.daily_study_hours, 0);
  return passedRows.length > 0 ? totalStudyHours / passedRows.length : 0;
}

// 5. Mean sleep hours for failed students
async function computeMeanSleepHoursForFailed(): Promise<number> {
  const data = await loadDataset('student_performance_dataset.csv');
  const failedRows = data.filter(row => row.exam_result === 'fail');
  const totalSleepHours = failedRows.reduce((sum, row) => sum + row.sleep_hours, 0);
  return failedRows.length > 0 ? totalSleepHours / failedRows.length : 0;
}

// 6. Mean sleep hours for passed students
async function computeMeanSleepHoursForPassed(): Promise<number> {
  const data = await loadDataset('student_performance_dataset.csv');
  const passedRows = data.filter(row => row.exam_result === 'pass');
  const totalSleepHours = passedRows.reduce((sum, row) => sum + row.sleep_hours, 0);
  return passedRows.length > 0 ? totalSleepHours / passedRows.length : 0;
}

// 7. Mean distance to school for failed students
async function computeMeanDistanceForFailed(): Promise<number> {
  const data = await loadDataset('student_performance_dataset.csv');
  const failedRows = data.filter(row => row.exam_result === 'fail');
  const totalDistance = failedRows.reduce((sum, row) => sum + row.distance_to_school, 0);
  return failedRows.length > 0 ? totalDistance / failedRows.length : 0;
}

// 8. Mean distance to school for passed students
async function computeMeanDistanceForPassed(): Promise<number> {
  const data = await loadDataset('student_performance_dataset.csv');
  const passedRows = data.filter(row => row.exam_result === 'pass');
  const totalDistance = passedRows.reduce((sum, row) => sum + row.distance_to_school, 0);
  return passedRows.length > 0 ? totalDistance / passedRows.length : 0;
}

// 9. Median attendance percentage for failed students
async function computeMedianAttendanceForFailed(): Promise<number> {
  const data = await loadDataset('student_performance_dataset.csv');
  const failedRows = data.filter(row => row.exam_result === 'fail');
  const attendanceValues = failedRows.map(row => row.attendance_percentage).sort((a, b) => a - b);
  if (attendanceValues.length === 0) return 0;
  const mid = Math.floor(attendanceValues.length / 2);
  return attendanceValues.length % 2 === 0
    ? ((attendanceValues[mid - 1] ?? 0) + (attendanceValues[mid] ?? 0)) / 2
    : (attendanceValues[mid] ?? 0);
}

// 10. Median study hours for failed students
async function computeMedianStudyHoursForFailed(): Promise<number> {
  const data = await loadDataset('student_performance_dataset.csv');
  const failedRows = data.filter(row => row.exam_result === 'fail');
  const studyHoursValues = failedRows.map(row => row.daily_study_hours).sort((a, b) => a - b);
  if (studyHoursValues.length === 0) return 0;
  const mid = Math.floor(studyHoursValues.length / 2);
  return studyHoursValues.length % 2 === 0
    ? ((studyHoursValues[mid - 1] ?? 0) + (studyHoursValues[mid] ?? 0)) / 2
    : (studyHoursValues[mid] ?? 0);
}

// Main function to demonstrate usage
async function main() {
  try {
    console.log(`Mean attendance for failed students = ${(await computeMeanAttendanceForFailed()).toFixed(2)}%`);
    console.log(`Median attendance for failed students = ${(await computeMedianAttendanceForFailed()).toFixed(2)}%`);
    console.log(`Mean study hours for failed students = ${(await computeMeanStudyHoursForFailed()).toFixed(2)} hours`);
  } catch (error) {
    console.error('Error:', error);
  }
}

main();