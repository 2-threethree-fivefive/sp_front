import Image from 'next/image';

const SignUpHeader = () => {
  return (
    <div className="font-bold flex flex-col items-start mb-6">
      <h2 className="text-2xl mt-2 mb-3">
        아이디와 비밀번호를
        <br /> 입력해주세요.
      </h2>
    </div>
  );
};

export default SignUpHeader;
