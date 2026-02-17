import { describe, it, expect } from 'vitest'
import { cn } from '../lib/utils'

describe('cn utility', () => {
    it('combines class names correctly', () => {
        expect(cn('flex', 'items-center')).toBe('flex items-center')
    })

    it('handles conditional classes', () => {
        expect(cn('flex', true && 'items-center', false && 'justify-center')).toBe('flex items-center')
    })

    it('merges tailwind classes correctly', () => {
        expect(cn('px-2 py-2', 'px-4')).toBe('py-2 px-4')
    })
})
