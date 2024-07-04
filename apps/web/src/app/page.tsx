'use client'
import { useQuery } from '@apollo/client'
import { CompaniesDocument } from '@autospace/network/src/gql/generated'
import { BrandIcon } from '@autospace/ui/src/components/atoms/BrandIcon'
import { Button } from '@autospace/ui/src/components/atoms/Button'
import { useSession, signOut } from 'next-auth/react'
import Link from 'next/link'
import { Sidebar } from '@autospace/ui/src/components/organisms/Sidebar'
import { useState } from 'react'

export default function Home() {
  const { data, loading } = useQuery(CompaniesDocument)
  const { data: sessionData, status } = useSession()
  const [open, setOpen] = useState(true)

  return (
    <main className="p-8">
      <div className="p-4 divide-y gap-1 divide-gray-950">
        {data?.companies.map((company) => (
          <div className=" p-2 " key={company.id}>
            <div>{company.displayName}</div>
            <div>{company.description}</div>
          </div>
        ))}
      </div>
    </main>
  )
}
