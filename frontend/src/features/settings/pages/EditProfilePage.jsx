import { useNavigate } from "react-router-dom";

import {
  ArrowLeft,
  UserRound,
  Camera,
  Save,
} from "lucide-react";

import { Button } from "@/shared/ui/button";
import { Card } from "@/shared/ui/card";
import { Input } from "@/shared/ui/input";
import { Label } from "@/shared/ui/label";
import { Textarea } from "@/shared/ui/textarea";
import PageHeader from "@/shared/components/PageHeader";

export default function EditProfilePage() {
  const navigate = useNavigate();

  return (
    <>
      {/* HEADER */}

      {/* <div className="space-y-4">
        <Button
          variant="ghost"
          className="w-fit"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back
        </Button>

        <div className="space-y-1">
          <h1 className="text-3xl font-bold">
            Edit Profile
          </h1>

          <p className="text-muted-foreground">
            
          </p>
        </div>
      </div> */}

      <PageHeader
        title="Edit Profile"
        subtitle="Update your personal information and health preferences."
      />

      {/* PROFILE PHOTO */}

      <Card className="p-6">
        <div className="flex flex-col md:flex-row md:items-center gap-6">
          <div className="h-24 w-24 rounded-3xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
            <UserRound className="h-12 w-12" />
          </div>

          <div className="space-y-3">
            <div>
              <h2 className="font-semibold text-lg">
                Profile Photo
              </h2>

              <p className="text-sm text-muted-foreground">
                Upload or update your profile picture.
              </p>
            </div>

            <Button variant="outline">
              <Camera className="h-4 w-4 mr-2" />
              Change Photo
            </Button>
          </div>
        </div>
      </Card>

      {/* PERSONAL INFORMATION */}

      <Card className="p-6">
        <div className="space-y-5">
          <h2 className="font-semibold text-lg">
            Personal Information
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Full Name</Label>
              <Input defaultValue="Lochini Perera" />
            </div>

            <div className="space-y-2">
              <Label>Email Address</Label>
              <Input defaultValue="lochini@example.com" />
            </div>

            <div className="space-y-2">
              <Label>Phone Number</Label>
              <Input defaultValue="+94 71 234 5678" />
            </div>

            <div className="space-y-2">
              <Label>Date of Birth</Label>
              <Input
                type="date"
                defaultValue="1998-08-12"
              />
            </div>
          </div>
        </div>
      </Card>

      {/* BODY METRICS */}

      <Card className="p-6">
        <div className="space-y-5">
          <h2 className="font-semibold text-lg">
            Body Metrics
          </h2>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label>Height (cm)</Label>
              <Input defaultValue="168" />
            </div>

            <div className="space-y-2">
              <Label>Current Weight (kg)</Label>
              <Input defaultValue="68.4" />
            </div>

            <div className="space-y-2">
              <Label>Target Weight (kg)</Label>
              <Input defaultValue="64" />
            </div>
          </div>
        </div>
      </Card>

      {/* DIETARY PREFERENCES */}

      <Card className="p-6">
        <div className="space-y-5">
          <h2 className="font-semibold text-lg">
            Dietary Preferences
          </h2>

          <div className="space-y-4">
            <div className="space-y-2">
              <Label>Diet Style</Label>
              <Input defaultValue="Balanced High Protein" />
            </div>

            <div className="space-y-2">
              <Label>Food Allergies</Label>

              <Textarea
                rows={3}
                defaultValue="Milk, Eggs"
              />
            </div>

            <div className="space-y-2">
              <Label>Food Dislikes</Label>

              <Textarea
                rows={3}
                defaultValue="Mushrooms, Olives"
              />
            </div>
          </div>
        </div>
      </Card>

      {/* EMERGENCY INFORMATION */}

      <Card className="p-6">
        <div className="space-y-5">
          <h2 className="font-semibold text-lg">
            Emergency Information
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Emergency Contact Name</Label>
              <Input placeholder="Enter contact name" />
            </div>

            <div className="space-y-2">
              <Label>Emergency Contact Number</Label>
              <Input placeholder="+94 XX XXX XXXX" />
            </div>

            <div className="space-y-2 md:col-span-2">
              <Label>Primary Doctor</Label>
              <Input placeholder="Enter doctor name" />
            </div>
          </div>
        </div>
      </Card>

      {/* ACTIONS */}

      <Card className="p-6">
        <div className="flex flex-col sm:flex-row gap-3 justify-end">
          <Button
            variant="outline"
            onClick={() => navigate(-1)}
          >
            Cancel
          </Button>

          <Button>
            <Save className="h-4 w-4 mr-2" />
            Save Changes
          </Button>
        </div>
      </Card>
    </>
  );
}