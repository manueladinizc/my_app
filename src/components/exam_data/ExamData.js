import './ExamData.css';

const ExamData = (props) => {
  const examsData = props.exams;
	const tableTitles = Object.keys(examsData[0]);
  
	return (
		<div>
      <p><strong>Exames</strong></p>
			<table className="table table-responsive">
				<thead>
					<tr>
						{tableTitles.map((title) => (
						<th>{title}</th>
						))}
					</tr>
				</thead>
				<tbody>
					{examsData.map((exam) =>
						<tr>
						{Object.values(exam).map((value =>
							<td>{value}</td>
							))}
						</tr>
					)}
				</tbody>
			</table>
		</div>
	);
}

export default ExamData;