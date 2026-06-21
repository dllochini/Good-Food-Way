import {
  Download,
  Eye,
  TriangleAlert,
  Upload,
} from "lucide-react";

import PageHeader from "@/shared/components/PageHeader";

import { Button } from "@/shared/ui/button";
import { Card } from "@/shared/ui/card";
import { Badge } from "@/shared/ui/badge";

export default function ReportsPage() {
  const reports = [
    {
      title: "Blood Work",
      date: "Jun 7, 2026",
      status: "Normal",
    },
    {
      title: "Lipid Panel",
      date: "Jun 1, 2026",
      status: "Attention",
    },
    {
      title: "Vitamin Panel",
      date: "Jun 1, 2026",
      status: "Attention",
    },
    {
      title: "Thyroid Panel",
      date: "Processing",
      status: "Processing",
    },
  ];

  const getBadge = (status) => {
    switch (status) {
      case "Normal":
        return (
          <Badge className="bg-green-100 text-green-700 hover:bg-green-100">
            Normal
          </Badge>
        );

      case "Attention":
        return (
          <Badge className="bg-yellow-100 text-yellow-700 hover:bg-yellow-100">
            Attention
          </Badge>
        );

      case "Processing":
        return (
          <Badge variant="secondary">
            Processing
          </Badge>
        );

      default:
        return <Badge>{status}</Badge>;
    }
  };

  return (
    <>
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
        <PageHeader
          title="Health Reports"
          subtitle="Review uploaded reports and health insights."
          showBack={false}
        />

        <Button>
          <Upload className="h-4 w-4 mr-2" />
          Upload Report
        </Button>
      </div>

      <Card className="overflow-hidden">
        <div className="border-b px-5 py-4">
          <h2 className="font-semibold">
            Uploaded Reports
          </h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-muted/50">
              <tr>
                <th className="px-5 py-3 text-left text-sm font-medium">
                  Report
                </th>

                <th className="px-5 py-3 text-left text-sm font-medium">
                  Date
                </th>

                <th className="px-5 py-3 text-left text-sm font-medium">
                  Status
                </th>

                <th className="px-5 py-3 text-right text-sm font-medium">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody>
              {reports.map((report) => (
                <tr
                  key={report.title}
                  className="border-t"
                >
                  <td className="px-5 py-4 font-medium">
                    {report.title}
                  </td>

                  <td className="px-5 py-4 text-muted-foreground">
                    {report.date}
                  </td>

                  <td className="px-5 py-4">
                    {getBadge(report.status)}
                  </td>

                  <td className="px-5 py-4">
                    <div className="flex justify-end gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                      >
                        <Eye className="h-4 w-4 mr-2" />
                        View
                      </Button>

                      <Button
                        size="sm"
                        variant="outline"
                      >
                        <Download className="h-4 w-4 mr-2" />
                        Download
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      <Card className="p-6">
        <h2 className="font-semibold mb-4">
          Important Findings
        </h2>

        <div className="space-y-4">
          <div className="flex gap-3">
            <TriangleAlert className="h-5 w-5 text-yellow-500 shrink-0 mt-0.5" />

            <div>
              <p className="font-medium">
                Vitamin D Below Range
              </p>

              <p className="text-sm text-muted-foreground">
                Consider discussing supplementation and lifestyle
                adjustments with your healthcare provider.
              </p>
            </div>
          </div>

          <div className="flex gap-3">
            <TriangleAlert className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />

            <div>
              <p className="font-medium">
                Elevated LDL Cholesterol
              </p>

              <p className="text-sm text-muted-foreground">
                Dietary improvements and follow-up monitoring may
                be beneficial.
              </p>
            </div>
          </div>
        </div>
      </Card>

      <Card className="border-yellow-200 bg-yellow-50 p-5">
        <div className="flex gap-3">
          <TriangleAlert className="h-5 w-5 text-yellow-700 shrink-0 mt-0.5" />

          <div>
            <h3 className="font-medium text-yellow-900">
              Medical Disclaimer
            </h3>

            <p className="mt-2 text-sm text-yellow-800">
              These insights are for informational purposes only and
              should not replace professional medical advice,
              diagnosis, or treatment.
            </p>
          </div>
        </div>
      </Card>
    </>
  );
}