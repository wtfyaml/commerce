import Link from 'next/link'
import { FireIcon } from '@heroicons/react/solid'

const Logo = ({ className = '', ...props }) => (
  <div className="col-span-1 lg:col-span-2">
    <Link href="/">
      <a className="flex flex-initial items-center font-bold md:mr-24">
        <span className="mr-2">
          <FireIcon className="block mr-2 w-10" />
        </span>
        <span>wtfyaml</span>
      </a>
    </Link>
  </div>
)

export default Logo
