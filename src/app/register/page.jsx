"use client"
import { Button, Description, FieldError, Form, Input, Label, TextField } from '@heroui/react';
import React from 'react';
import { Check } from "@gravity-ui/icons";
import Link from 'next/link';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { authClient } from '@/lib/auth-client';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';


const RegisterPage = () => {

    const router = useRouter()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()



    const handleGoogle = async () => {
        const data = await authClient.signIn.social({
            provider: "google",
            callbackURL: '/'
        });
        if (data) {
            toast.success('Register With Google successful!')
        }
        if (!data) {
            toast.error('something wrong try again!')
        }
    }

    const onSubmit = async (data) => {
        const { name, email, password, image } = data;

        const { data: res, error } = await authClient.signUp.email({
            name: name,
            password: password,
            image: image,
            email: email
        },
            {
                onSuccess: () => {
                    router.push('/login')
                }
            }
        )
        if (error) {
            toast.error("Error signUp: " + error.message)
        }
        if (res) {
            toast.success("Sign up successful!");
        }

    };


    return (
        <div className='container mx-auto flex justify-center my-20'>
            <div className='grid grid-cols-2 border border-gray-200 rounded-md'>

                <div className='bg-[#84b17990] shadow-md flex flex-col justify-center space-y-3 rounded-l-md'>
                    <h1 className='text-center font-bold text-3xl'>Join Skill<span className='text-[#65935a]'>Sphere</span></h1>
                    <p className='text-center text-neutral-500 text-[14px]'>Start your learning journey with  thousands of students worldwide.</p>
                    <ul className=' list-disc text-neutral-500 px-40 text-[14px]'>
                        <li>Free to register</li>
                        <li>Access to free courses</li>
                        <li>Track your progress</li>
                    </ul>
                </div>

                <Form className="flex  flex-col gap-4 bg-white shadow-md px-5 py-7 rounded-r-md" onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <h1 className='text-2xl font-semibold'>Create Account</h1>
                        <p className='text-neutral-400 text-[0.90rem]'>Fill in your details to get started</p>
                    </div>
                    <TextField
                        isRequired
                        validate={(value) => {
                            if (value.length < 3) {
                                return "Name must be at least 3 characters";
                            }
                            return null;
                        }}
                    >
                        <Label>Name</Label>
                        <Input   {...register('name')} className={' rounded-md border-gray-100 border'} placeholder="Enter your Name" />
                    </TextField>


                    <FieldError />
                    <TextField
                        isRequired
                        type="email"
                        validate={(value) => {
                            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                                return "Please enter a valid email address";
                            }
                            return null;
                        }}
                    >
                        <Label>Email</Label>
                        <Input       {...register('email')} className={' rounded-md border-gray-100 border'} placeholder="Enter your Email" />
                        <FieldError />
                    </TextField>
                    <TextField
                        isRequired
                        name="image"

                    >
                        <Label>Photo URL</Label>
                        <Input   {...register('image')} className={' rounded-md border-gray-100 border'} placeholder="https://.." />
                    </TextField>
                    <TextField
                        isRequired
                        minLength={8}

                        type="password"
                        validate={(value) => {
                            if (value.length < 8) {
                                return "Password must be at least 8 characters";
                            }
                            if (!/[A-Z]/.test(value)) {
                                return "Password must contain at least one uppercase letter";
                            }
                            if (!/[0-9]/.test(value)) {
                                return "Password must contain at least one number";
                            }
                            return null;
                        }}
                    >
                        <Label>Password</Label>
                        <Input {...register('password')} className={' rounded-md border-gray-100 border'} placeholder="Enter your password" />
                        <Description>Must be at least 8 characters with 1 uppercase and 1 number</Description>
                        <FieldError />
                    </TextField>
                    <div className="flex gap-2">
                        <Button type="submit" className={'rounded-md bg-[#84b179] font-semibold text-white w-full'} variant='outline'>
                            <Check />
                            Create Account
                        </Button>
                    </div>
                    <div className='flex items-center gap-2'>
                        <div className='border-t flex-grow '></div>
                        <div className=''>or</div>
                        <div className='border-t flex-grow'   ></div>
                    </div>
                    <Button onClick={handleGoogle} variant='outline' className={'rounded-md w-full'}>
                        <Image src={'https://i.ibb.co.com/gbzX7531/google-logo-vector-58333738-removebg-preview.png'} width={30} height={30} alt=''></Image>
                        Continue with Google
                    </Button>
                    <p className='text-center text-[14px]'>Already have an account ? <Link className='text-green-800 font-semibold text-[1rem]' href={'/login'}>Login</Link></p>
                </Form>
            </div>
        </div>
    );
};

export default RegisterPage;