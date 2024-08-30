import Image from 'next/image';

const SignUpAuthHeader = () => {
  return (
    <div className="font-bold flex flex-col items-start mb-6">
      <Image
        alt="starbucks-logo"
        src="/assets/images/logos/Starbucks-logo.svg"
        width={100}
        height={100}
        className="mb-4"
      />
      <h2 className="text-2xl mt-2 mb-3">인증하기</h2>
    </div>
  );
};

export default SignUpAuthHeader;
