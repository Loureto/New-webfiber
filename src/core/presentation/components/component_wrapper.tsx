import { CircularProgress } from '@nextui-org/progress'
import dynamic from 'next/dynamic'

export const componentWrapper = (importedComponent: any) =>
  dynamic(() => importedComponent, {
    ssr: false,
    loading: () => (
      <div className="flex h-screen w-full items-center justify-center">
        <CircularProgress size="lg" aria-label="Loading..." />
      </div>
    )
  })
