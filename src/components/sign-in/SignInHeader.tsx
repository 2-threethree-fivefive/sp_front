import Image from 'next/image'

const SignInHeader = () => {
  return (
    <div className="font-bold flex flex-col items-start mb-6">
      <h1 className="text-3xl font-bold mb-14">로그인</h1>
      <Image
        alt="starbucks-logo"
        src="/assets/images/logos/Starbucks-logo.svg"
        width={100}
        height={100}
        className="mb-4"
      />
      <h2 className="text-2xl mt-2 mb-3">
        안녕하세요.
        <br /> 스타벅스입니다.
      </h2>
      <p className="text-gray-500 mb-12">
        회원 서비스 이용을 위해 로그인 해주세요.
      </p>
    </div>
  )
}

export default SignInHeader
