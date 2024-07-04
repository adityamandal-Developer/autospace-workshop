'use client'
import { useFormLogin } from '@autospace/forms/src/login'
import { HtmlLabel } from '../atoms/HtmlLabel'
import { Form } from '../atoms/Form'
import { HtmlInput } from '../atoms/HtmlInput'
import { Button } from '../atoms/Button'
import Link from 'next/link'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'

export interface ILoginFormProps {
  className?: string
}

export const LoginForm = ({ className }: ILoginFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useFormLogin()
  const { replace } = useRouter()
  console.log('erros', errors)
  return (
    <Form
      onSubmit={handleSubmit(async (data) => {
        console.log('data', data)
        const { email, password } = data
        const result = await signIn('credentials', {
          email,
          password,
          redirect: false,
        })
        if (result?.ok) {
          replace('/')
        }
        if (result?.error) {
          alert('Login failed. Try again')
        }
      })}
    >
      <HtmlLabel title="Email" error={errors.email?.message}>
        <HtmlInput {...register('email')} />
      </HtmlLabel>
      <HtmlLabel title="Password" error={errors.password?.message} optional>
        <HtmlInput type="password" {...register('password')} />
      </HtmlLabel>
      <Button type="submit">Submit</Button>

      <div className="mt-4 text-sm">
        Do Not Have An AutoSpace Account?
        <br />
        <Link
          href="/register"
          className="font-bold uderline underline-offset-4"
        >
          Create One
        </Link>{' '}
        now.
      </div>
    </Form>
  )
}
