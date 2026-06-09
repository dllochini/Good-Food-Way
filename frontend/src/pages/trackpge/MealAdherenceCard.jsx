import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import React from 'react'

const MealAdherenceCard = () => {
  return (
    <Card className="p-6">
  <h2 className="font-semibold">
    Meal Plan Adherence
  </h2>

  <div className="space-y-4 mt-5">

    <div className="flex justify-between">
      <span>Breakfast</span>
      <Badge>Completed</Badge>
    </div>

    <div className="flex justify-between">
      <span>Lunch</span>
      <Badge>Completed</Badge>
    </div>

    <div className="flex justify-between">
      <span>Dinner</span>
      <Badge variant="secondary">
        Pending
      </Badge>
    </div>

  </div>

  <div className="mt-6">
    <Progress value={66} />
  </div>
</Card>
  )
}

export default MealAdherenceCard