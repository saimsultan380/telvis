import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { telvisStats } from "@/lib/marketing";

export function StatsBand() {
  return (
    <section className="telvis-section telvis-stats-band" aria-label="Telvis at a glance">
      <div className="telvis-section-inner">
        <ScrollReveal variant="text">
          <div className="telvis-stats-grid">
            {telvisStats.map((stat) => (
              <div key={stat.label} className="telvis-glass telvis-stat-card">
                <p className="telvis-stat-value">{stat.value}</p>
                <p className="telvis-stat-label">{stat.label}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
