'use client'
import { useQuery } from '@apollo/client'
import { CompaniesDocument } from '@autospace/network/src/gql/generated'

export default function Home() {
  const { data, loading } = useQuery(CompaniesDocument)
  console.log(data)
  return (
    <main>
      <div className="p-4 divide-y gap-1 divide-gray-950">
        {data?.companies.map((company) => (
          <div className="bg-red-400 p-2 " key={company.id}>
            <div>{company.displayName}</div>
            <div>{company.description}</div>
          </div>
        ))}
      </div>
    </main>
  )
}
