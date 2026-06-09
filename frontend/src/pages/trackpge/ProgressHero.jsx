import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import React from 'react'

const ProgressHero = () => {
  return (
    <Card className="p-6">
      <Badge>Today</Badge>

      <h1 className="text-4xl font-bold mt-4">
        68% Complete
      </h1>

      <p className="text-muted-foreground mt-2">
        You're on track to reach your goals.
      </p>

      <div className="flex gap-2 mt-4 flex-wrap">
        <Badge variant="secondary">
          🔥 3 Day Streak
        </Badge>

        <Badge variant="outline">
          420 kcal remaining
        </Badge>
      </div>
    </Card>
  )
}

export default ProgressHero