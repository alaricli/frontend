import Link from "next/link";

function TempCartBtn() {
  return (
    <div>
      <Link href={'/Cart'}>
        Cart
      </Link>
    </div>
  )
}

export default TempCartBtn;