export default function TestPage() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Tailwind CSS Test Page</h1>
        
        <div className="space-y-4">
          {/* Test 1: Background Colors */}
          <div className="bg-black text-white p-4 rounded">
            ✅ Black background with white text
          </div>
          
          <div className="bg-blue-500 text-white p-4 rounded">
            ✅ Blue background with white text
          </div>
          
          <div className="bg-red-500 text-white p-4 rounded">
            ✅ Red background with white text
          </div>
          
          {/* Test 2: Borders */}
          <div className="border-2 border-black p-4">
            ✅ 2px black border
          </div>
          
          {/* Test 3: Flexbox */}
          <div className="flex gap-4">
            <div className="bg-gray-800 text-white p-4 flex-1">Flex 1</div>
            <div className="bg-gray-600 text-white p-4 flex-1">Flex 2</div>
            <div className="bg-gray-400 text-white p-4 flex-1">Flex 3</div>
          </div>
          
          {/* Test 4: Grid */}
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-purple-500 text-white p-4">Grid 1</div>
            <div className="bg-purple-600 text-white p-4">Grid 2</div>
            <div className="bg-purple-700 text-white p-4">Grid 3</div>
          </div>
          
          {/* Test 5: Typography */}
          <div className="space-y-2">
            <p className="text-xs">Extra small text (xs)</p>
            <p className="text-sm">Small text (sm)</p>
            <p className="text-base">Base text (base)</p>
            <p className="text-lg">Large text (lg)</p>
            <p className="text-xl">Extra large text (xl)</p>
            <p className="text-2xl">2XL text</p>
            <p className="text-4xl">4XL text</p>
          </div>
          
          {/* Test 6: Spacing */}
          <div className="space-y-4">
            <div className="p-2 bg-green-200">Padding 2 (p-2)</div>
            <div className="p-4 bg-green-300">Padding 4 (p-4)</div>
            <div className="p-8 bg-green-400">Padding 8 (p-8)</div>
          </div>
          
          {/* Test 7: Hover States */}
          <button className="bg-black text-white px-6 py-3 hover:bg-blue-600 transition-colors">
            Hover me (should turn blue)
          </button>
          
          {/* Test 8: Custom CSS Variables */}
          <div className="p-4 bg-[var(--accent)] text-white">
            Custom CSS variable: --accent (should be blue)
          </div>
          
          <div className="p-4 border border-black">
            <p className="text-[var(--muted)]">
              Custom CSS variable: --muted (should be gray)
            </p>
          </div>
        </div>
        
        <div className="mt-8 p-6 bg-white border-2 border-black">
          <h2 className="text-2xl font-bold mb-4">Status</h2>
          <p className="mb-2">
            If you see styled boxes above with colors, borders, and proper spacing, 
            <strong className="text-green-600"> Tailwind CSS is working! ✅</strong>
          </p>
          <p className="text-sm text-gray-600">
            If everything is unstyled, Tailwind CSS is not loading properly.
          </p>
        </div>
      </div>
    </div>
  );
}
