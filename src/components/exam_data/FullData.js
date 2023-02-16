import ExamData from "./ExamData";
import PhysicianData from "./PhysicianData";
import PatientData from "./PatientData";

const FullData = (props) => {
  const data = props.data
  const patientData = data.patient_data
  const physicianData = data.physician
  const examsData = data.exams
  return (
		<div>
      <PatientData patient={patientData}/>
      <PhysicianData physician={physicianData}/>
      <ExamData exams={examsData}/>
		</div>
	);
}

export default FullData;
