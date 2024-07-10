'use client'
import { useQuery } from '@apollo/client'
import {
  CompaniesDocument,
  SearchGaragesDocument,
} from '@autospace/network/src/gql/generated'
import { BrandIcon } from '@autospace/ui/src/components/atoms/BrandIcon'
import { Button } from '@autospace/ui/src/components/atoms/Button'
import { useSession, signOut } from 'next-auth/react'
import Link from 'next/link'
import { Sidebar } from '@autospace/ui/src/components/organisms/Sidebar'
import { useState } from 'react'

export default function Home() {
  const { data, loading } = useQuery(CompaniesDocument)
  const { data: garage, error } = useQuery(SearchGaragesDocument, {
    variables: {
      dateFilter: { end: '2024-07-05', start: '2024-07-04' },
      locationFilter: {
        ne_lat: 1,
        ne_lng: 1,
        sw_lat: -1,
        sw_lng: -1,
      },
    },
  })
  console.log(garage?.searchGarages)
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
      <div>
        {garage?.searchGarages.map((garage) => (
          <pre key={garage.id}>{JSON.stringify(garage, null, 2)}</pre>
        ))}
      </div>
    </main>
  )
}
