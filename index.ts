// Function to generate random choice based on weights
function randomChoice<T>(items: T[], weights: number[]): T {
  if (items == null || weights == null) {
    throw new Error('Items and weights must be defined');
  }
  if (items.length === 0 || weights.length === 0) {
    throw new Error('Items and weights arrays must not be empty');
  }
  if (items.length !== weights.length) {
    throw new Error('Items and weights arrays must have the same length');
  }
  if (weights.some(w => w === undefined || w === null)) {
    throw new Error('Weights array must not contain undefined or null values');
  }

  const totalWeight = weights.reduce((sum, w) => sum + (w ?? 0), 0);
  if (totalWeight <= 0) {
    throw new Error('Total weight must be greater than zero');
  }

  const rand = Math.random() * totalWeight;
  let weightSum = 0;
  for (let i = 0; i < items.length; i++) {
    const weight = weights[i] as number;
    weightSum += weight;
    if (rand <= weightSum) return items[i] as T;
  }
  return items[items.length - 1] as T;
}

// Function to generate normal distribution (Box-Muller transform)
function normalRandom(mean: number, std: number): number {
  const u1 = Math.random();
  const u2 = Math.random();
  const z = Math.sqrt(-2.0 * Math.log(u1)) * Math.cos(2.0 * Math.PI * u2);
  return z * std + mean;
}

// Function to clip values
function clip(value: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, value));
}

// Set the number of students
const numStudents = 200000;

// Define types for the dataset
type Gender = 'male' | 'female';
type ExamResult = 'pass' | 'fail';
type ParentEducated = 'yes' | 'no';
type FamilyIncome = 'low' | 'medium' | 'high';
type Extracurricular = 'yes' | 'no';
type InternetAccess = 'yes' | 'no';
type PreviousGrade = 'A' | 'B' | 'C' | 'D' | 'F';
type LearningStyle = 'visual' | 'auditory' | 'kinesthetic';
type SchoolType = 'public' | 'private' | 'homeschool';
type TeacherQuality = 'high' | 'medium' | 'low';
type StressLevel = 'low' | 'moderate' | 'high';
type Tutoring = 'yes' | 'no';

type StudentRow = [
  Gender,
  ExamResult,
  number, // age
  number, // class
  ParentEducated,
  number, // daily_study_hours
  number, // attendance_percentage
  FamilyIncome,
  Extracurricular,
  number, // sleep_hours
  InternetAccess,
  PreviousGrade,
  LearningStyle,
  SchoolType,
  TeacherQuality,
  StressLevel,
  number, // distance_to_school
  Tutoring,
  number, // mobile_screen_time
  number // pc_games_time
];

// Generate data
const examResults: ExamResult[] = Array.from({ length: numStudents }, () =>
  randomChoice(['pass', 'fail'], [0.7, 0.3])
);

// Generate fields conditionally based on exam result
const attendancePercentage: number[] = Array.from({ length: numStudents }, (_, i) => {
  const isFail = examResults[i] === 'fail';
  return clip(normalRandom(isFail ? 70 : 90, 10), 0, 100);
});
const dailyStudyHours: number[] = Array.from({ length: numStudents }, (_, i) => {
  const isFail = examResults[i] === 'fail';
  return clip(normalRandom(isFail ? 2 : 5, 1.5), 0, 10);
});
const sleepHours: number[] = Array.from({ length: numStudents }, (_, i) => {
  const isFail = examResults[i] === 'fail';
  return clip(normalRandom(isFail ? 9 : 7, 1.5), 4, 12);
});
const mobileScreenTime: number[] = Array.from({ length: numStudents }, (_, i) => {
  const isFail = examResults[i] === 'fail';
  return clip(normalRandom(isFail ? 5 : 2, 1.5), 0, 10);
});
const pcGamesTime: number[] = Array.from({ length: numStudents }, (_, i) => {
  const isFail = examResults[i] === 'fail';
  return clip(normalRandom(isFail ? 4 : 1, 1.2), 0, 8);
});

// Generate other fields as before
const genders: Gender[] = Array.from({ length: numStudents }, () =>
  randomChoice(['male', 'female'], [0.5, 0.5])
);
const ages: number[] = Array.from({ length: numStudents }, () =>
  Math.floor(Math.random() * (19 - 5) + 5)
);
const classes: number[] = Array.from({ length: numStudents }, () =>
  Math.floor(Math.random() * (13 - 1) + 1)
);
const parentEducated: ParentEducated[] = Array.from({ length: numStudents }, () =>
  randomChoice(['yes', 'no'], [0.6, 0.4])
);
const familyIncome: FamilyIncome[] = Array.from({ length: numStudents }, () =>
  randomChoice(['low', 'medium', 'high'], [0.3, 0.5, 0.2])
);
const extracurricular: Extracurricular[] = Array.from({ length: numStudents }, () =>
  randomChoice(['yes', 'no'], [0.5, 0.5])
);
const internetAccess: InternetAccess[] = Array.from({ length: numStudents }, () =>
  randomChoice(['yes', 'no'], [0.8, 0.2])
);
const previousGrade: PreviousGrade[] = Array.from({ length: numStudents }, () =>
  randomChoice(['A', 'B', 'C', 'D', 'F'], [0.2, 0.3, 0.3, 0.15, 0.05])
);
const learningStyle: LearningStyle[] = Array.from({ length: numStudents }, () =>
  randomChoice(['visual', 'auditory', 'kinesthetic'], [0.3, 0.3, 0.4])
);
const schoolType: SchoolType[] = Array.from({ length: numStudents }, () =>
  randomChoice(['public', 'private', 'homeschool'], [0.6, 0.3, 0.1])
);
const teacherQuality: TeacherQuality[] = Array.from({ length: numStudents }, () =>
  randomChoice(['high', 'medium', 'low'], [0.2, 0.5, 0.3])
);
const stressLevel: StressLevel[] = Array.from({ length: numStudents }, () =>
  randomChoice(['low', 'moderate', 'high'], [0.3, 0.5, 0.2])
);
const distanceToSchool: number[] = Array.from({ length: numStudents }, () =>
  clip(normalRandom(5, 3), 0, 20)
);
const tutoring: Tutoring[] = Array.from({ length: numStudents }, () =>
  randomChoice(['yes', 'no'], [0.4, 0.6])
);

// Create CSV content
const headers: string[] = [
  'gender',
  'exam_result',
  'age',
  'class',
  'parent_educated',
  'daily_study_hours',
  'attendance_percentage',
  'family_income',
  'extracurricular',
  'sleep_hours',
  'internet_access',
  'previous_grade',
  'learning_style',
  'school_type',
  'teacher_quality',
  'stress_level',
  'distance_to_school',
  'tutoring',
  'mobile_screen_time',
  'pc_games_time',
];
const rows: StudentRow[] = Array.from({ length: numStudents }, (_, i) => [
  genders[i] ?? 'male',
  examResults[i] ?? 'fail',
  ages[i] ?? 10,
  classes[i] ?? 1,
  parentEducated[i] ?? 'no',
  dailyStudyHours[i] ?? 0,
  attendancePercentage[i] ?? 0,
  familyIncome[i] ?? 'low',
  extracurricular[i] ?? 'no',
  sleepHours[i] ?? 6,
  internetAccess[i] ?? 'no',
  previousGrade[i] ?? 'F',
  learningStyle[i] ?? 'visual',
  schoolType[i] ?? 'public',
  teacherQuality[i] ?? 'low',
  stressLevel[i] ?? 'moderate',
  distanceToSchool[i] ?? 0,
  tutoring[i] ?? 'no',
  mobileScreenTime[i] ?? 0,
  pcGamesTime[i] ?? 0,
]);
const csvContent: string = [
  headers.join(','),
  ...rows.map(row => row.map(value => value.toString()).join(',')),
].join('\n');

// Save to CSV file
const fileName = 'data/student_performance_dataset.csv';
Bun.write(fileName, csvContent);

console.log(`Dataset generated and saved to '${fileName}'. Sample of first 5 rows:`);
console.log([headers, ...rows.slice(0, 5)].map(row => row.join(',')).join('\n'));