import dynamic from 'next/dynamic'
import { ShurikenIcon } from '../assets'

export const componentWrapper = (importedComponent: any) =>
  dynamic(() => importedComponent, {
    ssr: false,
    loading: () => (
      <div className="flex h-screen w-full items-center justify-center">
        <ShurikenIcon className="animate-spin" />
      </div>
    )
  })
