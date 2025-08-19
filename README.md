# Student Performance Dataset and Probability Functions

## Overview

This project contains a synthetic dataset (`student_performance_dataset.csv`) representing academic performance and related attributes for 100,000 students, along with five TypeScript files implementing 100 probability functions to analyze the dataset. The functions compute marginal, conditional, joint, and statistical probabilities, focusing on relationships between exam outcomes and other variables, such as gender, attendance, and family income.

## Dataset Description

The dataset (`student_performance_dataset.csv`) includes 100,000 rows and 18 fields, generated with specific probability distributions to simulate realistic student performance scenarios. The fields are:

| Field                   | Type    | Description                                          | Distribution                              |
| ----------------------- | ------- | ---------------------------------------------------- | ----------------------------------------- |
| `gender`                | String  | Student gender (`male`, `female`)                    | 50% male, 50% female                      |
| `exam_result`           | String  | Exam outcome (`pass`, `fail`)                        | 70% pass, 30% fail                        |
| `age`                   | Integer | Student age (5–18)                                   | Uniform [5, 18]                           |
| `class`                 | Integer | Grade level (1–12)                                   | Uniform [1, 12]                           |
| `parent_educated`       | String  | Parent education status (`yes`, `no`)                | 60% yes, 40% no                           |
| `daily_study_hours`     | Float   | Hours studied daily                                  | Normal(μ=4, σ=2), clipped [0, 10]         |
| `attendance_percentage` | Float   | Attendance percentage                                | Normal(μ=85, σ=10), clipped [0, 100]      |
| `family_income`         | String  | Family income level (`low`, `medium`, `high`)        | 30% low, 50% medium, 20% high             |
| `extracurricular`       | String  | Participation in extracurriculars (`yes`, `no`)      | 50% yes, 50% no                           |
| `sleep_hours`           | Float   | Hours slept nightly                                  | Normal(μ=8, σ=1.5), clipped [4, 12]       |
| `internet_access`       | String  | Internet access (`yes`, `no`)                        | 80% yes, 20% no                           |
| `previous_grade`        | String  | Previous academic grade (`A`, `B`, `C`, `D`, `F`)    | 20% A, 30% B, 30% C, 15% D, 5% F          |
| `learning_style`        | String  | Learning style (`visual`, `auditory`, `kinesthetic`) | 30% visual, 30% auditory, 40% kinesthetic |
| `school_type`           | String  | School type (`public`, `private`, `homeschool`)      | 60% public, 30% private, 10% homeschool   |
| `teacher_quality`       | String  | Teacher quality (`high`, `medium`, `low`)            | 20% high, 50% medium, 30% low             |
| `stress_level`          | String  | Stress level (`low`, `moderate`, `high`)             | 30% low, 50% moderate, 20% high           |
| `distance_to_school`    | Float   | Distance to school (km)                              | Normal(μ=5, σ=3), clipped [0, 20]         |
| `tutoring`              | String  | Tutoring participation (`yes`, `no`)                 | 40% yes, 60% no                           |

### Dataset Notes

- **Size**: ~20–30 MB (100,000 rows).
- **Generation**: Fields are generated independently, so conditional probabilities (e.g., \( P(\text{fail} | \text{female}) \)) approximate marginal probabilities (e.g., \( P(\text{fail}) = 0.3 \)) unless empirical correlations arise.
- **Access**: Ensure `student_performance_dataset.csv` is in the working directory. If not, regenerate it using the TypeScript script in `generateDataset.ts` (provided separately).

## Probability Functions

The project includes five TypeScript files, each containing functions to compute specific types of probabilities based on the dataset. The functions use `papaparse` to parse the CSV and compute empirical probabilities.

### Requirements

- **Bun**: Required to run TypeScript files.
- **CSV File**: Place `student_performance_dataset.csv` in the working directory.

### Setup Instructions

1. **Install Dependencies**:
   ```bash
   bun install
   ```
2. **Save Files**:
   - Save the five TypeScript files (`marginal_probabilities.ts`, `conditional_exam_probabilities.ts`, `conditional_other_probabilities.ts`, `joint_probabilities.ts`, `statistical_probabilities.ts`) in your project directory.
   - Ensure the CSV file is present.
3. **Compile and Run**:
   - Compile a file: `tsc <filename>.ts` (e.g., `tsc marginal_probabilities.ts`).
   - Run: `node <filename>.js` (e.g., `node marginal_probabilities.js`).
4. **Output**:
   - Each file’s `main` function prints example probabilities to the console.

### Function Documentation

#### 1. `marginal_probabilities.ts`

**Description**: Computes marginal probabilities for single events (e.g., \( P(\text{fail}) \)).
**Functions** (20):

- `computeFailProbability`: \( P(\text{fail}) \)
- `computePassProbability`: \( P(\text{pass}) \)
- `computeFemaleProbability`: \( P(\text{female}) \)
- `computeMaleProbability`: \( P(\text{male}) \)
- `computeHighIncomeProbability`: \( P(\text{high income}) \)
- `computeMediumIncomeProbability`: \( P(\text{medium income}) \)
- `computeLowIncomeProbability`: \( P(\text{low income}) \)
- `computeParentEducatedYesProbability`: \( P(\text{parent educated = yes}) \)
- `computeParentEducatedNoProbability`: \( P(\text{parent educated = no}) \)
- `computeExtracurricularYesProbability`: \( P(\text{extracurricular = yes}) \)
- `computeExtracurricularNoProbability`: \( P(\text{extracurricular = no}) \)
- `computeInternetAccessYesProbability`: \( P(\text{internet access = yes}) \)
- `computeInternetAccessNoProbability`: \( P(\text{internet access = no}) \)
- `computePreviousGradeAProbability`: \( P(\text{previous grade = A}) \)
- `computePreviousGradeBProbability`: \( P(\text{previous grade = B}) \)
- `computeVisualLearningProbability`: \( P(\text{visual learning}) \)
- `computePublicSchoolProbability`: \( P(\text{public school}) \)
- `computeHighTeacherQualityProbability`: \( P(\text{high teacher quality}) \)
- `computeHighStressProbability`: \( P(\text{high stress}) \)
- `computeTutoringYesProbability`: \( P(\text{tutoring = yes}) \)

**Example Output**:

```
P(fail) = 0.2998
P(female) = 0.5001
P(high income) = 0.2004
```

#### 2. `conditional_exam_probabilities.ts`

**Description**: Computes conditional probabilities of exam results given other variables (e.g., \( P(\text{fail} | \text{female}) \)).
**Functions** (30):

- `computePassGivenFemale`: \( P(\text{pass} | \text{female}) \)
- `computeFailGivenFemale`: \( P(\text{fail} | \text{female}) \)
- `computePassGivenMale`: \( P(\text{pass} | \text{male}) \)
- `computeFailGivenMale`: \( P(\text{fail} | \text{male}) \)
- `computePassGivenHighIncome`: \( P(\text{pass} | \text{high income}) \)
- `computeFailGivenHighIncome`: \( P(\text{fail} | \text{high income}) \)
- `computePassGivenLowIncome`: \( P(\text{pass} | \text{low income}) \)
- `computeFailGivenLowIncome`: \( P(\text{fail} | \text{low income}) \)
- `computePassGivenParentEducated`: \( P(\text{pass} | \text{parent educated}) \)
- `computeFailGivenParentNotEducated`: \( P(\text{fail} | \text{parent not educated}) \)
- `computePassGivenExtracurricular`: \( P(\text{pass} | \text{extracurricular}) \)
- `computeFailGivenNoExtracurricular`: \( P(\text{fail} | \text{no extracurricular}) \)
- `computePassGivenInternetAccess`: \( P(\text{pass} | \text{internet access}) \)
- `computeFailGivenNoInternetAccess`: \( P(\text{fail} | \text{no internet access}) \)
- `computePassGivenPreviousGradeA`: \( P(\text{pass} | \text{previous grade = A}) \)
- `computeFailGivenPreviousGradeF`: \( P(\text{fail} | \text{previous grade = F}) \)
- `computePassGivenVisualLearning`: \( P(\text{pass} | \text{visual learning}) \)
- `computeFailGivenKinestheticLearning`: \( P(\text{fail} | \text{kinesthetic learning}) \)
- `computePassGivenPublicSchool`: \( P(\text{pass} | \text{public school}) \)
- `computeFailGivenPrivateSchool`: \( P(\text{fail} | \text{private school}) \)
- `computePassGivenHighTeacherQuality`: \( P(\text{pass} | \text{high teacher quality}) \)
- `computeFailGivenLowTeacherQuality`: \( P(\text{fail} | \text{low teacher quality}) \)
- `computePassGivenHighStress`: \( P(\text{pass} | \text{high stress}) \)
- `computeFailGivenLowStress`: \( P(\text{fail} | \text{low stress}) \)
- `computePassGivenTutoring`: \( P(\text{pass} | \text{tutoring}) \)
- `computeFailGivenNoTutoring`: \( P(\text{fail} | \text{no tutoring}) \)
- `computePassGivenHighAttendance`: \( P(\text{pass} | \text{attendance} \geq 90\%) \)
- `computeFailGivenLowAttendance`: \( P(\text{fail} | \text{attendance} < 75\%) \)
- `computePassGivenHighStudyHours`: \( P(\text{pass} | \text{study hours} \geq 6) \)
- `computeFailGivenLowStudyHours`: \( P(\text{fail} | \text{study hours} < 2) \)

**Example Output**:

```
P(fail | female) = 0.2996
P(fail | male) = 0.3000
P(pass | high study hours) = 0.7005
```

#### 3. `conditional_other_probabilities.ts`

**Description**: Computes conditional probabilities of other outcomes given exam results or other variables (e.g., \( P(\text{high stress} | \text{fail}) \)).
**Functions** (20):

- `computeHighStressGivenFail`: \( P(\text{high stress} | \text{fail}) \)
- `computeLowStressGivenPass`: \( P(\text{low stress} | \text{pass}) \)
- `computeTutoringGivenFail`: \( P(\text{tutoring} | \text{fail}) \)
- `computeNoTutoringGivenPass`: \( P(\text{no tutoring} | \text{pass}) \)
- `computeHighIncomeGivenPass`: \( P(\text{high income} | \text{pass}) \)
- `computeLowIncomeGivenFail`: \( P(\text{low income} | \text{fail}) \)
- `computeExtracurricularGivenFail`: \( P(\text{extracurricular} | \text{fail}) \)
- `computeNoExtracurricularGivenPass`: \( P(\text{no extracurricular} | \text{pass}) \)
- `computeInternetAccessGivenFail`: \( P(\text{internet access} | \text{fail}) \)
- `computeNoInternetAccessGivenPass`: \( P(\text{no internet access} | \text{pass}) \)
- `computePreviousGradeAGivenPass`: \( P(\text{previous grade = A} | \text{pass}) \)
- `computePreviousGradeFGivenFail`: \( P(\text{previous grade = F} | \text{fail}) \)
- `computeVisualLearningGivenPass`: \( P(\text{visual learning} | \text{pass}) \)
- `computeKinestheticLearningGivenFail`: \( P(\text{kinesthetic learning} | \text{fail}) \)
- `computePublicSchoolGivenPass`: \( P(\text{public school} | \text{pass}) \)
- `computePrivateSchoolGivenFail`: \( P(\text{private school} | \text{fail}) \)
- `computeHighTeacherQualityGivenPass`: \( P(\text{high teacher quality} | \text{pass}) \)
- `computeLowTeacherQualityGivenFail`: \( P(\text{low teacher quality} | \text{fail}) \)
- `computeHighAttendanceGivenPass`: \( P(\text{attendance} \geq 90\% | \text{pass}) \)
- `computeLowAttendanceGivenFail`: \( P(\text{attendance} < 75\% | \text{fail}) \)

**Example Output**:

```
P(high stress | fail) = 0.1997
P(tutoring | fail) = 0.3998
P(low attendance | fail) = 0.1503
```

#### 4. `joint_probabilities.ts`

**Description**: Computes joint probabilities of two events (e.g., \( P(\text{female AND fail}) \)).
**Functions** (20):

- `computeFemaleAndPass`: \( P(\text{female AND pass}) \)
- `computeFemaleAndFail`: \( P(\text{female AND fail}) \)
- `computeMaleAndPass`: \( P(\text{male AND pass}) \)
- `computeMaleAndFail`: \( P(\text{male AND fail}) \)
- `computePassAndHighIncome`: \( P(\text{pass AND high income}) \)
- `computeFailAndLowIncome`: \( P(\text{fail AND low income}) \)
- `computePassAndParentEducated`: \( P(\text{pass AND parent educated}) \)
- `computeFailAndParentNotEducated`: \( P(\text{fail AND parent not educated}) \)
- `computePassAndExtracurricular`: \( P(\text{pass AND extracurricular}) \)
- `computeFailAndNoExtracurricular`: \( P(\text{fail AND no extracurricular}) \)
- `computePassAndInternetAccess`: \( P(\text{pass AND internet access}) \)
- `computeFailAndNoInternetAccess`: \( P(\text{fail AND no internet access}) \)
- `computePassAndPreviousGradeA`: \( P(\text{pass AND previous grade = A}) \)
- `computeFailAndPreviousGradeF`: \( P(\text{fail AND previous grade = F}) \)
- `computePassAndVisualLearning`: \( P(\text{pass AND visual learning}) \)
- `computeFailAndKinestheticLearning`: \( P(\text{fail AND kinesthetic learning}) \)
- `computePassAndPublicSchool`: \( P(\text{pass AND public school}) \)
- `computeFailAndPrivateSchool`: \( P(\text{fail AND private school}) \)
- `computePassAndHighTeacherQuality`: \( P(\text{pass AND high teacher quality}) \)
- `computeFailAndLowTeacherQuality`: \( P(\text{fail AND low teacher quality}) \)

**Example Output**:

```
P(female AND fail) = 0.1498
P(male AND fail) = 0.1500
P(fail AND low income) = 0.0899
```

#### 5. `statistical_probabilities.ts`

**Description**: Computes statistical summaries (mean, median) for continuous variables conditioned on exam results (e.g., mean attendance for failed students).
**Functions** (10):

- `computeMeanAttendanceForFailed`: Mean attendance for failed students
- `computeMeanAttendanceForPassed`: Mean attendance for passed students
- `computeMeanStudyHoursForFailed`: Mean study hours for failed students
- `computeMeanStudyHoursForPassed`: Mean study hours for passed students
- `computeMeanSleepHoursForFailed`: Mean sleep hours for failed students
- `computeMeanSleepHoursForPassed`: Mean sleep hours for passed students
- `computeMeanDistanceForFailed`: Mean distance to school for failed students
- `computeMeanDistanceForPassed`: Mean distance to school for passed students
- `computeMedianAttendanceForFailed`: Median attendance for failed students
- `computeMedianStudyHoursForFailed`: Median study hours for failed students

**Example Output**:

```
Mean attendance for failed students = 84.95%
Median attendance for failed students = 85.12%
Mean study hours for failed students = 4.02 hours
```

### Notes

- **Thresholds**: For continuous variables in conditional probabilities:
  - High attendance: ≥90%
  - Low attendance: <75%
  - High study hours: ≥6
  - Low study hours: <2
- **Independence**: The dataset fields were generated independently, so conditional probabilities (e.g., \( P(\text{fail} | \text{female}) \)) approximate marginal probabilities (e.g., \( P(\text{fail}) = 0.3 \)). Empirical results may vary slightly due to random sampling.
- **Error Handling**: Functions return 0 if no rows match the condition to avoid division errors.
- **Performance**: The dataset (100,000 rows) is memory-intensive but processes quickly for these calculations.
- **Customization**: To modify thresholds (e.g., low attendance to <70%) or add functions, edit the respective TypeScript files.

## Troubleshooting

- **Missing CSV**: Regenerate the dataset using the TypeScript script from the original generation code (not included here but available upon request).
- **Errors**: Ensure `papaparse` is installed and the CSV file is in the correct directory. Check for typos in field names or file paths.
- **Output Variations**: Small deviations from expected probabilities (e.g., \( P(\text{fail}) \approx 0.3 \)) are due to random sampling.

## Future Enhancements

- Add visualization functions using Chart.js to plot probabilities (e.g., bar chart for \( P(\text{fail} | \text{gender}) \)).
- Implement additional probability functions (e.g., for age or class ranges).
- Optimize performance for larger datasets or add caching for repeated calculations.
