'use client'

import { useState, useRef, useEffect } from 'react'
import { FileText, MoreVertical, Download, Eye } from 'lucide-react'

interface ResumeCardProps {
    fileName?: string
    filePath?: string
    uploadDate?: Date
}

export function ResumeCard({
    fileName = 'HarshSainiResume2025.pdf',
    filePath = '/resume/HarshSainiResume2025.pdf',
    uploadDate = new Date()
}: ResumeCardProps) {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const menuRef = useRef<HTMLDivElement>(null)

    const formatDate = (date: Date) => {
        const day = date.getDate()
        const month = date.toLocaleString('en-US', { month: 'short' })
        const year = date.getFullYear()
        return `Added ${day} ${month} ${year}`
    }

    const handleDownload = () => {
        const link = document.createElement('a')
        link.href = filePath
        link.download = fileName
        link.target = '_blank'
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
        setIsMenuOpen(false)
    }

    const handleView = () => {
        window.open(filePath, '_blank')
        setIsMenuOpen(false)
    }

    // Close menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsMenuOpen(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    return (
        <div className="relative w-full max-w-md bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 p-4 my-2">
            <div className="flex items-center justify-between">
                {/* Left side - PDF Icon and Info */}
                <div className="flex items-center gap-3">
                    {/* PDF Icon */}
                    <div className="relative">
                        <div className="w-12 h-14 bg-blue-600 rounded flex items-center justify-center">
                            <FileText className="w-6 h-6 text-white" />
                        </div>
                        <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 text-[10px] font-bold text-white bg-blue-600 px-1.5 py-0.5 rounded">
                            PDF
                        </span>
                    </div>

                    {/* File Info */}
                    <div>
                        <h3 className="text-sm font-medium text-gray-900 dark:text-white">
                            {fileName}
                        </h3>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                            {formatDate(uploadDate)}
                        </p>
                    </div>
                </div>

                {/* Right side - Three Dot Menu */}
                <div className="relative" ref={menuRef}>
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
                        aria-label="More options"
                    >
                        <MoreVertical className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                    </button>

                    {/* Dropdown Menu */}
                    {isMenuOpen && (
                        <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 py-2 z-10">
                            <button
                                onClick={handleView}
                                className="w-full flex items-center gap-3 px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                            >
                                <Eye className="w-4 h-4" />
                                View Resume
                            </button>
                            <button
                                onClick={handleDownload}
                                className="w-full flex items-center gap-3 px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                            >
                                <Download className="w-4 h-4" />
                                Download Resume
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}