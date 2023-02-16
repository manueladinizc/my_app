const PatientData = (props) => {
  const patientName = props.patient.name
  const patientData = props.patient
  delete patientData.name
   
  return (
		<div>
      <h3>Exames do(a) paciente: {patientName}</h3>
      <dl>
        {Object.entries(patientData).map(([key, value]) => (
        <span>
          <dt><strong>{key}</strong></dt>
          <dd>{value}</dd>
        </span>
        ))}
      </dl>
		</div>
	);
}

export default PatientData;
