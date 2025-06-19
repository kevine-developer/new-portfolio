"use client"

import { useState, useEffect } from "react"

export function useTypingEffect(texts: string[], speed = 100, delay = 2000) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [typedText, setTypedText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentText = texts[currentTextIndex]
    let timeout: NodeJS.Timeout

    if (!isDeleting && typedText.length < currentText.length) {
      // Typing
      timeout = setTimeout(() => {
        setTypedText(currentText.slice(0, typedText.length + 1))
      }, speed)
    } else if (!isDeleting && typedText.length === currentText.length) {
      // Pause before deleting
      timeout = setTimeout(() => {
        setIsDeleting(true)
      }, delay)
    } else if (isDeleting && typedText.length > 0) {
      // Deleting
      timeout = setTimeout(() => {
        setTypedText(currentText.slice(0, typedText.length - 1))
      }, speed / 2)
    } else if (isDeleting && typedText.length === 0) {
      // Move to next text
      setIsDeleting(false)
      setCurrentTextIndex((prev) => (prev + 1) % texts.length)
    }

    return () => clearTimeout(timeout)
  }, [typedText, currentTextIndex, isDeleting, texts, speed, delay])

  return typedText
}
