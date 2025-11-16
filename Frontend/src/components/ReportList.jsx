import ReportItem from "./ReportItem";

export default function ReportList({ reports }) {
  if (!reports.length) return <p>No hay reportes</p>;

  return (
    <div>
      {reports.map(r => (
        <ReportItem key={r.reporte_id} report={r} />
      ))}
    </div>
  );
}
