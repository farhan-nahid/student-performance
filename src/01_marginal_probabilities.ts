import { loadDataset } from './helpers';

// 1. P(fail)
async function computeFailProbability(): Promise<number> {
  const data = await loadDataset();
  return data.filter(row => row.exam_result === 'fail').length / data.length;
}

// 2. P(pass)
async function computePassProbability(): Promise<number> {
  const data = await loadDataset();
  return data.filter(row => row.exam_result === 'pass').length / data.length;
}

// 3. P(female)
async function computeFemaleProbability(): Promise<number> {
  const data = await loadDataset();
  return data.filter(row => row.gender === 'female').length / data.length;
}

// 4. P(male)
async function computeMaleProbability(): Promise<number> {
  const data = await loadDataset();
  return data.filter(row => row.gender === 'male').length / data.length;
}

// 5. P(high income)
async function computeHighIncomeProbability(): Promise<number> {
  const data = await loadDataset();
  return data.filter(row => row.family_income === 'high').length / data.length;
}

// 6. P(medium income)
async function computeMediumIncomeProbability(): Promise<number> {
  const data = await loadDataset();
  return data.filter(row => row.family_income === 'medium').length / data.length;
}

// 7. P(low income)
async function computeLowIncomeProbability(): Promise<number> {
  const data = await loadDataset();
  return data.filter(row => row.family_income === 'low').length / data.length;
}

// 8. P(parent educated = yes)
async function computeParentEducatedYesProbability(): Promise<number> {
  const data = await loadDataset();
  return data.filter(row => row.parent_educated === 'yes').length / data.length;
}

// 9. P(parent educated = no)
async function computeParentEducatedNoProbability(): Promise<number> {
  const data = await loadDataset();
  return data.filter(row => row.parent_educated === 'no').length / data.length;
}

// 10. P(extracurricular = yes)
async function computeExtracurricularYesProbability(): Promise<number> {
  const data = await loadDataset();
  return data.filter(row => row.extracurricular === 'yes').length / data.length;
}

// 11. P(extracurricular = no)
async function computeExtracurricularNoProbability(): Promise<number> {
  const data = await loadDataset();
  return data.filter(row => row.extracurricular === 'no').length / data.length;
}

// 12. P(internet access = yes)
async function computeInternetAccessYesProbability(): Promise<number> {
  const data = await loadDataset();
  return data.filter(row => row.internet_access === 'yes').length / data.length;
}

// 13. P(internet access = no)
async function computeInternetAccessNoProbability(): Promise<number> {
  const data = await loadDataset();
  return data.filter(row => row.internet_access === 'no').length / data.length;
}

// 14. P(previous grade = A)
async function computePreviousGradeAProbability(): Promise<number> {
  const data = await loadDataset();
  return data.filter(row => row.previous_grade === 'A').length / data.length;
}

// 15. P(previous grade = B)
async function computePreviousGradeBProbability(): Promise<number> {
  const data = await loadDataset();
  return data.filter(row => row.previous_grade === 'B').length / data.length;
}

// 16. P(visual learning)
async function computeVisualLearningProbability(): Promise<number> {
  const data = await loadDataset();
  return data.filter(row => row.learning_style === 'visual').length / data.length;
}

// 17. P(public school)
async function computePublicSchoolProbability(): Promise<number> {
  const data = await loadDataset();
  return data.filter(row => row.school_type === 'public').length / data.length;
}

// 18. P(high teacher quality)
async function computeHighTeacherQualityProbability(): Promise<number> {
  const data = await loadDataset();
  return data.filter(row => row.teacher_quality === 'high').length / data.length;
}

// 19. P(high stress)
async function computeHighStressProbability(): Promise<number> {
  const data = await loadDataset();
  return data.filter(row => row.stress_level === 'high').length / data.length;
}

// 20. P(tutoring = yes)
async function computeTutoringYesProbability(): Promise<number> {
  const data = await loadDataset();
  return data.filter(row => row.tutoring === 'yes').length / data.length;
}

// Main function to demonstrate usage
async function main() {
  try {
    console.log(`P(fail) = ${(await computeFailProbability()).toFixed(4)}`);
    console.log(`P(pass) = ${(await computePassProbability()).toFixed(4)}`);
    console.log(`P(male) = ${(await computeMaleProbability()).toFixed(4)}`);
    console.log(`P(female) = ${(await computeFemaleProbability()).toFixed(4)}`);
    console.log(`P(high income) = ${(await computeHighIncomeProbability()).toFixed(4)}`);
    console.log(`P(medium income) = ${(await computeMediumIncomeProbability()).toFixed(4)}`);
    console.log(`P(low income) = ${(await computeLowIncomeProbability()).toFixed(4)}`);
    console.log(`P(extracurricular = yes) = ${(await computeExtracurricularYesProbability()).toFixed(4)}`);
    console.log(`P(extracurricular = no) = ${(await computeExtracurricularNoProbability()).toFixed(4)}`);
    console.log(`P(internet access = yes) = ${(await computeInternetAccessYesProbability()).toFixed(4)}`);
    console.log(`P(internet access = no) = ${(await computeInternetAccessNoProbability()).toFixed(4)}`);
    console.log(`P(previous grade = A) = ${(await computePreviousGradeAProbability()).toFixed(4)}`);
    console.log(`P(previous grade = B) = ${(await computePreviousGradeBProbability()).toFixed(4)}`);
    console.log(`P(visual learning) = ${(await computeVisualLearningProbability()).toFixed(4)}`);
    console.log(`P(public school) = ${(await computePublicSchoolProbability()).toFixed(4)}`);
    console.log(`P(high teacher quality) = ${(await computeHighTeacherQualityProbability()).toFixed(4)}`);
    console.log(`P(high stress) = ${(await computeHighStressProbability()).toFixed(4)}`);
    console.log(`P(tutoring = yes) = ${(await computeTutoringYesProbability()).toFixed(4)}`);
  } catch (error) {
    console.error('Error:', error);
  }
}

main();