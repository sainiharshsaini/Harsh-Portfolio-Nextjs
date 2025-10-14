'use client'

import { useEffect, useState } from 'react'

interface ProfileUpdateTimeProps {
  lastUpdated: Date
  className?: string
}

export function ProfileUpdateTime({ 
  lastUpdated, 
  className = '' 
}: ProfileUpdateTimeProps) {
  const [timeAgo, setTimeAgo] = useState('')

  useEffect(() => {
    const calculateTimeAgo = () => {
      const now = new Date()
      const diff = now.getTime() - lastUpdated.getTime()

      const seconds = Math.floor(diff / 1000)
      const minutes = Math.floor(seconds / 60)
      const hours = Math.floor(minutes / 60)
      const days = Math.floor(hours / 24)
      const weeks = Math.floor(days / 7)
      const months = Math.floor(days / 30)
      const years = Math.floor(days / 365)

      if (seconds < 60) return 'just now'
      if (minutes < 60) return `${minutes}m ago`
      if (hours < 24) return `${hours}h ago`
      if (days < 7) return `${days}d ago`
      if (weeks < 4) return `${weeks}w ago`
      if (months < 12) return `${months}mo ago`
      return `${years}y ago`
    }

    setTimeAgo(calculateTimeAgo())

    // Update every minute
    const interval = setInterval(() => {
      setTimeAgo(calculateTimeAgo())
    }, 60000)

    return () => clearInterval(interval)
  }, [lastUpdated])

  return (
    <div className={`text-sm text-gray-500 dark:text-gray-400 ${className}`}>
      Profile last updated - {timeAgo}
    </div>
  )
}