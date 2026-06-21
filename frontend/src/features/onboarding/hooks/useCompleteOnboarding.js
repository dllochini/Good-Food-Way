import { useMutation } from "@tanstack/react-query";
import { saveOnboarding } from "@/features/onboarding/api/onboarding";

export const useCompleteOnboarding = () => {

 return useMutation({
   mutationFn: saveOnboarding,
 });

};