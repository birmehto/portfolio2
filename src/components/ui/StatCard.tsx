import type { Stat } from '../../types'

interface StatCardProps extends Stat {}

export function StatCard({ number, label }: StatCardProps) {
  return (
    <div className="stat-card reveal">
      <div className="stat-number">{number}</div>
      <div className="stat-label">{label}</div>
    </div>
  )
}
