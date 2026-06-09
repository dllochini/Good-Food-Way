import { Card } from '@/components/ui/card'
import { Footprints } from 'lucide-react'
import React from 'react'

const ActivityTrendCard = () => {
    return (
        <Card className="p-6">
            <div className="flex items-center gap-2">
                <Footprints className="h-5 w-5 text-primary" />

                <h2 className="font-semibold">
                    Weekly Activity
                </h2>
            </div>

            <div className="h-64 mt-4">
                {/* Recharts BarChart */}
            </div>
        </Card>
    )
}

export default ActivityTrendCard