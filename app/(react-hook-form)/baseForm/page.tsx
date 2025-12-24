"use client";

import { useForm, useFieldArray , FieldErrors  } from "react-hook-form";
import { DevTool } from "@hookform/devtools";


// ၁။ Type ကို သေချာသတ်မှတ်ပါ (Skills array အတွက် structure ပါရပါမယ်)
type FormValues = {
  email: string;
  password: string;
  social: {
    facebook: string;
    twitter: string;
  };
  phonenumbers: string[];
  skills: { name: string; level: string }[]; // Skill object structure
  age: number;
  db: Date;
  hasSocial: boolean;
  socialMediaUrl: string;
};



export default function BaseForm() {
  const { register, handleSubmit,reset, control, trigger, formState:{ isDirty,isSubmitSuccessful,submitCount, dirtyFields,touchedFields,isSubmitted,isSubmitting,errors ,isValid}, watch , getValues , setValue} = useForm<FormValues>({
    defaultValues: {
      email: "",
      password: "",
      social: { facebook: "", twitter: "" },
      phonenumbers: ["", ""],
      skills: [{ name: "React", level: "Beginner" }], // ပထမဆုံး value ပေးထားခြင်း
      age: 0,
      db: new Date(),
      hasSocial: false,
      socialMediaUrl: "",
    },

  });

  // ၂။ useFieldArray မှာ control ကို မဖြစ်မနေ ထည့်ပေးရပါမယ်
  const { fields, append, remove } = useFieldArray({   // 
    control, // ဒါမှမဟုတ်ရင် အလုပ်လုပ်မှာ မဟုတ်ပါဘူး
    name: "skills",
  });

  // fields: လက်ရှိ Form ထဲမှာ ရှိနေတဲ့ list item အားလုံး (ဒါကို map ပတ်ပြီး render လုပ်ရပါတယ်)။
  // append: List ရဲ့ အောက်ဆုံးမှာ item အသစ်တစ်ခု ထည့်ရန်။
  // remove(index) : သတ်မှတ်ထားတဲ့ index က item ကို ဖျက်ရန်။
  // move(from, to): Item တွေကို နေရာရွှေ့ရန်။

  const onSubmit = (data: FormValues) => {
    console.log("Submitted Data:", data);
  };

  const watchvalue = watch("email");

 const showSocial = watch("hasSocial");


 const handleGetValues = (data: FormValues) => {
  console.log(getValues());
  console.log(getValues("phonenumbers"));
 }
 const handleSetValues = () => {
  console.log(setValue("email", "",{
    shouldValidate: true, // value ထည့်လိုက်တာနဲ့ error ရှိမရှိ ချက်ချင်းစစ်မယ်
    shouldDirty: true,    // form value ပြောင်းသွားပြီဖြစ်ကြောင်း သတ်မှတ်မယ်
    shouldTouch: true     // user က ဒီ input ကို ထိသွားသလိုမျိုး သတ်မှတ်မယ်
  }));
 }


 const onInvalid = (errors: FieldErrors<FormValues>) => console.log(errors);
  
// console.log("isSubmitting", isSubmitting); // Form ကို Submit လုပ်လိုက်တဲ့အချိန်ကနေ onSubmit function ပြီးဆုံးတဲ့အထိ true ဖြစ်နေပါမယ်။
 //Usage: API ခေါ်နေစဉ်မှာ "Loading..." ပြဖို့ ဒါမှမဟုတ် ခလုတ်ကို Disable လုပ်ဖို့ သုံးပါတယ်။

 //console.log("isSubmitted", isSubmitted); //User က Submit ခလုတ်ကို တစ်ကြိမ်နှိပ်ပြီးသွားတာနဲ့ (Validation အောင်သည်ဖြစ်စေ၊ ရှုံးသည်ဖြစ်စေ) true ဖြစ်သွားပါမယ်။

// console.log("isSubmitSuccessful", isSubmitSuccessful); // onSubmit function ထဲက logic တွေမှာ Error မတက်ဘဲ အောင်မြင်စွာ ပြီးဆုံးသွားမှ true ဖြစ်မှာပါ။
//Usage: Form ကို Reset ချဖို့ ဒါမှမဟုတ် "Success Message" ပြဖို့ သုံးပါတယ်။


 //console.log("submitCount", submitCount); //User က Submit ခလုတ်ကို ဘယ်နှစ်ကြိမ် နှိပ်ခဲ့သလဲဆိုတာကို မှတ်ထားပေးပါတယ်။


  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded-lg shadow-sm">

      <p>{JSON.stringify(watchvalue, null, 2)}</p>


      <form onSubmit={handleSubmit(onSubmit,onInvalid)} className="flex flex-col gap-4">
        <div className="flex items-center gap-2">


        <input type="checkbox" {...register("hasSocial")} />
        <p>I have social media</p>
        </div>

    {showSocial && (
      <input {...register("socialMediaUrl")} placeholder="Link ထည့်ပါ" className="border p-2 w-full" />
    )}
        {/* Email Field with Custom Validation */}
        <div>
          <input
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Invalid email address",
              },
              validate: {
             //  emailAvailable: async (v) => {
                  // Fake API call simulation
              //    const res = await fetch(`https://jsonplaceholder.typicode.com/users?email=${v}`);
              //    const data = await res.json();
               //   return data.length === 0 || "Email is already taken";
              //  },
                notGmail: (v) => !v.includes("gmail.com") || "Gmail is not allowed",
                notYahoo: (v) => !v.includes("yahoo.com") || "Yahoo is not allowed",
              },
            })}
            placeholder="Email"
            className="border p-2 w-full"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
        </div>
        {/* Validation Summary */}
        <div className="text-xs mt-2 space-y-1">
        <p>Form ပြင်ထားသလား (isDirty): {isDirty ? "Yes" : "No"}</p>
        <p>Email ကို ဝင်ကြည့်ပြီးပြီလား (Touched): {touchedFields.email ? "Yes" : "No"}</p>
        <p>Email ကို ပြင်ထားသလား (Dirty): {dirtyFields.email ? "Yes" : "No"}</p>
        </div>
        
     


        {/* Password Field */}
        <div>
          <input
            {...register("password", {
              required: "Password is required",
              minLength: { value: 6, message: "Min length is 6" },
            
            })}
            type="password"
            placeholder="Password"
            className="border p-2 w-full"
          />
          {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
        </div>

        {/* Social Fields */}
        <div className="grid grid-cols-2 gap-2">
          <input {...register("social.facebook")} placeholder="Facebook" className="border p-2" />
          <input {...register("social.twitter")} placeholder="Twitter" className="border p-2" />
        </div>

        {/* Phone Numbers (Static Array) */}
        <div>
          <label className="text-sm font-bold">Phone Numbers:</label>
          <input {...register("phonenumbers.0",
          {
            required: "phnumber is required",

          }

          )} placeholder="Phone 1" className="border p-2 w-full mt-1" />
          <input {...register("phonenumbers.1")} placeholder="Phone 2" className="border p-2 w-full mt-1" />
        </div>

        {/* Dynamic Skills (useFieldArray) */}
        <div className="mt-4">
          <label className="text-sm font-bold">Skills:</label>
          {fields.map((item, index) => (
     
            <div key={item.id} className="flex gap-2 mb-2 mt-2">
               {
                index === 0 ? (
                  <span className="text-sm text-gray-500">Primary</span>
                ) : (
                  <span className="text-sm text-gray-500">Secondary</span>
                ) 
               }

              <input
                {...register(`skills.${index}.name` as const, { required: "Required" })}
                placeholder="Skill Name"
                className="border p-2 flex-1"
              />

              <select {...register(`skills.${index}.level` as const)} className="border p-2">
                <option value="Beginner">Beginner</option>
                <option value="Advanced">Advanced</option>
              </select>

              <button
                type="button"
                onClick={() => remove(index)}
                className="bg-red-500 text-white px-3 rounded"
              >
                Delete
              </button>
            </div>
          ))}

          <button
            type="button"
            onClick={() => append({ name: "", level: "Beginner" })}
            className="text-blue-500 text-sm mt-2"
          >
            + Add Skill
          </button>

        </div>
        
        {/* Age Field with valueAsNumber */}
         <input type="number" 
          className="border p-2 w-full"
          {...register("age", {
          valueAsNumber: true,
          required: "Age is required"
        
          })}
         />
         {errors.age && <p className="text-red-500 text-sm">{errors.age.message}</p>}
             
        {/* Date of Birth Field with valueAsDate */}
         <input type="date"
         className="border p-2 w-full"
         {...register("db", {required: "Date is required",
          valueAsDate: true,
         
          
         })}
           
         />
         {errors.db && <p className="text-red-500 text-sm">{errors.db.message}</p>}

        <button 
        type="submit" 
        disabled={!isDirty } // ဘာမှမပြင်ရသေးရင် Submit လုပ်လို့မရအောင် ပိတ်ထားမယ်
        className="disabled:bg-gray-400 bg-black text-white p-2"
      >
        Submit
      </button>
        <button type="button" onClick={handleGetValues} className="bg-black text-white p-2 rounded mt-4">
          GetValues
        </button>

        <button type="button" onClick={handleSetValues} className="bg-black text-white p-2 rounded mt-4">
          SetValues
        </button>

        <button type="button" onClick={()=> reset()} className="bg-black text-white p-2 rounded mt-4">
          Reset
        </button>

        <button type="button" onClick={()=> trigger("db")} className="bg-black text-white p-2 rounded mt-4">
         Trigger
        </button>

      </form>

      {/* DevTool helps to visualize the form state */}
      <DevTool control={control} />
    </div>
  );
}