'use client'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
 
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const formSchema = z.object({
    titleEn: z.string().min(2).max(50),
    slug: z.string().min(2).max(75),
  })

const AddNewsPage = () => {
    const form = useForm()
    
  return (
    <div>
         <Form {...form}>
      <form  className="space-y-8">
      <div className="flex items-center justify-between gap-x-3" >
        <FormField
          control={form.control}
          name="titleEng"
          render={({ field }) => (
            <FormItem className="w-1/2">
              <FormLabel>Your Title</FormLabel>
              <FormControl>
                <Input placeholder="Title In English  .. " {...field} />
              </FormControl>
              
              <FormMessage />
            </FormItem>
          )}
        />
       

        <FormField 
          control={form.control}
          name="titleAr"
          render={({ field }) => (
            <FormItem className="w-1/2" dir="rtl" >
              <FormLabel className="" >عنوان الخبر </FormLabel>
              <FormControl>
                <Input placeholder="العنوان في العربي  " {...field} className="" />
              </FormControl>
              
              <FormMessage />
            </FormItem>
          )}
        />
        </div>
        <div className="h-[350px]">
        <FormField
          control={form.control}
          name="DescEng"
          render={({ field }) => (
            <FormItem className="">
              <FormLabel>Your News </FormLabel>
              <FormControl>
              <Textarea 
                  placeholder="write your news "
                  className="resize-y  h-[100%]"  rows={10}
                  {...field}
                />
              </FormControl>
              
              <FormMessage />
            </FormItem>
          )}
        />
        </div>
        <div className="h-[350px]">
        <FormField
          control={form.control}
          name="DescAr"
          render={({ field }) => (
            <FormItem dir="rtl">
              <FormLabel>الخبر  </FormLabel>
              <FormControl>
              <Textarea 
                  placeholder="أكتب الخبر..... "
                  className="resize-y  h-[100%]"  rows={10}
                  {...field}
                />
              </FormControl>
              
              <FormMessage />
            </FormItem>
          )}
        />
        </div>
        <div className="flex items-center gap-x-5 h-[200px]" >
        <FormField
          control={form.control}
          name="image"
          render={({ field }) => (
            <FormItem className="w-1/2" >
              <FormLabel>Upload Images  </FormLabel>
              <FormControl>
              <Input id="picture" type="file" {...form} />
              </FormControl>
              
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="w-1/2 border border-grey-1 h-full mx-10">
            

        </div>
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </Form>

    </div>
  )
}

export default AddNewsPage