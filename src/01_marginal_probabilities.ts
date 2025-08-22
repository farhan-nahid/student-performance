import { loadDataset } from './helpers';
import type { Student } from './type';

// 1. P(fail)
function computeFailProbability(data: Student[]): number {
  return data.filter(row => row.exam_result === 'fail').length / data.length;
}

// 2. P(pass)
function computePassProbability(data: Student[]): number {
  return data.filter(row => row.exam_result === 'pass').length / data.length;
}

// 3. P(female)
function computeFemaleProbability(data: Student[]): number {
  return data.filter(row => row.gender === 'female').length / data.length;
}

// 4. P(male)
function computeMaleProbability(data: Student[]): number {
  return data.filter(row => row.gender === 'male').length / data.length;
}

// 5. P(high income)
function computeHighIncomeProbability(data: Student[]): number {
  return data.filter(row => row.family_income === 'high').length / data.length;
}

// 6. P(medium income)
function computeMediumIncomeProbability(data: Student[]): number {
  return data.filter(row => row.family_income === 'medium').length / data.length;
}

// 7. P(low income)
function computeLowIncomeProbability(data: Student[]): number {
  return data.filter(row => row.family_income === 'low').length / data.length;
}

// 8. P(parent educated = yes)
function computeParentEducatedYesProbability(data: Student[]): number {
  return data.filter(row => row.parent_educated === 'yes').length / data.length;
}

// 9. P(parent educated = no)
function computeParentEducatedNoProbability(data: Student[]): number {
  return data.filter(row => row.parent_educated === 'no').length / data.length;
}

// 10. P(extracurricular = yes)
function computeExtracurricularYesProbability(data: Student[]): number {
  return data.filter(row => row.extracurricular === 'yes').length / data.length;
}

// 11. P(extracurricular = no)
function computeExtracurricularNoProbability(data: Student[]): number {
  return data.filter(row => row.extracurricular === 'no').length / data.length;
}

// 12. P(internet access = yes)
function computeInternetAccessYesProbability(data: Student[]): number {
  return data.filter(row => row.internet_access === 'yes').length / data.length;
}

// 13. P(internet access = no)
function computeInternetAccessNoProbability(data: Student[]): number {
  return data.filter(row => row.internet_access === 'no').length / data.length;
}

// 14. P(previous grade = A)
function computePreviousGradeAProbability(data: Student[]): number {
  return data.filter(row => row.previous_grade === 'A').length / data.length;
}

// 15. P(previous grade = B)
function computePreviousGradeBProbability(data: Student[]): number {
  return data.filter(row => row.previous_grade === 'B').length / data.length;
}

// 16. P(visual learning)
function computeVisualLearningProbability(data: Student[]): number {
  return data.filter(row => row.learning_style === 'visual').length / data.length;
}

// 17. P(public school)
function computePublicSchoolProbability(data: Student[]): number {
  return data.filter(row => row.school_type === 'public').length / data.length;
}

// 18. P(high teacher quality)
function computeHighTeacherQualityProbability(data: Student[]): number {
  return data.filter(row => row.teacher_quality === 'high').length / data.length;
}

// 19. P(high stress)
function computeHighStressProbability(data: Student[]): number {
  return data.filter(row => row.stress_level === 'high').length / data.length;
}

// 20. P(tutoring = yes)
function computeTutoringYesProbability(data: Student[]): number {
  return data.filter(row => row.tutoring === 'yes').length / data.length;
}

// Main function to demonstrate usage
async function main() {
  try {
    const data = await loadDataset();

    console.log(`P(fail) = ${computeFailProbability(data).toFixed(4)}`);
    console.log(`P(pass) = ${computePassProbability(data).toFixed(4)}`);
    console.log(`P(male) = ${computeMaleProbability(data).toFixed(4)}`);
    console.log(`P(female) = ${computeFemaleProbability(data).toFixed(4)}`);
    console.log(`P(high income) = ${computeHighIncomeProbability(data).toFixed(4)}`);
    console.log(`P(medium income) = ${computeMediumIncomeProbability(data).toFixed(4)}`);
    console.log(`P(low income) = ${computeLowIncomeProbability(data).toFixed(4)}`);
    console.log(`P(parent educated = yes) = ${computeParentEducatedYesProbability(data).toFixed(4)}`);
    console.log(`P(parent educated = no) = ${computeParentEducatedNoProbability(data).toFixed(4)}`);
    console.log(`P(extracurricular = yes) = ${computeExtracurricularYesProbability(data).toFixed(4)}`);
    console.log(`P(extracurricular = no) = ${computeExtracurricularNoProbability(data).toFixed(4)}`);
    console.log(`P(internet access = yes) = ${computeInternetAccessYesProbability(data).toFixed(4)}`);
    console.log(`P(internet access = no) = ${computeInternetAccessNoProbability(data).toFixed(4)}`);
    console.log(`P(previous grade = A) = ${computePreviousGradeAProbability(data).toFixed(4)}`);
    console.log(`P(previous grade = B) = ${computePreviousGradeBProbability(data).toFixed(4)}`);
    console.log(`P(visual learning) = ${computeVisualLearningProbability(data).toFixed(4)}`);
    console.log(`P(public school) = ${computePublicSchoolProbability(data).toFixed(4)}`);
    console.log(`P(high teacher quality) = ${computeHighTeacherQualityProbability(data).toFixed(4)}`);
    console.log(`P(high stress) = ${computeHighStressProbability(data).toFixed(4)}`);
    console.log(`P(tutoring = yes) = ${computeTutoringYesProbability(data).toFixed(4)}`);
  } catch (error) {
    console.error('Error:', error);
  }
}

main();
