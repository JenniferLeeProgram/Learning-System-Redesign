export function MetricLegend() {
  const metrics = [
    { label: 'Motivation', color: '#7FA998', description: 'Intrinsic drive & engagement' },
    { label: 'Cognitive Load', color: '#D4A574', description: 'Mental effort required' },
    { label: 'Confidence', color: '#5B8BA0', description: 'Self-efficacy & competence' },
    { label: 'Skill Transfer', color: '#8B7FA9', description: 'Real-world application' },
  ];

  return (
    <div className="bg-muted/30 border border-border rounded-lg p-4">
      <div className="text-xs text-muted-foreground mb-3">LEARNING INDICATORS</div>
      <div className="grid grid-cols-2 gap-3">
        {metrics.map((metric) => (
          <div key={metric.label} className="flex items-center gap-2">
            <div
              className="w-3 h-3 rounded-full flex-shrink-0"
              style={{ backgroundColor: metric.color }}
            />
            <div className="min-w-0">
              <div className="text-xs truncate">{metric.label}</div>
              <div className="text-xs text-muted-foreground truncate">{metric.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
