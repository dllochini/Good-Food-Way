import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";


export default function OnboardingLayout({

step,

totalSteps = 9,

title,

subtitle,

children,

showBack = true,

}){


const navigate =
useNavigate();



const progress =
((step-1)/totalSteps)*100;



return (

<main className="min-h-screen bg-background">


<div className="fixed inset-0 -z-10 overflow-hidden">

<div className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl"/>

</div>





<div className="mx-auto min-h-screen max-w-md px-5 py-6">



{
showBack &&

<button

onClick={()=>navigate(-1)}

className="mb-5 flex items-center gap-2 text-sm"

>

<ArrowLeft className="h-4 w-4"/>

Back

</button>

}






<div className="mb-6">


<div className="mb-3 flex justify-between text-xs text-muted-foreground">


<span>
Step {step} of {totalSteps}
</span>


<span>
{Math.round(progress)}%
</span>


</div>





<div className="h-2 rounded-full bg-muted overflow-hidden">


<div

className="h-full bg-primary transition-all"

style={{
width:`${progress}%`
}}

/>


</div>


</div>






<div className="mb-6">


<h1 className="text-3xl font-bold">

{title}

</h1>


<p className="mt-2 text-muted-foreground">

{subtitle}

</p>


</div>




{children}



</div>


</main>


);


}