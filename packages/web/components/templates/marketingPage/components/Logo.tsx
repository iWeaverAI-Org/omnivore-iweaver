import Image from 'next/image'
interface LogoProps {
  width?: number
  height?: number
}

export function Logo({ width = 30, height = 30 }: LogoProps) {
  return <Image
    src="/static/icons/default/logo-dark.png"
    style={{ margin: "0px 10px" }}
    alt="logo"
    width={width}
    height={height}
  />
}
