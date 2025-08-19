export interface Student {
  gender: 'male' | 'female';
  exam_result: 'pass' | 'fail';
  age: number;
  class: number;
  parent_educated: 'yes' | 'no';
  daily_study_hours: number;
  attendance_percentage: number;
  family_income: 'low' | 'medium' | 'high';
  extracurricular: 'yes' | 'no';
  sleep_hours: number;
  internet_access: 'yes' | 'no';
  previous_grade: 'A' | 'B' | 'C' | 'D' | 'F';
  learning_style: 'visual' | 'auditory' | 'kinesthetic';
  school_type: 'public' | 'private' | 'homeschool';
  teacher_quality: 'high' | 'medium' | 'low';
  stress_level: 'low' | 'moderate' | 'high';
  distance_to_school: number;
  tutoring: 'yes' | 'no';
}