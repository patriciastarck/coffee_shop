// 'use client'

// import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
// import { FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
// import { Form, useForm } from "react-hook-form";

// type TformLogin = {
//     email: String
// }

// export default function Decoration() {
//     const form = useForm<TformLogin>({
//         defaultValues: {
//             email: ''
//         }
//     })
//     return(
//         <div className="w-full h-screen flex items-center justify-center">
//             <Card className="w-full max-w-sm">
//                 <CardHeader>
//                     <CardTitle>Login</CardTitle>
//                     <CardDescription>
//                         Digite sua mensagem
//                     </CardDescription>
//                 </CardHeader>

//                 <CardContent>
//                     <Form {...form}>
//                         <form>
//                             <FormField
//                                 control={form.control}
//                                 name = "email"    
//                                 render={({ field }) => (
//                                     <FormItem>
//                                         <FormLabel>Email</FormLabel>
//                                         <FormControl>
//                                             <Input placeholder="Digite o seu email" {...field} />
//                                         </FormControl>
//                                     </FormItem>
//                                 )}
//                         />
//                         </form>
//                     </Form>
//                 </CardContent>

//                 <CardFooter>
//                     Footer
//                 </CardFooter>

//             </Card>
//         </div>
//     )
// }