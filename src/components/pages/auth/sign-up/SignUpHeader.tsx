const SignUpHeader = ({ step }: { step: string }) => {
  let headerText;

  switch (step) {
    case 'TermsAgree':
      headerText = (
        <>
          <h2 className="text-2xl">
            아이디와 비밀번호를
            <br />
            입력해주세요.
          </h2>
        </>
      );
      break;
    case 'SignUpInfo':
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
    case 'Autentication':
      headerText = (
        <>
          <h2 className="text-2xl">
            약관에 동의해주세요.
            <br />
            확인 후 진행해주세요.
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
    <div className="font-bold flex flex-col items-start">{headerText}</div>
  );
};

export default SignUpHeader;
