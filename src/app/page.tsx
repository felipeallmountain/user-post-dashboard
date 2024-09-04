'use client'

import { useEffect, useState } from "react";
import styles from "./page.module.css";
import RowCard from "user-post-dashboard/components/rowCard";
import { getCombinedData } from "user-post-dashboard/api/getUsersData";

export default function Home() {
  const [combinedData, setCombinedData] = useState<User[]>([])
  const [isLoading, setIsLoading] = useState(true)
  
  useEffect(() => {
    const fetchCombinedData = async () => {
      const data = await getCombinedData()
      setCombinedData(data)
      setIsLoading(false)
    }

    fetchCombinedData()
    
  }, [])

  const getDataTable = () => (
    <table>
      <thead>
        <tr>
          <th scope="col">User Name</th>
          <th scope="col">Email</th>
          <th scope="col">Company name</th>
          <th scope="col">Post Count</th>
        </tr>
      </thead>
      <tbody>
        {
          combinedData.map(user => {
            return (
              <RowCard user={user} key={user.id}/>
            )
          })
        }
      </tbody>
    </table>
  )
  

  return (
    <main className={styles.main}>
      {
        isLoading
          ? <h1>loading..</h1>
          : getDataTable()           
      }
    </main>
  );
}
