import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 dark:bg-black text-center px-4">
      <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Not Found</h2>
      <p className="text-gray-600 dark:text-gray-400 mb-8">Could not find requested resource</p>
      <Link 
        href="/"
        className="px-6 py-3 rounded-full bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition-colors"
      >
        Return Home
      </Link>
    </div>
  )
}
