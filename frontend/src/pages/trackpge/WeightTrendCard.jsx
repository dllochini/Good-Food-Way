import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { TrendingUp } from 'lucide-react'
import React from 'react'

const WeightTrendCard = () => {
  return (
    <Card className="p-6">
      <div className="flex items-center gap-2">
        <TrendingUp className="h-5 w-5 text-primary" />

        <h2 className="font-semibold">
          Weight Trend
        </h2>
      </div>

      <div className="h-64 mt-4">
        {/* Recharts LineChart */}
      </div>

      <div className="flex justify-between mt-4">
        <Badge variant="secondary">
          Start: 72kg
        </Badge>

        <Badge>
          Current: 68.4kg
        </Badge>
      </div>
    </Card>
  )
}

export default WeightTrendCard