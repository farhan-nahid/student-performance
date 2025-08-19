# Student Performance Dataset and Probability Functions

## Overview

This project provides a synthetic dataset (`student_performance_dataset.csv`) with academic performance and related attributes for 200,000 students, along with five TypeScript files implementing 100 probability functions. These functions analyze marginal, conditional, joint, and statistical probabilities, focusing on relationships between exam outcomes and variables like gender, attendance, and screen time.

## Table of Contents

- [Overview](#overview)
- [Project Files](#project-files)
- [Dataset Description](#dataset-description)
  - [Dataset Notes](#dataset-notes)
- [Dataset Generation](#dataset-generation)
  - [Generating the Dataset](#generating-the-dataset)
  - [Regenerating the Dataset](#regenerating-the-dataset)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Project](#running-the-project)
- [Probability Functions](#probability-functions)
  - [1. `marginal_probabilities.ts`](#1-marginal_probabilitiests)
  - [2. `conditional_exam_probabilities.ts`](#2-conditional_exam_probabilitiests)
  - [3. `conditional_other_probabilities.ts`](#3-conditional_other_probabilitiests)
  - [4. `joint_probabilities.ts`](#4-joint_probabilitiests)
  - [5. `statistical_probabilities.ts`](#5-statistical_probabilitiests)
  - [Notes](#notes)
- [Sample Output](#sample-output)
- [Troubleshooting](#troubleshooting)
- [Future Enhancements](#future-enhancements)
- [Project Information](#project-information)
  - [License](#license)
  - [Contributing](#contributing)
  - [Contact](#contact)

## Project Files

- **`src/helpers.ts`**: Contains the `loadDataset` function, which loads and parses the CSV file into TypeScript objects using `papaparse`.
- **`src/type.ts`**: Defines the `Student` interface, specifying the structure and types for each field in the dataset for type safety.
- **`src/marginal_probabilities.ts`**: Computes marginal probabilities for single events (e.g., \( P(\text{fail}) \)).
- **`src/conditional_exam_probabilities.ts`**: Computes conditional probabilities of exam results given other variables (e.g., \( P(\text{fail} | \text{female}) \)).
- **`src/conditional_other_probabilities.ts`**: Computes conditional probabilities of other outcomes given exam results or variables (e.g., \( P(\text{high stress} | \text{fail}) \)).
- **`src/joint_probabilities.ts`**: Computes joint probabilities of two events (e.g., \( P(\text{female AND fail}) \)).
- **`src/statistical_probabilities.ts`**: Computes statistical summaries (mean, median) for continuous variables (e.g., mean attendance for failed students).
- **`index.ts`**: Utility functions for random sampling and normal distribution, used for dataset generation.

## Dataset Description

The dataset (`student_performance_dataset.csv`) contains 200,000 rows and 20 fields, generated with specific probability distributions to simulate realistic student performance scenarios. The fields are:

| Field                   | Type    | Description                                          | Distribution (Failed Students)            | Distribution (Passed Students)            | Overall Distribution                      |
| ----------------------- | ------- | ---------------------------------------------------- | ----------------------------------------- | ----------------------------------------- | ----------------------------------------- |
| `gender`                | String  | Student gender (`male`, `female`)                    | 50% male, 50% female                      | 50% male, 50% female                      | 50% male, 50% female                      |
| `exam_result`           | String  | Exam outcome (`pass`, `fail`)                        | 30% fail                                  | 70% pass                                  | 70% pass, 30% fail                        |
| `age`                   | Integer | Student age (5–18)                                   | Uniform [5, 18]                           | Uniform [5, 18]                           | Uniform [5, 18]                           |
| `class`                 | Integer | Grade level (1–12)                                   | Uniform [1, 12]                           | Uniform [1, 12]                           | Uniform [1, 12]                           |
| `parent_educated`       | String  | Parent education status (`yes`, `no`)                | 60% yes, 40% no                           | 60% yes, 40% no                           | 60% yes, 40% no                           |
| `daily_study_hours`     | Float   | Hours studied daily                                  | Normal(μ=2, σ=1.5), [0, 10]               | Normal(μ=5, σ=1.5), [0, 10]               | Varies by exam_result                     |
| `attendance_percentage` | Float   | Attendance percentage                                | Normal(μ=70, σ=10), [0, 100]              | Normal(μ=90, σ=10), [0, 100]              | Varies by exam_result                     |
| `family_income`         | String  | Family income level (`low`, `medium`, `high`)        | 30% low, 50% medium, 20% high             | 30% low, 50% medium, 20% high             | 30% low, 50% medium, 20% high             |
| `extracurricular`       | String  | Participation in extracurriculars (`yes`, `no`)      | 50% yes, 50% no                           | 50% yes, 50% no                           | 50% yes, 50% no                           |
| `sleep_hours`           | Float   | Hours slept nightly                                  | Normal(μ=9, σ=1.5), [4, 12]               | Normal(μ=7, σ=1.5), [4, 12]               | Varies by exam_result                     |
| `internet_access`       | String  | Internet access (`yes`, `no`)                        | 80% yes, 20% no                           | 80% yes, 20% no                           | 80% yes, 20% no                           |
| `previous_grade`        | String  | Previous academic grade (`A`, `B`, `C`, `D`, `F`)    | 20% A, 30% B, 30% C, 15% D, 5% F          | 20% A, 30% B, 30% C, 15% D, 5% F          | 20% A, 30% B, 30% C, 15% D, 5% F          |
| `learning_style`        | String  | Learning style (`visual`, `auditory`, `kinesthetic`) | 30% visual, 30% auditory, 40% kinesthetic | 30% visual, 30% auditory, 40% kinesthetic | 30% visual, 30% auditory, 40% kinesthetic |
| `school_type`           | String  | School type (`public`, `private`, `homeschool`)      | 60% public, 30% private, 10% homeschool   | 60% public, 30% private, 10% homeschool   | 60% public, 30% private, 10% homeschool   |
| `teacher_quality`       | String  | Teacher quality (`high`, `medium`, `low`)            | 20% high, 50% medium, 30% low             | 20% high, 50% medium, 30% low             | 20% high, 50% medium, 30% low             |
| `stress_level`          | String  | Stress level (`low`, `moderate`, `high`)             | 30% low, 50% moderate, 20% high           | 30% low, 50% moderate, 20% high           | 30% low, 50% moderate, 20% high           |
| `distance_to_school`    | Float   | Distance to school (km)                              | Normal(μ=5, σ=3), [0, 20]                 | Normal(μ=5, σ=3), [0, 20]                 | Normal(μ=5, σ=3), [0, 20]                 |
| `tutoring`              | String  | Tutoring participation (`yes`, `no`)                 | 40% yes, 60% no                           | 40% yes, 60% no                           | 40% yes, 60% no                           |
| `mobile_screen_time`    | Float   | Daily mobile screen time (hours)                     | Normal(μ=5, σ=1.5), [0, 10]               | Normal(μ=2, σ=1.5), [0, 10]               | Varies by exam_result                     |
| `pc_games_time`         | Float   | Daily PC gaming time (hours)                         | Normal(μ=4, σ=1.2), [0, 8]                | Normal(μ=1, σ=1.2), [0, 8]                | Varies by exam_result                     |

### Dataset Notes

- **Size**: ~20–30 MB (200,000 rows).
- **Conditional Distributions**: Fields like `daily_study_hours`, `attendance_percentage`, `sleep_hours`, `mobile_screen_time`, and `pc_games_time` are generated conditionally based on `exam_result`. Failed students have lower attendance (μ=70%), fewer study hours (μ=2), more sleep (μ=9), higher mobile screen time (μ=5), and higher PC gaming time (μ=4) compared to passed students (μ=90%, μ=5, μ=7, μ=2, μ=1, respectively).
- **Independence**: Other fields are generated independently, so conditional probabilities (e.g., \( P(\text{fail} | \text{female}) \)) approximate marginal probabilities (e.g., \( P(\text{fail}) = 0.3 \)) unless empirical correlations arise.
- **Access**: Ensure `student_performance_dataset.csv` is in the `data/` directory. If missing, regenerate it (see [Regenerating the Dataset](#regenerating-the-dataset)).

## Dataset Generation

### Generating the Dataset

The dataset can be generated using the `index.ts` script, which includes utility functions for random sampling and normal distribution. To create the dataset:

- **Key Functions in `index.ts`**:
  - `randomChoice`: Generates random choices based on weights (e.g., for `gender`, `exam_result`).
  - `normalRandom`: Generates values from a normal distribution (e.g., for `daily_study_hours`, `mobile_screen_time`).
  - `clip`: Ensures values stay within specified ranges.
- **Usage**: Run `bun run index.ts` to generate `data/student_performance_dataset.csv`. The script creates a CSV with 200,000 rows, following the distributions in the [Dataset Description](#dataset-description).

**Sample CSV Format:**

```
gender,exam_result,age,class,parent_educated,daily_study_hours,attendance_percentage,family_income,extracurricular,sleep_hours,internet_access,previous_grade,learning_style,school_type,teacher_quality,stress_level,distance_to_school,tutoring,mobile_screen_time,pc_games_time
male,pass,15,10,yes,5.2,92.1,medium,yes,7.1,yes,B,visual,public,medium,moderate,3.2,no,2.5,1.0
female,fail,12,7,no,1.8,68.4,low,no,9.2,no,C,kinesthetic,private,low,high,7.8,yes,5.1,4.2
...
```

### Regenerating the Dataset

If the dataset is missing or needs regeneration:

1. Ensure `index.ts` is configured with the correct distributions (as shown in [Dataset Description](#dataset-description)).
2. Run `bun run index.ts` to generate `data/student_performance_dataset.csv`.
3. Verify the output CSV matches the expected structure (20 fields, 200,000 rows).

**Note**: A separate `generateDataset.ts` is referenced but not included. Use `index.ts` as a template for dataset generation.

## Prerequisites

- **Bun**: JavaScript runtime for running TypeScript files.
- **Node.js** (optional): If adapting scripts for Node.js instead of Bun.
- **Dependencies**:
  - `papaparse`: For CSV parsing in probability functions.
- **Hardware**: Sufficient memory for processing a ~20–30 MB CSV file.

## Installation

1. **Install Bun**:
   - Follow instructions at [bun.sh](https://bun.sh) to install Bun.
2. **Set Up Project**:
   - Clone or create the project directory.
   - Place the TypeScript files (`index.ts`, `src/helpers.ts`, `src/type.ts`, and probability files) in the project directory.
3. **Install Dependencies**:
   ```bash
   bun install papaparse
   ```
4. **Ensure CSV File**:
   - Place `student_performance_dataset.csv` in the `data/` directory or generate it using `index.ts`.

## Running the Project

1. **Run Probability Functions**:
   - Execute a specific file:
     ```bash
     bun run src/marginal_probabilities.ts
     bun run src/conditional_exam_probabilities.ts
     bun run src/conditional_other_probabilities.ts
     bun run src/joint_probabilities.ts
     bun run src/statistical_probabilities.ts
     ```
   - Each file’s `main` function outputs example probabilities to the console.
2. **Generate Dataset**:
   - Run the dataset generation script:
     ```bash
     bun run index.ts
     ```
   - This creates `data/student_performance_dataset.csv`.
3. **Verify Output**:
   - Check the console for probability outputs or the `data/` directory for the generated CSV.

## Probability Functions

### 1. `marginal_probabilities.ts`

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

### 2. `conditional_exam_probabilities.ts`

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

### 3. `conditional_other_probabilities.ts`

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

### 4. `joint_probabilities.ts`

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

### 5. `statistical_probabilities.ts`

**Description**: Computes statistical summaries (mean, median) for continuous variables conditioned on exam results.  
**Functions** (14):

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
- `computeMedianMobileScreenTimeForFailed`: Median mobile screen time for failed students
- `computeMedianMobileScreenTimeForPassed`: Median mobile screen time for passed students
- `computeMedianPcGamesTimeForFailed`: Median PC games time for failed students
- `computeMedianPcGamesTimeForPassed`: Median PC games time for passed students

### Notes

- **Thresholds**: For continuous variables in conditional probabilities:
  - High attendance: ≥90%
  - Low attendance: <75%
  - High study hours: ≥6
  - Low study hours: <2
- **Independence**: Most fields were generated independently, so conditional probabilities approximate marginal probabilities unless empirical correlations arise. Exceptions are `daily_study_hours`, `attendance_percentage`, `sleep_hours`, `mobile_screen_time`, and `pc_games_time`, which are conditioned on `exam_result`.
- **Error Handling**: Functions return 0 if no rows match the condition to avoid division errors.
- **Performance**: The dataset (200,000 rows) is memory-intensive but processes quickly for these calculations.
- **Customization**: To modify thresholds (e.g., low attendance to <70%) or add functions, edit the respective TypeScript files.

## Sample Output

Below are example outputs from the `main` functions in each probability file, based on a generated dataset:

**`marginal_probabilities.ts`**:

```
P(fail) = 0.3014
P(pass) = 0.6986
P(male) = 0.4990
P(female) = 0.5010
P(high income) = 0.1988
P(medium income) = 0.5026
P(low income) = 0.2986
P(extracurricular = yes) = 0.4985
...
```

**`conditional_exam_probabilities.ts`**:

```
P(pass | female) = 0.6986
P(fail | female) = 0.3014
P(pass | male) = 0.6986
P(fail | male) = 0.3014
P(pass | high attendance) = 0.9813
P(fail | low attendance) = 0.8171
...
```

**`conditional_other_probabilities.ts`**:

```
P(high stress | fail) = 0.1981
P(low stress | pass) = 0.2986
P(high attendance | pass) = 0.5043
P(low attendance | fail) = 0.6900
...
```

**`joint_probabilities.ts`**:

```
P(female AND pass) = 0.3500
P(female AND fail) = 0.1510
P(male AND pass) = 0.3486
P(male AND fail) = 0.1504
P(pass AND high income) = 0.1396
P(fail AND low income) = 0.0888
...
```

**`statistical_probabilities.ts`**:

```
Mean attendance for failed students = 70.01%
Mean attendance for passed students = 89.23%
Mean study hours for failed students = 2.07 hours
Mean study hours for passed students = 5.00 hours
Mean mobile screen time for failed students = 5.00 hours
Mean mobile screen time for passed students = 2.07 hours
...
```

## Troubleshooting

- **Missing CSV**: Regenerate the dataset using `index.ts` (see [Regenerating the Dataset](#regenerating-the-dataset)).
- **Errors**: Ensure `papaparse` is installed and the CSV file is in the `data/` directory. Check for typos in field names or file paths.
- **Output Variations**: Small deviations from expected probabilities (e.g., \( P(\text{fail}) \approx 0.3 \)) are due to random sampling.
- **Performance Issues**: For large datasets, ensure sufficient memory (at least 4GB RAM recommended).

## Future Enhancements

- Add visualization functions using Chart.js to plot probabilities (e.g., bar chart for \( P(\text{fail} | \text{gender}) \)).
- Implement additional probability functions for age or class ranges.
- Optimize performance with caching for repeated calculations.
- Add support for generating datasets with correlated variables for more realistic analysis.

## Project Information

### License

This project is licensed under the terms described in the `LICENSE` file.

### Contributing

Contributions are welcome! To add new probability functions, improve performance, or enhance dataset generation:

1. Open an issue to discuss proposed changes.
2. Submit a pull request with clear documentation of changes.

### Contact

For questions or support, contact the project maintainers via GitHub issues.
