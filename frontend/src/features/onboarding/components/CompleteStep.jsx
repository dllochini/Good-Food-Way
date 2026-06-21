import { useNavigate } from "react-router-dom";

import { CheckCircle2,
  Target
} from "lucide-react";


import {
  Card
} from "@/shared/ui/card";


import {
  Button
} from "@/shared/ui/button";


import {
  useOnboarding
} from "../context/OnboardingContext";
import { useCompleteOnboarding } from "@/features/onboarding/hooks/useCompleteOnboarding";


export default function CompleteStep() {


  const navigate = useNavigate();
  
  const { data, clearData } = useOnboarding();

  const mutation = useCompleteOnboarding();
  
  const finishOnboarding = () => {


    mutation.mutate(
      data,
      {

        onSuccess: () => {

          console.log("these are the data", data)
          clearData();

          navigate("/dashboard");

        }

      }

    );


  };





  return (

    <main className="min-h-screen bg-background">


      <div className="mx-auto flex min-h-screen max-w-md flex-col justify-center px-5">


        <div className="text-center">


          <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-primary/10">


            <CheckCircle2
              className="h-12 w-12 text-primary"
            />


          </div>



          <h1 className="text-3xl font-bold">

            You're all set!

          </h1>



          <p className="mt-3 text-muted-foreground">

            Your personalized nutrition journey is ready.

          </p>


        </div>




        <Card className="mt-8 rounded-3xl p-5">


          <div className="flex gap-3">


            <Target className="h-5 w-5 text-primary" />


            <div>


              <p className="text-sm text-muted-foreground">

                Selected Plan

              </p>


              <p className="font-semibold">

                {data.selectedPlan}

              </p>


            </div>


          </div>


        </Card>






        <Button

          className="mt-8 h-14 w-full rounded-2xl"

          disabled={mutation.isPending}

          onClick={finishOnboarding}

        >


          {
            mutation.isPending

              ?
              "Creating plan..."

              :
              "Go To Dashboard"

          }


        </Button>




      </div>


    </main>


  );


}