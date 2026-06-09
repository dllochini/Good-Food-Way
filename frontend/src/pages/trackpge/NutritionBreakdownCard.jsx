import { Card } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { PieChart } from 'lucide-react'
import React from 'react'

const NutritionBreakdownCard = () => {
  return (
    <Card className="p-6">
      <div className="flex items-center gap-2">
        <PieChart className="h-5 w-5 text-primary" />

        <h2 className="font-semibold">
          Nutrition Breakdown
        </h2>
      </div>

      <div className="mt-6 space-y-4">

        <div>
          <div className="flex justify-between">
            <span>Protein</span>
            <span>35%</span>
          </div>

          <Progress value={35} />
        </div>

        <div>
          <div className="flex justify-between">
            <span>Carbs</span>
            <span>45%</span>
          </div>

          <Progress value={45} />
        </div>

        <div>
          <div className="flex justify-between">
            <span>Fat</span>
            <span>20%</span>
          </div>

          <Progress value={20} />
        </div>

      </div>
    </Card>
  )
}

export default NutritionBreakdownCard