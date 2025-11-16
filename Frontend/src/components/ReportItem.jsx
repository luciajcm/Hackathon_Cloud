export default function ReportItem({ report }) {
  return (
    <div style={{ border: "1px solid #aaa", padding: 8, marginBottom: 8 }}>
      <b>{report.tipo}</b>
      <p>{report.descripcion}</p>
      <small>Urgencia: {report.urgencia}</small>
    </div>
  );
}
