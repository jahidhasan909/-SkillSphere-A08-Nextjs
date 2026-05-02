"use client"
import { authClient } from '@/lib/auth-client';
import { Check } from '@gravity-ui/icons';
import { Button, Form, Input, Label, TextField } from '@heroui/react';
import { useRouter } from 'next/navigation';

import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const UpdateProfile = () => {

    const router = useRouter();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = async (data) => {
        const { name, image } = data;
        const { data: res, error } = await authClient.updateUser({
            image: image,
            name: name,
        },
            {
                onSuccess: () => {
                    router.push('/profile')
                }
            }
        )
        if (error) {
            toast.error("Error Update profile: " + error.message)
        }
        if (res) {
            toast.success("Profile Update successful!");
        }

    }

    return (
        <div className=' container  mx-auto flex items-col  justify-center  my-20 rounded-md'>
            <div className='grid grid-cols-2 w-[800px] shadow-md rounded-md'>
                <div className='bg-[#84b1798a] text-center flex flex-col  justify-center rounded-l-md'>
                    <h1 className='font-bold text-2xl '>Update <span className='text-[#84b179]'>Information</span></h1>
                    <p className='text-neutral-500'>Please ensure your valid information!</p>
                </div>
                <Form onSubmit={handleSubmit(onSubmit)} className='bg-white/40 backdrop-blur-lg border border-gray-200 w-full shadow-md px-4 py-6 space-y-3  rounded-r-md'>
                    <h1 className='font-bold text-xl mb-4 '>Your Information</h1>
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
                        <Input  {...register('name')} className={' rounded-md border-gray-100 border'} placeholder="Enter your Name" />
                    </TextField>


                    <TextField
                        isRequired
                        name="image"

                    >
                        <Label>Photo URL</Label>
                        <Input   {...register('image')} className={' rounded-md border-gray-100 border'} placeholder="https://.." />
                    </TextField>
                    <Button type='submit' variant='outline' className={'rounded-md w-full bg-[#84b179d3] text-white font-semibold mt-3'}> <Check></Check> Save Changes</Button>
                </Form>
            </div>

        </div>
    );
};

export default UpdateProfile;