import { Card } from '@/components/ui/card'
import { Goal } from 'lucide-react'
import React from 'react'

const DailyGoalsCard = () => {
  return (
    <Card className="p-6">
      <h2 className="font-semibold text-lg">
        Today's Goals
      </h2>

      <div className="space-y-5 mt-5">

        <Goal
          label="Calories"
          value={67}
          text="1200 / 1800 kcal"
        />

        <Goal
          label="Protein"
          value={58}
          text="70 / 120 g"
        />

        <Goal
          label="Water"
          value={75}
          text="1.5 / 2 L"
        />

        <Goal
          label="Steps"
          value={62}
          text="6200 / 10000"
        />

      </div>
    </Card>
  )
}

export default DailyGoalsCard