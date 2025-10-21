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
        <div className="w-full md:px-8 lg:px-12 py-4">
            <div className="relative bg-card text-card-foreground rounded-lg border shadow-sm p-3 sm:p-4 transition-colors">
                <div className="flex items-center justify-between gap-3">
                    {/* Left side - PDF Icon and Info */}
                    <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
                        {/* PDF Icon */}
                        <div className="relative flex-shrink-0">
                            <div className="w-10 h-12 sm:w-12 sm:h-14 bg-primary rounded flex items-center justify-center">
                                <FileText className="w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground" />
                            </div>
                            <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 text-[9px] sm:text-[10px] font-bold text-primary-foreground bg-primary px-1 sm:px-1.5 py-0.5 rounded whitespace-nowrap">
                                PDF
                            </span>
                        </div>

                        {/* File Info */}
                        <div className="min-w-0 flex-1">
                            <h3 className="text-xs sm:text-sm font-medium text-foreground truncate">
                                {fileName}
                            </h3>
                            <p className="text-[10px] sm:text-xs text-muted-foreground mt-0.5 sm:mt-1">
                                {formatDate(uploadDate)}
                            </p>
                        </div>
                    </div>

                    {/* Right side - Three Dot Menu */}
                    <div className="relative flex-shrink-0" ref={menuRef}>
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="p-1.5 sm:p-2 hover:bg-accent hover:text-accent-foreground rounded-full transition-colors"
                            aria-label="More options"
                        >
                            <MoreVertical className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground" />
                        </button>

                        {/* Dropdown Menu */}
                        {isMenuOpen && (
                            <div className="absolute right-0 mt-2 w-44 sm:w-48 bg-popover text-popover-foreground rounded-md shadow-md border z-50">
                                <div className="py-1">
                                    <button
                                        onClick={handleView}
                                        className="w-full flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 text-xs sm:text-sm hover:bg-accent hover:text-accent-foreground transition-colors"
                                    >
                                        <Eye className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
                                        <span>View Resume</span>
                                    </button>
                                    <button
                                        onClick={handleDownload}
                                        className="w-full flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 text-xs sm:text-sm hover:bg-accent hover:text-accent-foreground transition-colors"
                                    >
                                        <Download className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
                                        <span>Download Resume</span>
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}