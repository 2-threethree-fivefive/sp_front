import Image from 'next/image';

const SignAuthHeader = () => {
  return (
    <div className="font-bold flex flex-col items-start mb-6">
      <Image
        alt="starbucks-logo"
        src="/assets/images/logos/Starbucks-logo.svg"
        width={100}
        height={100}
        className="mb-4"
        priority
      />
      <h2 className="text-2xl mt-2 mb-3">카카오 인증하기</h2>
    </div>
  );
};

export default SignAuthHeader;
