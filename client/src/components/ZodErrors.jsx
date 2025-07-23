export function ZodErrors({ error, className }) {
  if (!error) return null;
  return error.map((err, index) => (
    <div key={index} className={className ?? ""}>
      {err}
    </div>
  ));
}