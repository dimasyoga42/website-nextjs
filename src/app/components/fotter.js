import Image from "next/image"
import Logo from '@/../public/logo.png'
const Fotter = () => {
  return (
    <footer className="footer bg-neutral text-neutral-content p-10">
  <aside>
    <Image src={Logo} alt="logo" width={80} height={80} />
    <p>
      Dimasyoga42
      <br />
      © 2024 dimasyoga42. All rights reserved
    </p>
  </aside>
  <nav>
    <h6 className="footer-title">Social</h6>
    <div className="grid grid-flow-col gap-4">
    </div>
  </nav>
</footer>
  )
}

export default Fotter