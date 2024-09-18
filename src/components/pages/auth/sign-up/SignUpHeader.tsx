const SignUpHeader = ({
  steps,
  stepLevel,
}: {
  steps: string[];
  stepLevel: number;
}) => {
  let headerText;

  switch (stepLevel) {
    case 0:
      headerText = (
        <>
          <h2 className="text-2xl">약관에 동의해주세요.</h2>
        </>
      );
      break;
    case 1:
      headerText = (
        <>
          <h2 className="text-2xl">
            카카오톡을 통해
            <br />
            인증 후 회원가입이 가능합니다.
          </h2>
        </>
      );
      break;
    case 2:
      headerText = (
        <>
          <h2 className="text-2xl">
            개인 정보를
            <br />
            입력해주세요.
          </h2>
        </>
      );
      break;
    default:
      headerText = (
        <>
          <h2 className="text-2xl">
            회원가입 절차를
            <br />
            진행해주세요.
          </h2>
        </>
      );
  }

  return (
    <>
      <div className="mt-4 flex space-x-2 justify-center items-center my-6">
        {steps.map((step, index) => (
          <>
            <div
              className={`w-8 h-8 shrink-0 mx-[-1px] p-1.5 flex items-center justify-center rounded-full ${index <= stepLevel ? 'bg-starbucks-green' : 'bg-gray-300'}`}
            >
              <span className="text-base text-white font-bold">
                {index < stepLevel ? '✔' : index + 1}
              </span>
            </div>
            {index < steps.length - 1 && (
              <div
                className={`w-full h-1 ${index < stepLevel ? 'bg-starbucks-green' : 'bg-gray-300'}`}
              ></div>
            )}
          </>
        ))}
      </div>
      <div className="font-bold flex flex-col items-start">{headerText}</div>
    </>
  );
};

export default SignUpHeader;
