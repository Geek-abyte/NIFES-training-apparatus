import React, { useState } from 'react'
import { CheckCircle, Circle } from 'lucide-react'

interface ChecklistItem {
  id: string
  text: string
  completed?: boolean
}

interface LessonChecklistProps {
  title: string
  items: ChecklistItem[]
  className?: string
}

export default function LessonChecklist({ title, items, className = "" }: LessonChecklistProps) {
  const [checkedItems, setCheckedItems] = useState<Set<string>>(
    new Set(items.filter(item => item.completed).map(item => item.id))
  )

  const toggleItem = (id: string) => {
    const newCheckedItems = new Set(checkedItems)
    if (newCheckedItems.has(id)) {
      newCheckedItems.delete(id)
    } else {
      newCheckedItems.add(id)
    }
    setCheckedItems(newCheckedItems)
  }

  const completedCount = checkedItems.size
  const totalCount = items.length
  const progressPercentage = (completedCount / totalCount) * 100

  return (
    <div className={`bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-6 ${className}`}>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-blue-900">{title}</h3>
        <div className="text-sm text-blue-700">
          {completedCount}/{totalCount} completed
        </div>
      </div>
      
      {/* Progress Bar */}
      <div className="mb-4">
        <div className="bg-blue-200 rounded-full h-2">
          <div 
            className="bg-blue-600 h-2 rounded-full transition-all duration-300 ease-out"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>
      </div>

      <div className="space-y-2">
        {items.map((item) => (
          <label 
            key={item.id}
            className="flex items-start space-x-3 cursor-pointer hover:bg-white hover:bg-opacity-50 rounded p-2 transition-colors"
          >
            <button
              onClick={() => toggleItem(item.id)}
              className="mt-0.5 flex-shrink-0"
            >
              {checkedItems.has(item.id) ? (
                <CheckCircle className="h-5 w-5 text-green-600" />
              ) : (
                <Circle className="h-5 w-5 text-gray-400" />
              )}
            </button>
            <span 
              className={`text-sm ${
                checkedItems.has(item.id) 
                  ? 'text-gray-600 line-through' 
                  : 'text-gray-800'
              }`}
            >
              {item.text}
            </span>
          </label>
        ))}
      </div>

      {completedCount === totalCount && (
        <div className="mt-4 p-3 bg-green-100 border border-green-200 rounded-lg">
          <div className="flex items-center space-x-2">
            <CheckCircle className="h-5 w-5 text-green-600" />
            <span className="text-green-800 font-medium">
              🎉 Lesson Complete! Great job!
            </span>
          </div>
        </div>
      )}
    </div>
  )
}
