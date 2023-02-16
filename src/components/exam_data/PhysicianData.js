const PhysicianData = (props) => {
  const physicianData = props.physician

  return (
		<div>
      <p><strong>Dados do Médico</strong></p>
      <dl>
        {Object.entries(physicianData).map(([key, value]) => (
        <span>
          <dt><strong>{key}</strong></dt>
          <dd>{value}</dd>
        </span>
        ))}
      </dl>
		</div>
	);
}

export default PhysicianData;
