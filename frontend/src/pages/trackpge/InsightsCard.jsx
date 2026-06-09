import { Card } from '@/components/ui/card'
import React from 'react'

const InsightsCard = () => {
  return (
    <Card className="p-6">
      <h2 className="font-semibold text-lg">
        Health Insights
      </h2>

      <div className="grid md:grid-cols-4 gap-4 mt-5">

        <div className="rounded-xl bg-muted/30 p-4">
          <p className="text-sm text-muted-foreground">
            Weight Lost
          </p>

          <p className="text-2xl font-bold">
            -3.6kg
          </p>
        </div>

        <div className="rounded-xl bg-muted/30 p-4">
          <p className="text-sm text-muted-foreground">
            Best Streak
          </p>

          <p className="text-2xl font-bold">
            12 Days
          </p>
        </div>

        <div className="rounded-xl bg-muted/30 p-4">
          <p className="text-sm text-muted-foreground">
            Goal Completion
          </p>

          <p className="text-2xl font-bold">
            84%
          </p>
        </div>

        <div className="rounded-xl bg-muted/30 p-4">
          <p className="text-sm text-muted-foreground">
            Protein Increase
          </p>

          <p className="text-2xl font-bold">
            +15%
          </p>
        </div>

      </div>
    </Card>
  )
}

export default InsightsCard